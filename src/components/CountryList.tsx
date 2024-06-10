import { Country } from '@/types'
import CountryCard from './CountryCard'

type Props = {
	countries: Country[] | undefined
}

const CountryList = ({ countries }: Props) => {
	return (
		<ul className='mt-5'>
			<li className='space-y-1.5'>
				{countries &&
					countries.map(country => (
						<CountryCard country={country} key={country.name} />
					))}
			</li>
		</ul>
	)
}

export default CountryList
