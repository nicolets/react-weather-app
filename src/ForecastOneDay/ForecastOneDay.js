
import DaysOfWeek from '../DaysOfWeek';
import './ForecastOneDay.css'

function ForecastOneDay(props) {
    return <div className='myApp'>
        <DaysOfWeek numberToDay={props.dayOfWeek} />
			<img src={ require(`../icons/${props.icon}.png`).default } />
			<div>
				<span className='spanTemp'>{props.temperature}°</span>
				<span className='spanDesc'>{props.description}</span>
			</div>
    </div>
}

export default ForecastOneDay;