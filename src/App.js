import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import './config/reactotron'
import GlobalStyle from './syles/global'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import { Wrapper, Container, Content } from './syles/components'

import Routes from './routes'

const App = () => (
	<BrowserRouter>
		<Wrapper>
			<Container>
				<Sidebar />
				<Content>
					<Header />
					<Routes />
				</Content>
			</Container>
			<GlobalStyle />
			<Player />
		</Wrapper>
	</BrowserRouter>
)

export default App
