import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Creators as PlaylistActions } from '../../store/ducks/playlists'
import { Container, Title, List, PlayList } from './styles'

const Browse = () => {
	const playlists = useSelector(state => state.playlists.data)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(PlaylistActions.getPlaylistRequest())
	}, [])

	return (
		<Container>
			<Title>Navegar</Title>

			<List>
				{playlists.map(playlist => (
					<PlayList key={playlist.id} to={`/playlists/${playlist.id}`}>
						<img src={playlist.thumbnail} alt="" />
						<strong>{playlist.title}</strong>
						<p>{playlist.description}</p>
					</PlayList>
				))}
			</List>
		</Container>
	)
}

export default Browse
