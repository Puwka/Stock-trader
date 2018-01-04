import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'
import Shop from './components/shop/Shop.vue'


export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    component: Stocks
  },
  {
    path: '/shop',
    component: Shop
  }
]
