import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import editor from '@/components/editor'
import person from '@/components/person'
import backstage from '@/components/backstage'
import alumniCenter from '@/components/alumniCenter'
import governmentCollaboration from '@/components/governmentCollaboration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: backstage
    },
    {
      path: '/alumniCenter',
      name: 'alumniCenter',
      component: alumniCenter
    },
    {
      path: '/governmentCollaboration',
      name: 'governmentCollaboration',
      component: governmentCollaboration
    },
    { path: '',  redirect:'/'},
    { path: '*',  redirect:'/'},
  ]
})
