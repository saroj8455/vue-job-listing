<script setup>
import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
import { reactive, defineProps, onMounted, computed } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { useStore } from 'vuex';

defineProps({
	limit: Number,
	showButton: {
		type: Boolean,
		default: false,
	},
});

// Access the Vuex store
const store = useStore();

// Access state using computed properties
const jobs = computed(() => store.state.jobs);

// Methods for interacting with Vuex actions
const fetchJobs = () => store.dispatch('getJobs');

const state = reactive({
	isLoading: true,
});

onMounted(async () => {
	try {
		await fetchJobs();
	} catch (error) {
		console.error('Error fetching jobs', error);
	} finally {
		state.isLoading = false;
	}
});
</script>

<template>
	<section class="bg-blue-50 px-4 py-10">
		<div class="container-xl lg:container m-auto">
			<h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
				Browse Jobs
			</h2>
			<!-- Show loading spinner while loading is true -->
			<div v-if="state.isLoading" class="text-center text-gray-500 py-6">
				<PulseLoader />
			</div>

			<!-- Shoe job listing when done loading -->
			<div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<JobListing
					v-for="job in jobs.slice(0, limit || jobs.length)"
					:key="job.id"
					:job="job"
				/>
			</div>
		</div>
	</section>

	<section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
		<RouterLink
			to="/jobs"
			class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
			>View All Jobs</RouterLink
		>
	</section>
</template>
