import amplifications from '../../data/amplifications'

const state = {
  amplifications: []
}
const mutations = {
  'SET_AMPLIFICATION' (state, amplifications) {
    state.amplifications = amplifications
  },
  'BUY_AMPLIFICATION'(state, {amplificationId, amplificationPrice}) {

    const record = state.amplifications.find(element => element.id == amplificationId)
    if (record) {
      record.quantity ? record.quantity = record.quantity : record.quantity = 0
      this.state.portfolio.funds -= record.price
      record.quantity += 1
      record.price = Math.round(record.price * 1.1)
    }
  }
}

const actions = {
  initAmplifications: ({commit}) => {
    commit('SET_AMPLIFICATION', amplifications)
  },
  buyAmplification: ({commit}, order) => {
    commit('BUY_AMPLIFICATION', order)
  }
}

const getters = {
  amplifications: state => {
    return state.amplifications
  },
  discount: state => {
    return 1 - (state.amplifications[0].quantity / 1000)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
