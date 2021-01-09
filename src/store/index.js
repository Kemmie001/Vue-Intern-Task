import Vue from 'vue'
import Vuex from 'vuex'

const BASE_URL = 'https://hirng-x2021.glitch.me/api'

Vue.use(Vuex)

const state = {
	name: '',
	socialLinks: {},
	isLoading: false
}

const actions = {
	getDetails: async ({commit}) => {
        commit ("SET_LOADING_STATE", true)
        let res =  await fetch(BASE_URL)
        if (res.status !== 200 && !res.ok) return
        res = await res.json()
        console.log(res)
        commit ("SET_LOADING_STATE", false)
        commit ("SET_DETAILS", res)
    }
}

const mutations = {
	SET_DETAILS(state, { name, social_media }) {
		state.name = name;
		state.socialLinks = social_media
	},
	SET_LOADING_STATE(state, isLoading) {
		state.isLoading = isLoading
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})