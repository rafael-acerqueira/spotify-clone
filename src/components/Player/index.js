import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'rc-slider'
import Sound from 'react-sound'

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

const Player = () => {
	const player = useSelector(state => state.player)
	return (
		<Container>
			{!!player.currentSong && (
				<Sound url={player.currentSong.file} playStatus={player.status} />
			)}
			<Current>
				{!!player.currentSong && (
					<Fragment>
						<img
							src={player.currentSong.thumbnail}
							alt={player.currentSong.title}
						/>
						<div>
							<span>{player.currentSong.title}</span>
							<small>{player.currentSong.author}</small>
						</div>
					</Fragment>
				)}
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
}

export default Player
