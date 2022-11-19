// Styles
import './Card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {
	const handleClick = () => {
		handleChoice(card)
		if (!disabled) {
		}
	}

	return (
		<div>
			<div className='card'>
				<div className={flipped ? 'flipped' : ''}>
					<img className='front' src={card.src} alt='card fromt' />
					<img
						className='back'
						src='/img/cover.png'
						onClick={handleClick}
						alt='card back'
					/>
				</div>
			</div>
		</div>
	)
}
