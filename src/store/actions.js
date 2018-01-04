import axios from 'axios'

export const fetchData = ({commit}) => {
  axios.get('data.json')
    .then(data => {
      if (data) {
        const stocks = data['data'].stocks
        const funds = data['data'].funds
        const stockPortfolio = data['data'].stockPortfolio
        const amplifications = data['data'].amplifications

        const portfolio = {
          stockPortfolio,
          funds
        }
        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
        commit('SET_AMPLIFICATION', amplifications)
      }
    })
}
