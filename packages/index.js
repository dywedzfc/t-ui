import Layout from './layout'
import GridLayout from './grid-layout'
import TablePage from './table-page'
import TableIndex from './table-index'
import TableOperate from './table-operate'
import QueryBar from './query-bar'
import QueryPanel from './query-panel'
import DragPicture from './drag-picture'
import Dialog from './dialog'

const components = [
  Layout,
  GridLayout,
  TablePage,
  TableIndex,
  TableOperate,
  QueryBar,
  QueryPanel,
  DragPicture,
  Dialog
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  ...components
}
