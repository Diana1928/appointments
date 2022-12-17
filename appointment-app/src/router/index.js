import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import ServicesList from '@/components/ServicesList.vue'
import BookAppointment from '@/components/BookAppointment.vue'
import AppointmentsList from '@/components/AppointmentsList.vue'
import AppointmentsEdit from '@/components/AppointmentsEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/services',
    name: 'ServicesList',
    component: ServicesList
  },
  {
    path: '/book-appointment',
    name: 'BookAppointment',
    component: BookAppointment
  },
  {
    path: '/appointments-list',
    name: 'AppointmentsList',
    component: AppointmentsList
  },
  {
    path: '/appointments-edit/:id',
    name: 'AppointmentsEdit',
    component: AppointmentsEdit
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
