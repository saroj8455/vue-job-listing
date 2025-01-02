<script setup>
import { computed, onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import { useStore } from 'vuex';
// Access the Vuex store
const store = useStore();

// Access state using computed properties
const jobs = computed(() => store.state.jobs);

// Methods for interacting with Vuex actions
const fetchJobs = () => store.dispatch('getJobs');

// Fetch jobs when the component is mounted
onMounted(() => {
	console.log('Home-View');
	fetchJobs();
});
</script>

<template>
	<h1>Total jobs - {{ jobs.length }}</h1>
	<ul>
		<li class="mb-3" v-for="(job, index) in jobs" :key="index">
			{{ job.title }}
		</li>
	</ul>
	<TheWelcome />
</template>
