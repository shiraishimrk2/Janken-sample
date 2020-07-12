import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: [],
    score_victory: [""],
  },
  mutations: {
    onSelected(state, payload) {
      state.score.push(payload)
      // state.score[payload]
      // state.score = {
      //   payload
      // }
    },
    gamereset(state) {
      state.score = [];
    },

    memo(state, victory) {
      state.score_victory.push(victory)
    }

    // onSelected(state, payload) {
    //   state.score += payload + ','
    // }
  },
  actions: {},
  modules: {},
  getters: {
    score: state => {
      return state.score
    },
    score_victory: state => {
      return state.socre_victory
    }
  }
})