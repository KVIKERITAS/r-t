export type Country = {
	name: string
	region: string
	area?: number
	independent: boolean
}

export type Sort = 'asc' | 'desc'

export type Filters = {
	region: boolean
	area: boolean
	sort: Sort
	currentPage: number
}
