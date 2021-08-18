<template>
  <t-container class="index-wrapper" border>
    <t-header height="80px"></t-header>
    <t-container class="index-body" border>
      <!-- <t-menu-item id="yhgl" title="用户管理" icon="el-icon-menu" path="/xtsz/yhgl" pid="xtsz" /> -->
      <!-- <t-aside class="index-left" width="65px">
        <t-menu
          :data="initMenuList()"
          theme="dark-blue"
          menu-trigger="click"
          unique-opened
          router
          collapse
        >
          <el-tooltip content="首页" placement="right">
            <t-menu-item id="home" title="首页" icon="el-icon-menu" path="/home"></t-menu-item>
          </el-tooltip>
          <t-menu-item-auto id="home" title="首页" icon="el-icon-menu" path="/home">
            <t-menu-item
              id="yhgl"
              title="用户管理"
              icon="el-icon-menu"
              path="/xtsz/yhgl"
              pid="xtsz"
            />
          </t-menu-item-auto>
          <t-menu-item-auto
            id="xtsz"
            title="系统设置"
            icon="el-icon-menu"
            :children="[
              { id: 'yhgl', title: '用户管理', icon: '', path: '/xtsz/yhgl', pid: 'xtsz' },
              { id: 'qxgl', title: '权限管理', icon: '', path: '/xtsz/qxgl', pid: 'xtsz' },
              { id: 'csgl', title: '测试管理', icon: '', pid: 'xtsz' },
              { id: 'csgl2', title: '测试管理2', icon: '', pid: 'xtsz' }
            ]"
          >
            <t-menu-item-group title="系统设置" type="title">
              <t-menu-item-group title="用户设置">
                <t-menu-item-auto
                  id="yhgl"
                  title="用户管理"
                  icon="el-icon-menu"
                  path="/xtsz/yhgl"
                  pid="xtsz"
                />
                <t-menu-item-auto
                  id="qxgl"
                  title="权限管理"
                  icon="el-icon-menu"
                  path="/xtsz/qxgl"
                  pid="xtsz"
                />
              </t-menu-item-group>
              <t-menu-item-auto
                id="csgl"
                title="测试管理"
                icon="el-icon-menu"
                :children="[
                  {
                    id: 'ceshi1',
                    title: '测试1',
                    icon: '',
                    path: '/xtsz/csgl/ceshi1',
                    pid: 'csgl'
                  },
                  {
                    id: 'ceshi2',
                    title: '测试2',
                    icon: '',
                    path: '/xtsz/csgl/ceshi2',
                    pid: 'csgl'
                  },
                  {
                    id: 'ceshi3',
                    title: '测试3',
                    icon: '',
                    path: '/xtsz/csgl/ceshi3',
                    pid: 'csgl'
                  },
                  {
                    id: 'ceshi4',
                    title: '测试4',
                    icon: '',
                    path: '/xtsz/csgl/ceshi4',
                    pid: 'csgl'
                  },
                  {
                    id: 'ceshi5',
                    title: '测试5',
                    icon: '',
                    path: '/xtsz/csgl/ceshi5',
                    pid: 'csgl'
                  },
                  {
                    id: 'ceshi6',
                    title: '测试6',
                    icon: '',
                    path: '/xtsz/csgl/ceshi6',
                    pid: 'csgl'
                  },
                  {
                    id: 'ceshi7',
                    title: '测试7',
                    icon: '',
                    path: '/xtsz/csgl/ceshi7',
                    pid: 'csgl'
                  },
                  {
                    id: 'ceshi8',
                    title: '测试8',
                    icon: '',
                    path: '/xtsz/csgl/ceshi8',
                    pid: 'csgl'
                  },
                  { id: 'ceshi9', title: '测试9', icon: '', path: '/xtsz/csgl/ceshi9', pid: 'csgl' }
                ]"
              >
                <t-menu-item
                  id="ceshi1"
                  title="测试1"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi1"
                  pid="csgl"
                />
                <t-menu-item
                  id="ceshi2"
                  title="测试2"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi2"
                  pid="csgl"
                />
                <t-menu-item
                  id="ceshi3"
                  title="测试3"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi3"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi4"
                  title="测试4"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi4"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi5"
                  title="测试5"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi5"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi6"
                  title="测试6"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi6"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi7"
                  title="测试7"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi7"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi8"
                  title="测试8"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi8"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi9"
                  title="测试9"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi9"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi10"
                  title="测试10"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi10"
                  pid="csgl"
                ></t-menu-item>
              </t-menu-item-auto>
            </t-menu-item-group>
          </t-menu-item-auto>
          <t-submenu id="xtsz" title="系统设置" icon="el-icon-menu">
            <t-menu-item-group title="系统设置" type="title">
              <t-menu-item-group title="用户设置">
                <t-menu-item
                  id="yhgl"
                  title="用户管理"
                  icon="el-icon-menu"
                  path="/xtsz/yhgl"
                  pid="xtsz"
                />
                <t-menu-item
                  id="qxgl"
                  title="权限管理"
                  icon="el-icon-menu"
                  path="/xtsz/qxgl"
                  pid="xtsz"
                />
              </t-menu-item-group>
              <t-submenu id="csgl" title="测试管理" icon="el-icon-menu">
                <t-menu-item
                  id="ceshi1"
                  title="测试1"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi1"
                  pid="csgl"
                />
                <t-menu-item
                  id="ceshi2"
                  title="测试2"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi2"
                  pid="csgl"
                />
                <t-menu-item
                  id="ceshi3"
                  title="测试3"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi3"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi4"
                  title="测试4"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi4"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi5"
                  title="测试5"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi5"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi6"
                  title="测试6"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi6"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi7"
                  title="测试7"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi7"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi8"
                  title="测试8"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi8"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi9"
                  title="测试9"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi9"
                  pid="csgl"
                ></t-menu-item>
                <t-menu-item
                  id="ceshi10"
                  title="测试10"
                  icon="el-icon-menu"
                  path="/xtsz/csgl/ceshi10"
                  pid="csgl"
                ></t-menu-item>
              </t-submenu>
              <t-submenu id="csgl2" title="测试管理2" icon="el-icon-menu">
                <t-menu-item id="ceshi11" title="测试1" icon="el-icon-menu"></t-menu-item>
                <t-menu-item id="ceshi12" title="测试2" icon="el-icon-menu"></t-menu-item>
                <t-menu-item id="ceshi13" title="测试3" icon="el-icon-menu"></t-menu-item>
                <t-menu-item id="ceshi14" title="测试4" icon="el-icon-menu"></t-menu-item>
                <t-menu-item id="ceshi15" title="测试5" icon="el-icon-menu"></t-menu-item>
              </t-submenu>
              <t-menu-item
                id="rzgl"
                title="日志管理"
                icon="el-icon-menu"
                path="/xtsz/rzgl"
              ></t-menu-item>
            </t-menu-item-group>
          </t-submenu>
          <t-submenu id="jlgl" title="精炼管理" icon="el-icon-menu">
            <t-menu-item id="ceshi16" title="测试1" icon="el-icon-menu"></t-menu-item>
            <t-menu-item id="ceshi17" title="测试2" icon="el-icon-menu"></t-menu-item>
            <t-menu-item id="ceshi18" title="测试3" icon="el-icon-menu"></t-menu-item>
            <t-menu-item id="ceshi19" title="测试4" icon="el-icon-menu"></t-menu-item>
            <t-menu-item id="ceshi20" title="测试5" icon="el-icon-menu"></t-menu-item>
          </t-submenu>
        </t-menu>
      </t-aside> -->
      <t-aside class="index-left" width="250px">
        <!-- <t-menu-item id="yhgl" title="用户管理" icon="el-icon-menu" path="/xtsz/yhgl" pid="xtsz" /> -->
        <t-menu :data="initMenuList()" theme="dark-blue" unique-opened router>
          <!-- mode="vertical-panel"
          menu-trigger="click" -->
          <!-- menu-trigger="click" -->
          <t-menu-item-auto id="home" title="首页" icon="el-icon-menu" path="/home" />
          <t-menu-item-auto
            id="xtsz"
            title="系统设置"
            icon="el-icon-menu"
            :children="systemSettingMenu"
          >
            <t-menu-item-group title="用户设置">
              <t-menu-item-auto
                id="yhgl"
                title="用户管理"
                icon="el-icon-menu"
                path="/xtsz/yhgl"
                pid="xtsz"
              />
              <t-menu-item-auto
                id="qxgl"
                title="权限管理"
                icon="el-icon-menu"
                path="/xtsz/qxgl"
                pid="xtsz"
              />
            </t-menu-item-group>
            <t-menu-item-auto id="csgl" title="测试管理" icon="el-icon-menu" :children="testMenu">
              <t-menu-item
                v-for="item in testMenu"
                :key="item.id"
                :id="item.id"
                :title="item.title"
                icon="el-icon-menu"
                :path="item.path"
                :pid="item.pid"
              />
            </t-menu-item-auto>
          </t-menu-item-auto>
          <t-submenu id="jlgl" title="精炼管理" icon="el-icon-menu">
            <t-menu-item
              v-for="item in jlManageMenu"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              icon="el-icon-menu"
              :path="item.path"
              :pid="item.pid"
            />
          </t-submenu>
        </t-menu>
      </t-aside>
      <t-body class="index-body">
        <router-view></router-view>
      </t-body>
    </t-container>
  </t-container>
</template>

<script>
// import THeader from '../components/Header'
import axios from 'axios'
import { getMenuList } from '../assets/js/menu'

export default {
  name: 'Index',
  // components: { THeader },
  data() {
    return {
      type: 1,
      menu: [],
      table: {
        loading: false,
        data: [],
        page: 1,
        pageSize: 10,
        total: 0,
        firstPage: false
      }
    }
  },
  computed: {
    systemMenu() {
      return [
        { id: 'home', title: '首页', icon: '' },
        { id: 'xtsz', title: '系统设置', icon: '' },
        { id: 'jlgl', title: '精炼管理', icon: '' }
      ]
    },
    systemSettingMenu() {
      return [
        { id: 'yhgl', title: '用户管理', icon: '', path: '/xtsz/yhgl', pid: 'xtsz' },
        { id: 'qxgl', title: '权限管理', icon: '', path: '/xtsz/qxgl', pid: 'xtsz' },
        { id: 'csgl', title: '测试管理', icon: '', pid: 'xtsz' },
        { id: 'csgl2', title: '测试管理2', icon: '', pid: 'xtsz' }
      ]
    },
    testMenu() {
      return [
        { id: 'ceshi1', title: '测试1', icon: '', path: '/xtsz/csgl/ceshi1', pid: 'csgl' },
        { id: 'ceshi2', title: '测试2', icon: '', path: '/xtsz/csgl/ceshi2', pid: 'csgl' },
        { id: 'ceshi3', title: '测试3', icon: '', path: '/xtsz/csgl/ceshi3', pid: 'csgl' },
        { id: 'ceshi4', title: '测试4', icon: '', path: '/xtsz/csgl/ceshi4', pid: 'csgl' },
        { id: 'ceshi5', title: '测试5', icon: '', path: '/xtsz/csgl/ceshi5', pid: 'csgl' },
        { id: 'ceshi6', title: '测试6', icon: '', path: '/xtsz/csgl/ceshi6', pid: 'csgl' },
        { id: 'ceshi7', title: '测试7', icon: '', path: '/xtsz/csgl/ceshi7', pid: 'csgl' },
        { id: 'ceshi8', title: '测试8', icon: '', path: '/xtsz/csgl/ceshi8', pid: 'csgl' },
        { id: 'ceshi9', title: '测试9', icon: '', path: '/xtsz/csgl/ceshi9', pid: 'csgl' },
        { id: 'ceshi10', title: '测试10', icon: '', path: '/xtsz/csgl/ceshi10', pid: 'csgl' }
      ]
    },
    test2Menu() {
      return [
        { id: 'ceshi11', title: '测试1', icon: '', path: '/xtsz/csgl/ceshi11', pid: 'csgl2' },
        { id: 'ceshi12', title: '测试2', icon: '', path: '/xtsz/csgl/ceshi12', pid: 'csgl2' },
        { id: 'ceshi13', title: '测试3', icon: '', path: '/xtsz/csgl/ceshi13', pid: 'csgl2' },
        { id: 'ceshi14', title: '测试4', icon: '', path: '/xtsz/csgl/ceshi14', pid: 'csgl2' },
        { id: 'ceshi15', title: '测试5', icon: '', path: '/xtsz/csgl/ceshi15', pid: 'csgl2' }
      ]
    },
    jlManageMenu() {
      return [
        { id: 'ceshi16', title: '测试1', icon: '', path: '/xtsz/csgl/ceshi16', pid: 'jlgl' },
        { id: 'ceshi17', title: '测试2', icon: '', path: '/xtsz/csgl/ceshi17', pid: 'jlgl' },
        { id: 'ceshi18', title: '测试3', icon: '', path: '/xtsz/csgl/ceshi18', pid: 'jlgl' },
        { id: 'ceshi19', title: '测试4', icon: '', path: '/xtsz/csgl/ceshi19', pid: 'jlgl' },
        { id: 'ceshi20', title: '测试5', icon: '', path: '/xtsz/csgl/ceshi10', pid: 'jlgl' }
      ]
    }
  },
  mounted() {
    this.menu = getMenuList()
    this.table.data = [
      //   {
      //     id: 1,
      //     name: '张三',
      //     username: '15555555555',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 2,
      //     name: '张三1',
      //     username: '16666666666',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '0',
      //     password: '123456'
      //   },
      //   {
      //     id: 3,
      //     name: '张三2',
      //     username: '17777777777',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '0',
      //     password: '123456'
      //   },
      //   {
      //     id: 4,
      //     name: '张三3',
      //     username: '18888888888',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '0',
      //     password: '123456'
      //   },
      //   {
      //     id: 5,
      //     name: '张三4',
      //     username: '19999999999',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '0',
      //     password: '123456'
      //   },
      //   {
      //     id: 6,
      //     name: '李四',
      //     username: '11111111111',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 7,
      //     name: '李四1',
      //     username: '12222222222',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 8,
      //     name: '李四2',
      //     username: '13333333333',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 9,
      //     name: '李四3',
      //     username: '14444444444',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 10,
      //     name: '卓风尘',
      //     username: '12121212121',
      //     gender: '女',
      //     birthday: 1591286400000,
      //     company: '运管局',
      //     duties: '6',
      //     education: '本科',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 13,
      //     name: '李四',
      //     username: '15888885555',
      //     gender: '男',
      //     birthday: 397411200000,
      //     company: '运管局',
      //     duties: '6',
      //     education: '本科',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   }
    ]
    const data = []
    for (let i = 0; i < 150; i++) {
      data.push({
        id: i + 1,
        name: '张三' + i,
        username: '15555555555',
        gender: '男',
        birthday: 1589731200000,
        company: '交通局',
        duties: '6',
        education: '研究生',
        politic: '党员',
        power: '1',
        password: '123456'
      })
    }
    this.table.data = data
    // this.getSystemLog()
  },
  methods: {
    getSystemLog() {
      const { page, pageSize } = this.table
      axios
        .get('http://192.168.11.238:8095/ibike/user/getUserOperationLog', {
          params: { username: '', stime: '', etime: '', page, pageSize }
        })
        .then(res => {
          this.table.total = res.data.obj.count
          this.table.data = res.data.obj.result
        })
    },

    handleDetailsClick(item) {
      console.info(item.name)
    },
    capitalize(value) {
      return value.substring(0, 1).toUpperCase() + value.substring(1)
    },
    handleUpdateClick() {
      this.type = 1
      const data = []
      this.table.loading = true
      this.table.firstPage = true
      for (let i = 0; i < 100; i++) {
        data.push({
          id: i + 1,
          name: '张三' + i,
          username: '15555555555',
          gender: '男',
          birthday: 1589731200000,
          company: '交通局',
          duties: '6',
          education: '研究生',
          politic: '党员',
          power: '1',
          password: '123456'
        })
      }
      this.table.data = data
      this.table.loading = false
      setTimeout(() => (this.table.firstPage = false))
    },
    handleUpdateClick2() {
      this.type = 1
      const data = []
      this.table.loading = true
      for (let i = 0; i < 80; i++) {
        data.push({
          id: i + 1,
          name: '张三' + i,
          username: '15555555555',
          gender: '男',
          birthday: 1589731200000,
          company: '交通局',
          duties: '6',
          education: '研究生',
          politic: '党员',
          power: '1',
          password: '123456'
        })
      }
      this.table.data = data
      this.table.loading = false
    },
    handleUpdateClick3() {
      this.type = 2
      this.getSystemLog()
    },
    handleTableCurrentChange({ currentPage }) {
      this.table.page = currentPage
      this.getSystemLog()
    },

    initMenuList() {
      return [
        ...this.systemMenu,
        ...this.systemSettingMenu,
        ...this.testMenu,
        ...this.test2Menu,
        ...this.jlManageMenu
        // { id: 'home', title: '首页', icon: '' },
        // { id: 'xtsz', title: '系统设置', icon: '' },
        // { id: 'jlgl', title: '精炼管理', icon: '' },
        // { id: 'yhgl', title: '用户管理', icon: '', path: '/xtsz/yhgl', pid: 'xtsz' },
        // { id: 'qxgl', title: '权限管理', icon: '', path: '/xtsz/qxgl', pid: 'xtsz' },
        // { id: 'csgl', title: '测试管理', icon: '', pid: 'xtsz' },
        // { id: 'csgl2', title: '测试管理2', icon: '', pid: 'xtsz' },
        // { id: 'ceshi1', title: '测试1', icon: '', path: '/xtsz/csgl/ceshi1', pid: 'csgl' },
        // { id: 'ceshi2', title: '测试2', icon: '', path: '/xtsz/csgl/ceshi2', pid: 'csgl' },
        // { id: 'ceshi3', title: '测试3', icon: '', path: '/xtsz/csgl/ceshi3', pid: 'csgl' },
        // { id: 'ceshi4', title: '测试4', icon: '', path: '/xtsz/csgl/ceshi4', pid: 'csgl' },
        // { id: 'ceshi5', title: '测试5', icon: '', path: '/xtsz/csgl/ceshi5', pid: 'csgl' },
        // { id: 'ceshi6', title: '测试6', icon: '', path: '/xtsz/csgl/ceshi6', pid: 'csgl' },
        // { id: 'ceshi7', title: '测试7', icon: '', path: '/xtsz/csgl/ceshi7', pid: 'csgl' },
        // { id: 'ceshi8', title: '测试8', icon: '', path: '/xtsz/csgl/ceshi8', pid: 'csgl' },
        // { id: 'ceshi9', title: '测试9', icon: '', path: '/xtsz/csgl/ceshi9', pid: 'csgl' },
        // { id: 'ceshi10', title: '测试10', icon: '', path: '/xtsz/csgl/ceshi10', pid: 'csgl' },
        // { id: 'ceshi11', title: '测试1', icon: '', pid: 'csgl2' },
        // { id: 'ceshi12', title: '测试2', icon: '', pid: 'csgl2' },
        // { id: 'ceshi13', title: '测试3', icon: '', pid: 'csgl2' },
        // { id: 'ceshi14', title: '测试4', icon: '', pid: 'csgl2' },
        // { id: 'ceshi15', title: '测试5', icon: '', pid: 'csgl2' },
        // { id: 'ceshi16', title: '测试1', icon: '', pid: 'jlgl' },
        // { id: 'ceshi17', title: '测试2', icon: '', pid: 'jlgl' },
        // { id: 'ceshi18', title: '测试3', icon: '', pid: 'jlgl' },
        // { id: 'ceshi19', title: '测试4', icon: '', pid: 'jlgl' },
        // { id: 'ceshi20', title: '测试5', icon: '', pid: 'jlgl' }
      ]
    },
    formatterDuties(__, ___, value) {
      if (value == 6) return '六号测试'
      return '测试'
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  &-wrapper {
    width: 100%;
    height: 100%;
  }
  &-left {
    height: 100%;
    // background-color: #eeeeee;
  }
  &-body {
    ::v-deep > div {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      font-size: 240px;
    }
  }
}
</style>
