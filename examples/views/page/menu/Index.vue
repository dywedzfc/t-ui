<template>
  <t-container class="index-wrapper" border>
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
          <t-menu-item-auto id="home" title="首页" icon="el-icon-menu" path="/test/home" />
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
                path="/test/xtsz/yhgl"
                pid="xtsz"
              />
              <t-menu-item-auto
                id="qxgl"
                title="权限管理"
                icon="el-icon-menu"
                path="/test/xtsz/qxgl"
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
import { getMenuList } from '../../../assets/js/menu'

export default {
  name: 'Menu',
  // components: { THeader },
  data() {
    return {
      type: 1,
      menu: []
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
        { id: 'yhgl', title: '用户管理', icon: '', path: '/test/xtsz/yhgl', pid: 'xtsz' },
        { id: 'qxgl', title: '权限管理', icon: '', path: '/test/xtsz/qxgl', pid: 'xtsz' },
        { id: 'csgl', title: '测试管理', icon: '', pid: 'xtsz' },
        { id: 'csgl2', title: '测试管理2', icon: '', pid: 'xtsz' }
      ]
    },
    testMenu() {
      return [
        { id: 'ceshi1', title: '测试1', icon: '', path: '/test/xtsz/csgl/ceshi1', pid: 'csgl' },
        { id: 'ceshi2', title: '测试2', icon: '', path: '/test/xtsz/csgl/ceshi2', pid: 'csgl' },
        { id: 'ceshi3', title: '测试3', icon: '', path: '/test/xtsz/csgl/ceshi3', pid: 'csgl' },
        { id: 'ceshi4', title: '测试4', icon: '', path: '/test/xtsz/csgl/ceshi4', pid: 'csgl' },
        { id: 'ceshi5', title: '测试5', icon: '', path: '/test/xtsz/csgl/ceshi5', pid: 'csgl' },
        { id: 'ceshi6', title: '测试6', icon: '', path: '/test/xtsz/csgl/ceshi6', pid: 'csgl' },
        { id: 'ceshi7', title: '测试7', icon: '', path: '/test/xtsz/csgl/ceshi7', pid: 'csgl' },
        { id: 'ceshi8', title: '测试8', icon: '', path: '/test/xtsz/csgl/ceshi8', pid: 'csgl' },
        { id: 'ceshi9', title: '测试9', icon: '', path: '/test/xtsz/csgl/ceshi9', pid: 'csgl' },
        { id: 'ceshi10', title: '测试10', icon: '', path: '/test/xtsz/csgl/ceshi10', pid: 'csgl' }
      ]
    },
    test2Menu() {
      return [
        { id: 'ceshi11', title: '测试1', icon: '', path: '/test/xtsz/csgl/ceshi11', pid: 'csgl2' },
        { id: 'ceshi12', title: '测试2', icon: '', path: '/test/xtsz/csgl/ceshi12', pid: 'csgl2' },
        { id: 'ceshi13', title: '测试3', icon: '', path: '/test/xtsz/csgl/ceshi13', pid: 'csgl2' },
        { id: 'ceshi14', title: '测试4', icon: '', path: '/test/xtsz/csgl/ceshi14', pid: 'csgl2' },
        { id: 'ceshi15', title: '测试5', icon: '', path: '/test/xtsz/csgl/ceshi15', pid: 'csgl2' }
      ]
    },
    jlManageMenu() {
      return [
        { id: 'ceshi16', title: '测试1', icon: '', path: '/test/xtsz/csgl/ceshi16', pid: 'jlgl' },
        { id: 'ceshi17', title: '测试2', icon: '', path: '/test/xtsz/csgl/ceshi17', pid: 'jlgl' },
        { id: 'ceshi18', title: '测试3', icon: '', path: '/test/xtsz/csgl/ceshi18', pid: 'jlgl' },
        { id: 'ceshi19', title: '测试4', icon: '', path: '/test/xtsz/csgl/ceshi19', pid: 'jlgl' },
        { id: 'ceshi20', title: '测试5', icon: '', path: '/test/xtsz/csgl/ceshi10', pid: 'jlgl' }
      ]
    }
  },
  mounted() {
    this.menu = getMenuList()
  },
  methods: {
    initMenuList() {
      return [
        ...this.systemMenu,
        ...this.systemSettingMenu,
        ...this.testMenu,
        ...this.test2Menu,
        ...this.jlManageMenu
      ]
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
