import { createStore } from 'vuex'

export default createStore({
  state: {
    pages: [],
  },
  getters: {
    getPages (state) {
      return state.pages
    },
    getPageById: (state) => (id) => {
      return state.pages.find(page => page.idPage === id);
    }
  },
  mutations: {
    addPage (state, page) {
      state.pages.push(page)
    },
    updatePage (state, updatePage) {
      let indexPage = state.pages.findIndex( page => {
        return page.idPage === updatePage.idPage
      })

      state.pages.splice(indexPage, 1, updatePage)
    },
    deletePage(state, indexPage) {
      state.pages.splice(indexPage, 1)
    }
  }
})
