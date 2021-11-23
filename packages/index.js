import Layout from './layout'
import Container from './container'
import Header from './container-header'
import Aside from './container-aside'
import Body from './container-body'
import Footer from './container-footer'
import Menu from './menu'
import MenuItem from './menu-item'
import MenuItemGroup from './menu-item-group'
import MenuItemAuto from './menu-item-auto'
import Submenu from './submenu'
import GridLayout from './grid-layout'
import TablePage from './table-page'
import TableIndex from './table-index'
import TableCheckbox from './table-checkbox'
import TableColumn from './table-column'
import TableOperate from './table-operate'
import TableButton from './table-button'
import Panel from './panel'
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
  Menu,
  MenuItem,
  MenuItemGroup,
  MenuItemAuto,
  Submenu,
  GridLayout,
  TablePage,
  TableIndex,
  TableCheckbox,
  TableColumn,
  TableOperate,
  TableButton,
  Panel,
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
