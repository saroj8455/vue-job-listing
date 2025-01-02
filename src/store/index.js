import apiClient from '@/axios';
import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
	state: {
		count: 0,
		user: { name: 'John Doe', email: 'john@example.com' },
		jobs: [],
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
		setJobs(state, jobList) {
			state.jobs = jobList;
		},
	},
	actions: {
		increment(context) {
			context.commit('increment');
		},
		decrement(context) {
			context.commit('decrement');
		},
		// Define an asynchronous action named 'asyncIncrement' in the Vuex store.
		// This approach can also be extended for use cases like making API calls, handling responses, and then updating the state.
		asyncIncrement({ commit }) {
			setTimeout(() => commit('increment'), 1000);
			// Example use case: Making an API call
		},
		async getJobs({ commit }) {
			// Example use case: Making an API call
			const response = await apiClient.get('/');
			if (response.status !== 200) {
				console.log(response);
				throw new Error(`${response.message}`);
			}
			const { data } = response;
			commit('setJobs', data);
			try {
			} catch (error) {
				console.log(`Unable to fetch todos - ${error?.message}`);
			}
		},
	},
	getters: {
		doubleCount(state) {
			return state.count * 2;
		},
		getUsername: (state) => state.user.name,
	},
});

export default store;
