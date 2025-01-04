import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import HomeView from '@/views/HomeView.vue';
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import JobListings from '@/components/JobListings.vue';

describe('HomeView.vue', () => {
	let store;
	let actions;
	let state;
	let wrapper;

	beforeEach(() => {
		// Mock Vuex state and actions
		state = {
			jobs: [
				{ id: 1, title: 'Frontend Developer' },
				{ id: 2, title: 'Backend Developer' },
				{ id: 3, title: 'Full Stack Developer' },
			],
		};

		actions = {
			getJobs: jest.fn(),
		};

		store = createStore({
			state,
			actions,
		});

		wrapper = shallowMount(HomeView, {
			global: {
				plugins: [store],
			},
		});
	});

	it('renders the component correctly', () => {
		const img = wrapper.find('img');
		// Check if the img uses the mocked logo source
		expect(img.attributes('src')).toBe('test-file-stub');
		expect(wrapper.exists()).toBe(true);
	});

	// it('renders the Navbar component', () => {
	// 	const navbar = wrapper.findComponent(Navbar);
	// 	expect(navbar.exists()).toBe(true);
	// });

	// it('renders the Hero component', () => {
	// 	const hero = wrapper.findComponent(Hero);
	// 	expect(hero.exists()).toBe(true);
	// });

	// it('renders the JobListings component with correct props', () => {
	// 	const jobListings = wrapper.findComponent(JobListings);
	// 	expect(jobListings.exists()).toBe(true);
	// 	expect(jobListings.props('limit')).toBe(3);
	// 	expect(jobListings.props('showButton')).toBe(true);
	// });

	// it('displays the total number of jobs', () => {
	// 	const jobCountText = wrapper.find('.card h3').text();
	// 	expect(jobCountText).toContain('Total jobs - 3');
	// });

	// it('calls fetchJobs action on mounted', () => {
	// 	expect(actions.getJobs).toHaveBeenCalled();
	// });

	// it('updates the computed jobs property correctly', () => {
	// 	const jobTitles = state.jobs.map((job) => job.title);
	// 	const renderedTitles = wrapper
	// 		.findAllComponents(JobListings)
	// 		.at(0)
	// 		.props('jobs')
	// 		.map((job) => job.title);

	// 	expect(renderedTitles).toEqual(jobTitles);
	// });
});
