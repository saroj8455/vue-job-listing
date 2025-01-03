import { shallowMount, RouterLinkStub } from '@vue/test-utils';

import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import JobListings from '@/components/JobListings.vue';
import { createStore } from 'vuex';
import HomeView from '@/views/HomeView.vue';

describe.skip('HomeView.vue', () => {
	let wrapper;
	let store;

	beforeEach(() => {
		store = createStore({
			state: {
				jobs: [
					{ id: 1, title: 'Frontend Developer' },
					{ id: 2, title: 'Backend Developer' },
					{ id: 3, title: 'Fullstack Developer' },
				],
			},
			actions: {
				getJobs: jest.fn(),
			},
		});

		wrapper = shallowMount(HomeView, {
			global: {
				plugins: [store],
				stubs: {
					RouterLink: RouterLinkStub, // Stub RouterLink
					Navbar: true,
					Hero: true,
					JobListings: true,
				},
			},
		});
	});

	it('renders without errors', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('renders the Navbar component', () => {
		expect(wrapper.findComponent(Navbar).exists()).toBe(true);
	});

	it('renders the Hero component', () => {
		expect(wrapper.findComponent(Hero).exists()).toBe(true);
	});

	it('renders the JobListings component with correct props', () => {
		const jobListings = wrapper.findComponent(JobListings);
		expect(jobListings.exists()).toBe(true);
		expect(jobListings.props('limit')).toBe(3);
		expect(jobListings.props('showButton')).toBe(true);
	});

	it('computes the correct number of jobs from the Vuex store', () => {
		expect(wrapper.vm.jobs.length).toBe(3);
	});

	it('displays the correct total jobs count in the template', () => {
		const totalJobsText = wrapper.find('h3').text();
		expect(totalJobsText).toContain('Total jobs - 3');
	});

	it('dispatches the "getJobs" action when the component is mounted', () => {
		expect(store._actions.getJobs).toBeDefined();
		expect(store._actions.getJobs).toHaveLength(1);
	});
});
