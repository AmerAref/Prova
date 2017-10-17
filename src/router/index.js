import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
import Vue from 'vue'
import Router from 'vue-router'
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },    
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  }
]
export default routes