import _ from 'underscore'
import { system, menu } from './menu.config.json'

export function getMenuList(id) {
  return _.filter(menu, item => item.pid == id)
}

export function getSystemList() {
  return system
}
