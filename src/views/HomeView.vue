<script setup>
import { computed, onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import { useStore } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import { useToast } from 'vue-toastification';
import JobListings from '@/components/JobListings.vue';
// Access the Vuex store
const store = useStore();
// Get toast interface
const toast = useToast();

// Access state using computed properties
const jobs = computed(() => store.state.jobs);

// Methods for interacting with Vuex actions
const fetchJobs = () => store.dispatch('getJobs');

// Fetch jobs when the component is mounted
onMounted(() => {
	// Use it!
	// toast("I'm a toast!");
	// fetchJobs();
	// or with options
	// toast.success('My toast content', {
	// 	timeout: 2000,
	// });
	// console.log(jobs.value);
});
</script>

<template>
	<Navbar />
	<Hero />
	<JobListings :limit="3" :showButton="true" />
</template>
