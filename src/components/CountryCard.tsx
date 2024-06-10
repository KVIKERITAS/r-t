import { convertArea } from '@/lib/utils'
import { Country } from '@/types'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'

type Props = {
	country: Country
}

const CountryCard = ({ country }: Props) => {
	return (
		<Card className='bg-green-200'>
			<CardHeader>
				<CardTitle>{country.name}</CardTitle>
				<CardDescription>{country.region}</CardDescription>
			</CardHeader>
			<CardFooter>
				<p className='text-xs'>
					Size: <span className='font-bold'>{convertArea(country.area)}</span>
				</p>
			</CardFooter>
		</Card>
	)
}

export default CountryCard
