import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Creators as ErrorActions } from '../../store/ducks/error'

import { Container } from './styles'

import CloseIcon from '../../assets/images/close.svg'

const ErrorBox = () => {
	const { visible, message } = useSelector(state => state.error)
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(ErrorActions.hideError())
	}
	return (
		visible && (
			<Container>
				<p>{message}</p>
				<button onClick={handleClick}>
					<img src={CloseIcon} alt="fechar" />
				</button>
			</Container>
		)
	)
}

export default ErrorBox
