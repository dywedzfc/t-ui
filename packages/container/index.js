import TContainer from './src/Container'

TContainer.install = function(Vue) {
  Vue.component(TContainer.name, TContainer)
}

export default TContainer
