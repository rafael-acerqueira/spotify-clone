import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails'

export function * getPlaylistDetails (action) {
	try {
		const { data } = yield call(
			api.get,
			`/playlists/${action.payload.id}?_embed=songs`
		)
		yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(data))
	} catch (error) {
		console.log(error)
	}
}
