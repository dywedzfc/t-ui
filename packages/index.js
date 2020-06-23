import Layout from './layout'
import Container from './container'
import Header from './container-header'
import Aside from './container-aside'
import Body from './container-body'
import Footer from './container-footer'
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
  Container,
  Header,
  Aside,
  Body,
  Footer,
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
