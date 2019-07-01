import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import { Creators as PlaylistActions } from '../ducks/playlists'
import { Creators as ErrorActions } from '../ducks/error'

export function * getPlaylists () {
	try {
		const { data } = yield call(api.get, '/playlists')
		yield put(PlaylistActions.getPlaylistSuccess(data))
	} catch (error) {
		yield put(ErrorActions.setError('Não foi possível obter as playlists'))
	}
}
