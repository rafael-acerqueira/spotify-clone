import styled from 'styled-components'

import { Spinner } from '../Loading/styles'

import addPlayListIcon from '../../assets/images/add_playlist.svg'

export const Container = styled.aside`
	height: 100%;
	width: 200px;
	background-color: #121212;
	color: #b3b3b3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	> div {
		padding: 25px;
	}
`

export const AddPlayListImage = styled.img.attrs({
	src: addPlayListIcon,
	alt: 'add-playlist-icon'
})`
	margin-right: 10px;
`

export const Nav = styled.ul`
	list-style: none;
	margin-top: 25px;

	&:first-child {
		margin-top: 0;
	}

	li {
		display: flex;
		align-items: center;

		a {
			color: inherit;
			text-decoration: none;
			font-size: 13px;
			line-height: 32px;
			font-weight: ${props => (props.main ? 'bold' : 'normal')};
		}

		span {
			font-size: 11px;
			text-transform: uppercase;
			line-height: 22px;
			letter-spacing: 1.11px;
			font-weight: 300;
		}

		${Spinner} {
			height: 15px;
			margin-left: 5px;
		}
	}
`

export const NewPlayList = styled.button`
	background-color: transparent;
	border: 0;
	border-top: 1px solid #282828;
	color: #b3b3b3;
	cursor: pointer;
	font-size: 13px;
	display: flex;
	align-items: center;
	padding: 15px 25px;

	&:hover {
		color: #fff;
	}
`
