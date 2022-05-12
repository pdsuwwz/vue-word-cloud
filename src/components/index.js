// Vue Component Install

const Components = {
  install (app) {
    componentList.forEach((Comp) => {
      app.component(Comp.name, Comp)
    })
  }
}

const componentList = [
  // ...
]

export default Components
