import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';
import { useRoute } from 'vue-router';

jest.mock('@/assets/logo.svg', () => 'mock-logo.svg'); // Mock the logo asset

jest.mock('vue-router', () => ({
	...jest.requireActual('vue-router'),
	useRoute: jest.fn(), // Mock useRoute
}));

describe('Navbar.vue', () => {
	let wrapper;

	beforeEach(() => {
		// Mock the return value of useRoute
		useRoute.mockReturnValue({
			path: '/', // Simulate the current route path
		});

		wrapper = shallowMount(Navbar, {
			global: {
				stubs: {
					RouterLink: RouterLinkStub, // Stub RouterLink for testing
				},
				mocks: {
					$route: { path: '/' }, // Mock route for isActiveLink testing
				},
			},
		});
	});

	afterEach(() => {
		jest.clearAllMocks(); // Clear mocks after each test
	});
	it('renders the Navbar component correctly', () => {
		expect(wrapper.exists()).toBe(true);
	});
	it('renders the logo', () => {
		const logo = wrapper.find('img');
		expect(logo.exists()).toBe(true);
		expect(logo.attributes('src')).toBe('mock-logo.svg');
		expect(logo.attributes('alt')).toBe('Vue Jobs');
	});
	it('renders navigation links', () => {
		const links = wrapper.findAllComponents(RouterLinkStub);
		expect(links).toHaveLength(4); // Expecting 3 navigation links
		expect(links.at(0).props().to).toBe('/'); // First link points to '/'
		expect(links.at(1).props().to).toBe('/'); // Second link points to '/jobs'
		expect(links.at(2).props().to).toBe('/jobs'); // Second link points to '/jobs'
		expect(links.at(3).props().to).toBe('/jobs/add'); // Third link points to '/jobs/add'
	});
});
