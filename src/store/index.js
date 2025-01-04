import apiClient from '@/axios';
import { createStore } from 'vuex';
import { useToast } from 'vue-toastification';
import { MutationTypes } from './mutation-types';
import router from '@/router';

export const ActionTypes = {
	// CRUD operations for jobs
	CREATE_JOB: 'createJob', // Action for creating a new job
	FETCH_JOBS: 'fetchJobs', // Action for fetching a list of jobs
	FETCH_JOB_BY_ID: 'fetchJobById', // Action for fetching a single job by ID
	UPDATE_JOB: 'updateJob', // Action for updating an existing job
	DELETE_JOB: 'deleteJob', // Action for deleting a job
};

const toast = useToast();
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
		[MutationTypes.SET_JOBS](state, jobList) {
			state.jobs = jobList;
		},
		[MutationTypes.ADD_JOB](state, newJob) {
			state.jobs.push(newJob);
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
			try {
				const response = await apiClient.get('/');
				if (response.status !== 200) {
					console.log(response);
					throw new Error(`${response.message}`);
				}
				const { data } = response;
				commit(MutationTypes.SET_JOBS, data);
				// toast.success('jobs successfully load from api!');
			} catch (error) {
				console.log(`Unable to fetch todos - ${error?.message}`);
			}
		},
		async [ActionTypes.CREATE_JOB]({ commit }, newJob) {
			try {
				// Example use case: Making an API call
				const response = await apiClient.post('/', newJob);
				if (response.status !== 201) {
					console.log(response);
					throw new Error(`${response.message}`);
				}
				const { data } = response;
				commit(MutationTypes.ADD_JOB, data);
				toast.success('Job Added Successfully');
				console.log('job id', response.data.id);

				router.push(`/jobs/${data.id}`);
			} catch (error) {
				toast.error(`Job Was Not Added - - ${error?.message}`);
				console.log(`Job Was Not Added - - ${error?.message}`);
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
