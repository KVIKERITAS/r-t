import { useCallback, useEffect, useState } from 'react'
import { useGetCountries } from './api/CountriesApi'
import CountryList from './components/CountryList'
import FilterMenu from './components/FilterMenu'
import Loader from './components/Loader'
import PaginationSection from './components/PaginationSection'
import { Country, Filters } from './types'

function App() {
	const { countryList, isLoading, error } = useGetCountries()
	const [filteredCountries, setFilteredCountries] = useState<
		Country[] | undefined
	>(undefined)

	const [filters, setFilters] = useState<Filters>({
		area: false,
		region: false,
		sort: 'desc',
		currentPage: 1,
	})

	const [lithuaniaSize, setLithuaniaSize] = useState<number | undefined>(
		undefined,
	)

	const itemsPerPage = 10

	const lastItemIndex = filters.currentPage * itemsPerPage
	const firstItemIndex = lastItemIndex - itemsPerPage

	const sortedAndFilteredCountries = useCallback(
		(filters: Filters) => {
			return (
				countryList &&
				countryList
					.filter(country => {
						if (filters.region) {
							return country.region && country.region === 'Oceania'
						}
						return country
					})
					.filter(country => {
						if (filters.area) {
							return country.area && country.area < (lithuaniaSize as number)
						}
						return country
					})
					.sort((a, b) => {
						if (filters.sort === 'desc') {
							return a.name.localeCompare(b.name)
						} else if (filters.sort === 'asc') {
							return b.name.localeCompare(a.name)
						}
						return 0
					})
			)
		},
		[countryList, lithuaniaSize],
	)

	useEffect(() => {
		if (countryList) {
			setFilteredCountries(countryList)

			const lithuaniaIndex = countryList?.findIndex(
				country => country.name === 'Lithuania',
			) as number
			setLithuaniaSize(countryList[lithuaniaIndex].area)
		}
	}, [countryList])

	useEffect(() => {
		const countries = sortedAndFilteredCountries(filters)
		setFilteredCountries(countries)
	}, [filters, sortedAndFilteredCountries])

	if (error) return <div>Failed to fetch data. Try refreshing the page.</div>

	return (
		<div className='space-y-6'>
			<h1 className='text-xl md:text-4xl font-bold'>
				REIZ-TECH FRONT-END TASK
			</h1>
			<FilterMenu
				filters={filters}
				setFilters={setFilters}
				isLoading={isLoading}
			/>
			{isLoading && <Loader />}
			{filteredCountries && (
				<>
					<CountryList
						countries={filteredCountries.slice(firstItemIndex, lastItemIndex)}
					/>
					<PaginationSection
						totalItems={filteredCountries.length}
						itemsPerPage={itemsPerPage}
						currentPage={filters.currentPage}
						filters={filters}
						setFilters={setFilters}
					/>
				</>
			)}
		</div>
	)
}

export default App
