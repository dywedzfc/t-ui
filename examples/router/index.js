import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../views/Index.vue'),
    // redirect: { path: '/yxgb', name: '优秀年轻干部报表' },
    children: [
      { path: '/home', name: '首页', component: { render: h => h('div', '首页') } },
      { path: '/xtsz/yhgl', name: '用户管理', component: { render: h => h('div', '用户管理') } },
      { path: '/xtsz/qxgl', name: '权限管理', component: { render: h => h('div', '权限管理') } },
      { path: '/xtsz/rzgl', name: '日志管理', component: { render: h => h('div', '日志管理') } },
      { path: '/xtsz/csgl/ceshi1', name: '测试1', component: { render: h => h('div', '测试1') } },
      { path: '/xtsz/csgl/ceshi2', name: '测试2', component: { render: h => h('div', '测试2') } },
      { path: '/xtsz/csgl/ceshi3', name: '测试3', component: { render: h => h('div', '测试3') } },
      { path: '/xtsz/csgl/ceshi4', name: '测试4', component: { render: h => h('div', '测试4') } },
      { path: '/xtsz/csgl/ceshi5', name: '测试5', component: { render: h => h('div', '测试5') } },
      { path: '/xtsz/csgl/ceshi6', name: '测试6', component: { render: h => h('div', '测试6') } },
      { path: '/xtsz/csgl/ceshi7', name: '测试7', component: { render: h => h('div', '测试7') } },
      { path: '/xtsz/csgl/ceshi8', name: '测试8', component: { render: h => h('div', '测试8') } },
      { path: '/xtsz/csgl/ceshi9', name: '测试9', component: { render: h => h('div', '测试9') } },
      { path: '/xtsz/csgl/ceshi10', name: '测试10', component: { render: h => h('div', '测试10') } }
    ]
  },
  {
    path: '/component',
    name: '组件',
    component: () => import('../views/Component.vue'),
    redirect: { path: '/component/installation', name: '安装' },
    children: [
      {
        path: '/component/installation',
        name: '安装',
        component: () => import('../views/guide/Installation.vue')
      },
      {
        path: '/component/layout',
        name: '边界布局',
        component: () => import('../views/basic/LayoutView.vue')
      },
      {
        path: '/component/gridLayout',
        name: '网格布局',
        component: () => import('../views/basic/GridLayoutView.vue')
      },
      {
        path: '/component/queryBar',
        name: '查询框',
        component: () => import('../views/pane/QueryBarView.vue')
      },
      {
        path: '/component/queryPanel',
        name: '查询面板',
        component: () => import('../views/pane/QueryPanelView.vue')
      },
      {
        path: '/component/dragPicture',
        name: '图片拖拽控件',
        component: () => import('../views/pane/DragPictureView.vue')
      },
      {
        path: '/component/tablePage',
        name: '分页表格',
        component: () => import('../views/pane/QueryBarView.vue')
      },
      {
        path: '/component/dialog',
        name: '对话框',
        component: () => import('../views/pane/QueryBarView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
