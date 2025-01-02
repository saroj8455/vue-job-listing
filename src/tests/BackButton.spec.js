import BackButton from '@/components/BackButton.vue';
import { shallowMount } from '@vue/test-utils';

import { RouterLinkStub } from '@vue/test-utils';

describe('BackButton.vue', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(BackButton, {
			global: {
				stubs: {
					RouterLink: RouterLinkStub, // Stub RouterLink for isolated testing
				},
			},
		});
	});

	it('renders without errors', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('contains a RouterLink component with the correct "to" attribute', () => {
		const routerLink = wrapper.findComponent(RouterLinkStub);
		expect(routerLink.exists()).toBe(true);
		expect(routerLink.props().to).toBe('/jobs');
	});

	it('displays the correct text in the RouterLink', () => {
		const routerLinkText = wrapper.find('a').text();
		expect(routerLinkText).toContain('Back to Job Listings');
	});

	it('renders the icon with the correct class', () => {
		const icon = wrapper.find('i.pi.pi-arrow-circle-left');
		expect(icon.exists()).toBe(true);
		expect(icon.classes()).toContain('mr-3');
	});
});
