// Vue Component Install
import Footer from '@/components/Footer/index.vue'

const Components = {
  install (app) {
    componentList.forEach((Comp) => {
      app.component(Comp.name, Comp)
    })
  }
}

const componentList = [
  Footer
]

export default Components
