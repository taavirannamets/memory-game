// Styles
import './Card.css'

export default function Card({ card }) {
	return (
		<div>
			<div className='card'>
				<div>
					<img className='front' src={card.src} alt='card fromt' />
					<img className='back' src='/img/cover.png' alt='card back' />
				</div>
			</div>
		</div>
	)
}
