import { createRouter, createWebHistory } from 'vue-router'
import PageList from '../views/PageList.vue'
import PageEditor from '../views/PageEditor.vue'

const routes = [
  {
    path: '/',
    name: 'PageList',
    component: PageList
  },
  {
    path: '/edit/:idPage?',
    name: 'PageEditor',
    component: PageEditor, 
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
