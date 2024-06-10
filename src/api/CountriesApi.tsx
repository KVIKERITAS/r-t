import { Country } from '@/types'
import { useQuery } from 'react-query'

export const useGetCountries = () => {
	const getCountriesRequest = async (): Promise<Country[]> => {
		const response = await fetch(
			'https://restcountries.com/v2/all?fields=name,region,area',
		)

		if (!response.ok) throw new Error('Failed to fetch countries')

		return response.json()
	}

	const {
		data: countryList,
		isLoading,
		error,
	} = useQuery('fetchCountries', getCountriesRequest)

	return { countryList, isLoading, error }
}
