import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function convertArea(area: number | undefined) {
	const convertedArea = area + ' km²'

	if (!area) return 'Unknown measures'

	return convertedArea
}
