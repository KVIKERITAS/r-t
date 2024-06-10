import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import { Filters } from '@/types'

type Props = {
	totalItems: number
	itemsPerPage: number
	currentPage: number
	filters: Filters
	setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

const PaginationSection = ({
	currentPage,
	itemsPerPage,
	filters,
	setFilters,
	totalItems,
}: Props) => {
	const pages = []
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pages.push(i)
	}

	const handlePrev = () => {
		if (currentPage > 1) {
			setFilters({ ...filters, currentPage: currentPage - 1 })
		}
	}

	const handleNext = () => {
		if (currentPage < pages.length) {
			setFilters({ ...filters, currentPage: currentPage + 1 })
		}
	}

	const handlePage = (page: number) => {
		setFilters({ ...filters, currentPage: page })
	}

	return (
		<Pagination>
			<PaginationContent className='flex flex-wrap'>
				<PaginationItem>
					<PaginationPrevious onClick={() => handlePrev()} />
				</PaginationItem>

				{pages.map((page, idx) => (
					<PaginationItem
						key={idx}
						className={currentPage === page ? 'bg-green-200 rounded-md' : ''}
					>
						<PaginationLink onClick={() => handlePage(page)}>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext onClick={() => handleNext()} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

export default PaginationSection
