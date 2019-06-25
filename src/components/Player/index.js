import React from 'react'
import Slider from 'rc-slider'

import {
	Container,
	Current,
	Volume,
	Progress,
	Controls,
	Time,
	ProgressSlider
} from './styles'

import VolumeIcon from '../../assets/images/volume.svg'
import ShuffleIcon from '../../assets/images/shuffle.svg'
import BackwardIcon from '../../assets/images/backward.svg'
import PlayIcon from '../../assets/images/play.svg'
// import PauseIcon from '../../assets/images/pause.svg'
import ForwardIcon from '../../assets/images/forward.svg'
import RepeatIcon from '../../assets/images/repeat.svg'

const Player = () => (
	<Container>
		<Current>
			<img
				src="http://portaldoguigui.com.br/wp-content/uploads/2018/08/37500557_2090114051047574_3731377190588121088_n-300x300.jpg"
				alt="cover"
			/>
			<div>
				<span>Furunfa</span>
				<small>Calcinha Preta</small>
			</div>
		</Current>

		<Progress>
			<Controls>
				<button>
					<img src={ShuffleIcon} alt="shuffle" />
				</button>
				<button>
					<img src={BackwardIcon} alt="backward" />
				</button>
				<button>
					<img src={PlayIcon} alt="play" />
				</button>
				<button>
					<img src={ForwardIcon} alt="forward" />
				</button>
				<button>
					<img src={RepeatIcon} alt="repeat" />
				</button>
			</Controls>
			<Time>
				<span>2:35</span>
				<ProgressSlider>
					<Slider
						railStyle={{ backgroundColor: '#404040', borderRadius: 10 }}
						trackStyle={{ backgroundColor: '#1ED760' }}
						handleStyle={{ border: 0 }}
					/>
				</ProgressSlider>
				<span>3:05</span>
			</Time>
		</Progress>

		<Volume>
			<img src={VolumeIcon} alt="volume" />
			<Slider
				railStyle={{ backgroundColor: '#404040', borderRadius: 10 }}
				trackStyle={{ backgroundColor: '#FFF' }}
				handleStyle={{ display: 'none' }}
				value={100}
			/>
		</Volume>
	</Container>
)

export default Player
