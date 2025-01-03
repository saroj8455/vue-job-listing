<script setup>
import { computed, onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import { useStore } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';

import JobListings from '@/components/JobListings.vue';
// Access the Vuex store
const store = useStore();
// Get toast interface

// Access state using computed properties
const jobs = computed(() => store.state.jobs);

// Methods for interacting with Vuex actions
const fetchJobs = () => store.dispatch('getJobs');

// Fetch jobs when the component is mounted
onMounted(() => {
	fetchJobs();
	// console.log(jobs.value);
});
</script>

<template>
	<Navbar />
	<Hero />
	<div class="card">
		<h3 class="py-3 text-center text-2xl">Total jobs - {{ jobs.length }}</h3>
	</div>
	<JobListings :limit="3" :showButton="true" />
</template>
