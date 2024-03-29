import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails'
import { Creators as PlayerActions } from '../../store/ducks/player'

import { Container, Header, SongList, SongItem } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import AddIcon from '../../assets/images/plus.svg'

import Loading from '../../components/Loading'

const Playlist = ({ match }) => {
	const playlistDetails = useSelector(state => state.playlistDetails)
	const currentSong = useSelector(state => state.player.currentSong)
	const dispatch = useDispatch()

	const [selectedSong, setSelectSong] = useState(null)

	useEffect(() => {
		dispatch(PlaylistDetailsActions.getPlaylistDetailsRequest(match.params.id))
	}, [match.params.id])

	const renderDetails = () => {
		const playlist = playlistDetails.data

		const loadSong = (song, list) => {
			dispatch(PlayerActions.loadSong(song, list))
		}

		return (
			<Container>
				<Header>
					<img src={playlist.thumbnail} alt={playlist.title} />

					<div>
						<span>Playlist</span>
						<h1>{playlist.title}</h1>
						{!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

						<button>Play</button>
					</div>
				</Header>

				<SongList cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							<th />
							<th>Título</th>
							<th>Artista</th>
							<th>Álbum</th>
							<th>
								<img src={ClockIcon} alt="duracao" />
							</th>
						</tr>
					</thead>
					<tbody>
						{!playlist.songs ? (
							<tr>
								<td colSpan={5}>Nenhuma música nessa playlist</td>
							</tr>
						) : (
							playlist.songs.map(song => (
								<SongItem
									key={song.id}
									onDoubleClick={() => loadSong(song, playlist.songs)}
									onClick={() => setSelectSong(song.id)}
									selected={song.id === selectedSong}
									playing={currentSong && currentSong.id === song.id}
								>
									<td>
										<img src={AddIcon} alt="adicionar" />
									</td>
									<td>{song.title}</td>
									<td>{song.author}</td>
									<td>{song.album}</td>
									<td>2:21</td>
								</SongItem>
							))
						)}
					</tbody>
				</SongList>
			</Container>
		)
	}
	return playlistDetails.loading ? (
		<Container loading>
			<Loading />
		</Container>
	) : (
		renderDetails()
	)
}

export default Playlist
