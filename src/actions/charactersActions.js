import AppDispatcher from '../dispatcher'
import API from '../api/characters'

export default {
	getCharactersList(id) {
		return API.GetCharacters(id)
			.then(({data}) => {
				AppDispatcher.handleAction({
					actionType: 'CHARACTERS_RECEIVED',
					data
				})
			})
			.catch(error => {
				throw error
			})
	}
}
