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
      // {
      //   path: '/yxgb',
      //   name: '优秀年轻干部报表',
      //   component: () => import('views/OutstandCadre.vue')
      // }
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
