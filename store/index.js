import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: {},
    },
    mutations: {
      add_product(state, products) {
        state.products = products
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://account-debe0-default-rtdb.firebaseio.com/posts.json')
          .then((res) => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('add_product', postsArray)
          })
          .catch((e) => context.error(e))
      },
      // set_products(vuexContext, product) {
      //   vuexContext.commit('add_product', product)
      // },
    },
    getters: {
      newRow(state) {
        return state.products
      },
    },
  })
}
export default createStore
