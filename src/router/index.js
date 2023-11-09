import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
	path: '/register',
	name: 'register',
	component: () => import('../views/register.vue')
    },
    {
<<<<<<< HEAD
	path: '/login',
	name: 'login',
	component: () => import('../views/login.vue')
    },
    {
=======
>>>>>>> d339b3dbf0e22abb2db9825272055b57a6bd2859
    	path: '/wood',
	name: 'wood',
	component: () => import('../views/wood.vue')
    },
    {
    	path: '/programs',
	name: 'programs',
	component: () => import('../views/programs.vue')
<<<<<<< HEAD
    }
=======
    },
    {
    	path: '/code',
	name: 'code',
	component: () => import('../views/programs.vue')
    },
>>>>>>> d339b3dbf0e22abb2db9825272055b57a6bd2859
  ]
})

export default router
