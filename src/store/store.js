import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import shop from './modules/shop'
import * as actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio,
    shop
  }
})
