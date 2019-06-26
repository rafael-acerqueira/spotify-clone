import React from 'react'

import { Container, Header, SongList } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import AddIcon from '../../assets/images/plus.svg'

const Playlist = () => (
	<Container>
		<Header>
			<img
				src="http://portaldoguigui.com.br/wp-content/uploads/2018/08/37500557_2090114051047574_3731377190588121088_n-300x300.jpg"
				alt=""
			/>

			<div>
				<span>Playlist</span>
				<h1>Playlist name</h1>
				<p>25 songs</p>

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
				<tr>
					<td>
						<img src={AddIcon} alt="adicionar" />
					</td>
					<td>Renascerá</td>
					<td>Calcinha Preta</td>
					<td>DVD 2 Belém do Pará</td>
					<td>2:21</td>
				</tr>
				<tr>
					<td>
						<img src={AddIcon} alt="adicionar" />
					</td>
					<td>Renascerá</td>
					<td>Calcinha Preta</td>
					<td>DVD 2 Belém do Pará</td>
					<td>2:21</td>
				</tr>
				<tr>
					<td>
						<img src={AddIcon} alt="adicionar" />
					</td>
					<td>Renascerá</td>
					<td>Calcinha Preta</td>
					<td>DVD 2 Belém do Pará</td>
					<td>2:21</td>
				</tr>
				<tr>
					<td>
						<img src={AddIcon} alt="adicionar" />
					</td>
					<td>Renascerá</td>
					<td>Calcinha Preta</td>
					<td>DVD 2 Belém do Pará</td>
					<td>2:21</td>
				</tr>
				<tr>
					<td>
						<img src={AddIcon} alt="adicionar" />
					</td>
					<td>Renascerá</td>
					<td>Calcinha Preta</td>
					<td>DVD 2 Belém do Pará</td>
					<td>2:21</td>
				</tr>
				<tr>
					<td>
						<img src={AddIcon} alt="adicionar" />
					</td>
					<td>Renascerá</td>
					<td>Calcinha Preta</td>
					<td>DVD 2 Belém do Pará</td>
					<td>2:21</td>
				</tr>
				<tr>
					<td>
						<img src={AddIcon} alt="adicionar" />
					</td>
					<td>Renascerá</td>
					<td>Calcinha Preta</td>
					<td>DVD 2 Belém do Pará</td>
					<td>2:21</td>
				</tr>
				<tr>
					<td>
						<img src={AddIcon} alt="adicionar" />
					</td>
					<td>Renascerá</td>
					<td>Calcinha Preta</td>
					<td>DVD 2 Belém do Pará</td>
					<td>2:21</td>
				</tr>{' '}
				<tr>
					<td>
						<img src={AddIcon} alt="adicionar" />
					</td>
					<td>Renascerá</td>
					<td>Calcinha Preta</td>
					<td>DVD 2 Belém do Pará</td>
					<td>2:21</td>
				</tr>
			</tbody>
		</SongList>
	</Container>
)

export default Playlist
