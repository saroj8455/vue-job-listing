<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

// Access Store: Use useStore() in the setup function to access Vuex.

// Access the Vuex store instance using the useStore()
// From this store instance, you can access state, getters, mutations, and actions.
const store = useStore();

// Reactive Bindings: Use computed to create reactive bindings for state and getters.
// Access state
const count = computed(() => store.state.count);
// Access getters
const username = computed(() => store.getters.getUsername);

// Mutations: Call store.commit('mutationName') to trigger mutations.
// Use mutations
const inc = () => {
	// Commit the 'increment' mutation to update the state in the Vuex store.
	// Mutations are used to make synchronous state changes.
	// In this case, it will increase the 'count' value in the store's state.
	store.commit('increment');
	// store.dispatch('increment');
};
const dec = () => {
	// In this case, it will decrease the 'count' value in the store's state.
	store.commit('decrement');
};

// Actions: Call store.dispatch('actionName') for asynchronous or complex state changes.
// Use actions
const incrementAsync = () => {
	store.dispatch('asyncIncrement');
};
</script>

<template>
	<section class="section">
		<div class="p-8">
			<h1 class="text-2xl font-bold text-center mb-4 text-blue-500">
				Vuex App Count - {{ count }}
			</h1>
			<h1 class="text-2xl font-bold text-center text-blue-500">
				Username - {{ username }}
			</h1>
			<div class="flex justify-center gap-4 mt-4">
				<button @click="inc" class="btn-primary">+</button>
				<button @click="dec" class="btn-secondary">-</button>
				<button @click="incrementAsync" class="btn-secondary">
					Increment Async
				</button>
			</div>
		</div>
	</section>
</template>
