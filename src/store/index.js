import _ from 'underscore'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const USE_TYPE = { Y: 'Y', N: 'N' }

export default new Vuex.Store({
  state: {
    menu: {
      data: [],
      mode: '',
      collapse: false,
      active: '',
      opened: [],
      uniqueOpened: false,
      menuTrigger: '',
      router: false,
      collapseTransition: true
    }
  },
  getters: {
    menu: state => state.menu
  },
  mutations: {
    SET_MENU_DATA(state, value) {
      if (!_.isArray(value)) throw new TypeError('TMenu: data is not Array')
      state.menu.data = value
    },
    SET_MENU_MODE(state, value) {
      if (value == null) {
        if (!state.menu.mode) state.menu.mode = 'vertical'
        return
      }
      state.menu.mode = value
    },
    SET_MENU_COLLAPSE(state, value) {
      if (state.menu.mode.indexOf('vertical') != 0) state.menu.collapse = false
      else state.menu.collapse = value
    },
    SET_MENU_ACTIVE(state, value) {
      if (value == null) return
      if (typeof value === 'string') state.menu.active = value
      if (typeof value === 'object' && 'id' in value) {
        const { data } = state.menu
        const { id, pid } = value
        let list = []
        if (pid) list = _.filter(data, ({ id: d, pid: p }) => pid && pid == p && id != d)
        else list = _.filter(data, ({ id: d, pid: p }) => !p && id != d)
        for (let i = state.menu.opened.length - 1; 0 <= i; i--) {
          const item = state.menu.opened[i]
          const index = _.map(list, 'id').indexOf(item) // _.indexOf(list, item)
          if (index != -1 && state.menu.collapse) state.menu.opened.splice(index, 1)
        }
        state.menu.active = id
      }
    },
    SET_MENU_OPENED(state, value = []) {
      const { data, uniqueOpened, opened } = state.menu
      // 删除传入已有的菜单；根据类型返回，存在或不存在的菜单列表
      function filterMenuOpened(type) {
        // const removeList = []
        const list = _.filter(value, item => {
          const index = _.indexOf(state.menu.opened, item)
          // if (index >= 0) removeList.push(item) // state.menu.opened.splice(index, 1)
          if (type == USE_TYPE.Y) return index >= 0
          if (type == USE_TYPE.N) return index == -1
        })
        for (let i = value.length - 1; 0 <= i; i--) {
          const item = value[i]
          const index = _.indexOf(state.menu.opened, item)
          if (index != -1) state.menu.opened.splice(index, 1)
        }
        return list
      }

      /* 同级可以同时显示多个子菜单 */ if (!uniqueOpened) {
        if (_.isArray(value)) {
          const value = filterMenuOpened(USE_TYPE.N)
          if (value.length) state.menu.opened.concat(value)
        } else {
          const index = _.indexOf(state.menu.opened, value)
          if (index >= 0) state.menu.opened.splice(index, 1)
          else state.menu.opened.push(value)
        }
      } /* 同级只能显示一个子菜单 */ else {
        if (_.isArray(value)) {
          const list = filterMenuOpened(USE_TYPE.Y)
          if (list.length == 0) state.menu.opened = value
        } else {
          const flist = _.filter(data, item => item.id == value)
          if (flist.length == 0) return
          const fitem = flist[0]
          /* 找到除了自身同级菜单 */
          let list = []

          if (!fitem.pid) {
            if (opened.includes(value)) state.menu.opened = []
            else state.menu.opened = [value]
            return
          } else list = _.filter(data, item => item.pid == fitem.pid && item.id != value)

          // 判断是否存在
          const index = _.indexOf(state.menu.opened, value)
          /* 存在-删除 */ if (index >= 0) state.menu.opened.splice(index, 1)
          /* 不存在-添加 */ else {
            // 删除同级存在的菜单，并添加当前菜单
            if (list.length) {
              _.each(list, item => {
                const index = _.indexOf(state.menu.opened, item.id)
                if (index >= 0) state.menu.opened.splice(index, 1)
              })
              state.menu.opened.push(value)
            } else {
              if (state.menu.opened.length) state.menu.opened.push(value)
              else state.menu.opened = [value]
            }
          }
        }
      }
    },
    SET_MENU_UNIQUEOPENED(state, value) {
      if (typeof value != 'boolean') return
      state.menu.uniqueOpened = value
    },
    SET_MENU_MENUTRIGGER(state, value) {
      if (value == null) {
        if (!state.menu.menuTrigger) state.menu.menuTrigger = 'hover'
        return
      }
      state.menu.menuTrigger = value
    },
    SET_MENU_ROUTER(state, value) {
      if (typeof value != 'boolean') return
      state.menu.router = value
    },
    SET_MENU_TRANSITION(state, value) {
      if (typeof value != 'boolean') return
      state.menu.collapseTransition = value
    }
  },
  actions: {
    INIT_MENU({ commit }, data) {
      commit('SET_MENU_DATA', data.data)
      commit('SET_MENU_MODE', data.mode)
      commit('SET_MENU_COLLAPSE', data.collapse)
      commit('SET_MENU_UNIQUEOPENED', data.uniqueOpened)
      commit('SET_MENU_MENUTRIGGER', data.menuTrigger)
      commit('SET_MENU_ACTIVE', data.active)
      commit('SET_MENU_OPENED', data.opened)
      commit('SET_MENU_ROUTER', data.router)
      commit('SET_MENU_TRANSITION', data.collapseTransitionz)
    }
  },
  modules: {}
})
