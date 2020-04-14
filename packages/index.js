import QueryBar from './query-bar'
import QueryPanel from './query-panel'

const components = [QueryBar, QueryPanel]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  ...components
}
