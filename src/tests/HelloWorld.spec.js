import HelloWorld from '@/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {
	it('renders the correct message passed via props', () => {
		const wrapper = mount(HelloWorld, {
			props: {
				msg: 'Hello Vue 3!',
			},
		});
		expect(wrapper.find('h1').text()).toBe('Hello Vue 3!');
	});

	test('HelloWorld Component renders the correct text', () => {
		const wrapper = mount(HelloWorld);
		expect(wrapper.text()).toBe(
			'You’ve successfully created a project with Vite + Vue 3.'
		);
	});
});
