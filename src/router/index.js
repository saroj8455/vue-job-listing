import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import AddJobView from '@/views/AddJobView.vue';
import JobView from '@/views/JobView.vue';
import EditJobView from '@/views/EditJobView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/jobs',
		name: 'jobs',
		component: JobsView,
	},
	{
		path: '/jobs/:id',
		name: 'job',
		component: JobView,
	},
	{
		path: '/jobs/add',
		name: 'add-job',
		component: AddJobView,
	},
	{
		path: '/jobs/edit/:id',
		name: 'edit-job',
		component: EditJobView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
