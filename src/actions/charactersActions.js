import AppDispatcher from '../dispatcher'
import API from '../api/characters'

export default {
	getCharactersList(params) {
		return API.GetCharacters(params)
			.then(({data}) => {
				AppDispatcher.handleAction({
					actionType: 'CHARACTERS_RECEIVED',
					data
				})
			})
			.catch(error => {
				throw error
			})
	},
  getSingleCharacter(id) {
		return API.GetSingleCharacter(id)
			.then(({data}) => {
				AppDispatcher.handleAction({
					actionType: 'CHARACTER_RECEIVED',
					data
				})
			})
			.catch(error => {
				throw error
			})
	},
}
