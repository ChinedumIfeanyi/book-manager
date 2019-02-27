import Vue from 'vue'
import vueRouter from 'vue-router'

import AllBooks from '@/components/AllBooks'
import AddBook from '@/components/AddBook'
import ShowBook from '@/components/ShowBook'


Vue.use(vueRouter)

const router = new vueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'AllBooks',
			component: AllBooks
		},
		{
			path: '/add',
			name: 'AddBook',
			component: AddBook
		},
		{
			path: '/show/:id',
			name: 'ShowBook',
			component: ShowBook
		},
		
	]
})

export default router