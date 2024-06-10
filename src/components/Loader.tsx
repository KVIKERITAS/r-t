import { ring } from 'ldrs'

ring.register()

const Loader = () => {
	return (
		<div className='flex justify-center'>
			<l-ring
				size='40'
				stroke='5'
				bg-opacity='0'
				speed='2'
				color='green'
				l-ring
			/>
		</div>
	)
}

export default Loader
