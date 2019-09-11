import Vue from 'vue'
import Router from 'vue-router'
import ZHome from '@/components/Z_Home'
import ZTable from '@/components/Z_Table'
import ZFullTable from '@/components/Z_FullTable'
import ZAlert from '@/components/Z_Alert'
import ZBreadCrumb from '@/components/Z_BreadCrumb'
import ZForm from '@/components/Z_Form'
import ZFormFile from '@/components/Z_FormFile'
import ZListGroup from '@/components/Z_ListGroup'
import ZModal from '@/components/Z_Modal'
import ZSpinner from '@/components/Z_Spinner'
import ZPagination from '@/components/Z_Pagination'
import ZAjax from '@/components/Z_Ajax'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'ZHome',
      component: ZHome
    }, {
      path: '/table',
      name: 'ZTable',
      component: ZTable
    }, {
      path: '/fulltable',
      name: 'ZFullTable',
      component: ZFullTable
    },
    {
      path: '/alert',
      name: 'ZAlert',
      component: ZAlert
    },
    {
      path: '/breadcrumb',
      name: 'ZBreadcrumb',
      component: ZBreadCrumb
    },
    {
      path: '/form',
      name: 'ZForm',
      component: ZForm
    },
    {
      path: '/formfile',
      name: 'ZFormFile',
      component: ZFormFile
    },
    {
      path: '/listgroup',
      name: 'ZListGroup',
      component: ZListGroup
    },
    {
      path: '/modal',
      name: 'ZModal',
      component: ZModal
    },
    {
      path: '/spinner',
      name: 'ZSpinner',
      component: ZSpinner
    },
    {
      path: '/pagination',
      name: 'ZPagination',
      component: ZPagination
    },
    {
      path: '/ajax',
      name: 'ZAjax',
      component: ZAjax
    }
  ]
})
