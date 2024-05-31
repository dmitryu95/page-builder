import { createStore } from 'vuex'

export default createStore({
  state: {
    pages: [
      {
        idPage: "123142111111",
        namePage: "Моя Вторая страница",
        blocks: [
          {
            idBlock: 'block1',
            type: 'textImg',
            content: {
              title: 'Заголовок 1',
              backgroundColorTitle: '',
              text: 'Описание блока 1',
              backgroundColorText: '',
              img: 'https://example.com/image1.jpg',
              backgroundColorImg: '',
              reverse: false
            }
          },
          {
            idBlock: 'block2',
            type: 'text',
            content: {
              title: 'Заголовок 2',
              titleStyles: {
                textAlign: 'left',
                fontSize: '16px',
                fontStyle: 'normal',
                color: '#000000',
                backgroundColor: '#f0f0f0',
              },
              text: 'Текст блока 2',
              textStyles: {
                textAlign: 'left',
                fontSize: '16px',
                fontStyle: 'normal',
                color: '#000000',
                backgroundColor: '#f0f0f0',
              },
            },
          },
          {
            idBlock: 'block3',
            type: 'img',
            content: {
              img: 'https://example.com/image2.jpg',
              backgroundColor: '#ffffff',
            }, 
          }
        ],
      },
    ],
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
        return page.index === updatePage.idPage
      })

      state.pages.splice(indexPage, 1, updatePage)
    },
    deletePage(state, indexPage) {
      state.pages.splice(indexPage, 1)
    }
  }
})
