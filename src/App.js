import React from 'react'

import GlobalStyle from './syles/global'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import { Wrapper, Container, Content } from './syles/components'

const App = () => (
	<Wrapper>
		<Container>
			<Sidebar />
			<Content>
				<Header />
			</Content>
		</Container>
		<GlobalStyle />
		<Player />
	</Wrapper>
)

export default App
