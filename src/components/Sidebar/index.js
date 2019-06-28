import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { Creators as PlaylistActions } from '../../store/ducks/playlists'

import { Container, NewPlayList, AddPlayListImage, Nav } from './styles'

const Sidebar = () => {
	const playlists = useSelector(state => state.playlists.data)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(PlaylistActions.getPlaylistRequest())
	}, [])
	return (
		<Container>
			<div>
				<Nav main>
					<li>
						<a href="">Navegar</a>
					</li>
					<li>
						<a href="">Rádio</a>
					</li>
				</Nav>
				<Nav>
					<li>
						<span>Sua Biblioteca</span>
					</li>
					<li>
						<a href="">Seu Daily Mix</a>
					</li>
					<li>
						<a href="">Tocados Recentemente</a>
					</li>
					<li>
						<a href="">Músicas</a>
					</li>
					<li>
						<a href="">Albúns</a>
					</li>
					<li>
						<a href="">Artistas</a>
					</li>
					<li>
						<a href="">Estações</a>
					</li>
					<li>
						<a href="">Arquivos Locais</a>
					</li>
					<li>
						<a href="">Vídeos</a>
					</li>
					<li>
						<a href="">Podcasts</a>
					</li>
				</Nav>
				<Nav>
					<li>
						<span>Playlists</span>
					</li>
					{playlists.map(playlist => (
						<li key={playlist.id}>
							<Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
						</li>
					))}
				</Nav>
			</div>
			<NewPlayList>
				<AddPlayListImage />
				Nova Playlist
			</NewPlayList>
		</Container>
	)
}

export default Sidebar
