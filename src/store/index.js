import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
	state: {
		count: 0,
		user: { name: 'John Doe', email: 'john@example.com' },
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
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
			/*
        fetch('https://api.example.com/data')
          .then(response => response.json())
          .then(data => {
            Use the fetched data to update the state by committing mutations
            commit('setData', data);
          })
          .catch(error => {
            Handle errors (optional)
            console.error('Error fetching data:', error);
          });
      */
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
