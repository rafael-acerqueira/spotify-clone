import styled from 'styled-components'

import addPlayListIcon from '../../assets/images/add_playlist.svg'

export const Container = styled.aside`
	height: 100%;
	width: 200px;
	background-color: #121212;
	color: #b3b3b3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const AddPlayListImage = styled.img.attrs({
	src: addPlayListIcon,
	alt: 'add-playlist-icon'
})`
	margin-right: 10px;
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
