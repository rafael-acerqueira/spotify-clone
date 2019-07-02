import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import PauseIcon from '../../assets/images/pause.svg'
import ForwardIcon from '../../assets/images/forward.svg'
import RepeatIcon from '../../assets/images/repeat.svg'

import { Creators as PlayerActions } from '../../store/ducks/player'

const Player = () => {
	const player = useSelector(state => state.player)

	const dispatch = useDispatch()

	const play = () => {
		dispatch(PlayerActions.playSong())
	}

	const pause = () => {
		dispatch(PlayerActions.pauseSong())
	}

	const next = () => {
		dispatch(PlayerActions.nextSong())
	}

	const prev = () => {
		dispatch(PlayerActions.prevSong())
	}

	const playing = e => {
		dispatch(PlayerActions.playingSong(e))
	}

	const setPosition = percent => {
		dispatch(PlayerActions.setSongPosition(percent))
	}

	const changePosition = percent => {
		dispatch(PlayerActions.changeSongPosition(percent))
	}

	const setVolume = value => {
		dispatch(PlayerActions.setVolume(value))
	}

	const msToTime = duration => {
		if (!duration) return null

		let seconds = parseInt((duration / 1000) % 60, 10)
		const minutes = parseInt((duration / (1000 * 60)) % 60, 10)

		seconds = seconds < 10 ? `0${seconds}` : seconds

		return `${minutes}:${seconds}`
	}

	const position = msToTime(player.position)
	const duration = msToTime(player.duration)
	const positionShow = msToTime(player.positionShow)
	const progress = parseInt(
		(player.positionShow || player.position) * (1000 / player.duration),
		10
	)

	return (
		<Container>
			{!!player.currentSong && (
				<Sound
					url={player.currentSong.file}
					playStatus={player.status}
					onFinishedPlaying={next}
					onPlaying={e => playing(e)}
					position={player.position}
					volume={player.volume}
				/>
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
					<button onClick={prev}>
						<img src={BackwardIcon} alt="backward" />
					</button>
					{!!player.currentSong && player.status === Sound.status.PLAYING ? (
						<button onClick={pause}>
							<img src={PauseIcon} alt="pause" />
						</button>
					) : (
						<button onClick={play}>
							<img src={PlayIcon} alt="play" />
						</button>
					)}

					<button onClick={next}>
						<img src={ForwardIcon} alt="forward" />
					</button>
					<button>
						<img src={RepeatIcon} alt="repeat" />
					</button>
				</Controls>
				<Time>
					<span>{positionShow || position}</span>
					<ProgressSlider>
						<Slider
							railStyle={{ backgroundColor: '#404040', borderRadius: 10 }}
							trackStyle={{ backgroundColor: '#1ED760' }}
							handleStyle={{ border: 0 }}
							max={1000}
							onChange={value => changePosition(value / 1000)}
							onAfterChange={value => setPosition(value / 1000)}
							value={progress}
						/>
					</ProgressSlider>
					<span>{duration}</span>
				</Time>
			</Progress>

			<Volume>
				<img src={VolumeIcon} alt="volume" />
				<Slider
					railStyle={{ backgroundColor: '#404040', borderRadius: 10 }}
					trackStyle={{ backgroundColor: '#FFF' }}
					handleStyle={{ display: 'none' }}
					value={player.volume}
					onChange={setVolume}
				/>
			</Volume>
		</Container>
	)
}

export default Player
