import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './config/reactotron'
import GlobalStyle from './syles/global'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'
import ErrorBox from './components/ErrorBox'

import { Wrapper, Container, Content } from './syles/components'

import Routes from './routes'

import store from './store'
const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Wrapper>
				<Container>
					<Sidebar />
					<Content>
						<ErrorBox />
						<Header />
						<Routes />
					</Content>
				</Container>
				<GlobalStyle />
				<Player />
			</Wrapper>
		</BrowserRouter>
	</Provider>
)

export default App
