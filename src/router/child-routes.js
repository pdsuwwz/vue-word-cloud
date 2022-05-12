const importModule = import.meta.glob('../views/*.vue')

const childrenRoutes = [
  {
    path: '/',
    name: 'VueWordCloud',
    component: importModule['../views/overview.vue'],
    meta: {
      title: 'Vue Word Cloud'
    }
  }
]

export default childrenRoutes
