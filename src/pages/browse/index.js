import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Creators as PlaylistActions } from '../../store/ducks/playlists'
import { Container, Title, List, PlayList } from './styles'

import Loading from '../../components/Loading'

const Browse = () => {
	const playlists = useSelector(state => state.playlists)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(PlaylistActions.getPlaylistRequest())
	}, [])

	return (
		<Container>
			<Title>Navegar {playlists.loading && <Loading />}</Title>

			<List>
				{playlists.data.map(playlist => (
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
