import { Filters } from '@/types'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from './ui/button'

type Props = {
	filters: Filters
	setFilters: React.Dispatch<React.SetStateAction<Filters>>
	isLoading: boolean
}

const FilterMenu = ({ filters, setFilters, isLoading }: Props) => {
	const handleOrder = () => {
		if (filters.sort === 'asc') {
			setFilters({ ...filters, sort: 'desc', currentPage: 1 })
		} else {
			setFilters({ ...filters, sort: 'asc', currentPage: 1 })
		}
	}

	const handleRegion = () => {
		setFilters({ ...filters, region: !filters.region, currentPage: 1 })
	}

	const handleArea = () => {
		setFilters({ ...filters, area: !filters.area, currentPage: 1 })
	}

	return (
		<div className='flex justify-between'>
			<div className='space-x-2'>
				<Button
					onClick={handleRegion}
					disabled={isLoading}
					className={!filters.region ? 'opacity-55' : ''}
				>
					Region 'Oceania'
				</Button>
				<Button
					onClick={handleArea}
					disabled={isLoading}
					className={!filters.area ? 'opacity-55' : ''}
				>
					Smaller than Lithuania
				</Button>
			</div>
			<div>
				<Button onClick={handleOrder} disabled={isLoading}>
					Sort {filters.sort === 'asc' ? <ChevronUp /> : <ChevronDown />}
				</Button>
			</div>
		</div>
	)
}

export default FilterMenu
