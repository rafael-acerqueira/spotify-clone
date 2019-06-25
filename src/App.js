import React from 'react'

import GlobalStyle from './syles/global'

import Sidebar from './components/Sidebar'
import Player from './components/Player'

import { Wrapper, Container } from './syles/components'

const App = () => (
	<Wrapper>
		<Container>
			<Sidebar />
		</Container>
		<GlobalStyle />
		<Player />
	</Wrapper>
)

export default App
