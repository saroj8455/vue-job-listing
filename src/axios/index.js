// Create an Axios instance
import axios from 'axios';

const apiClient = axios.create({
	// Set the base URL for the API
	baseURL: 'http://localhost:3000/jobs',
	// Set the timeout for the API requests
	timeout: 10000,
	// Set the headers for the API requests
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

// Add a request interceptor (optional)
apiClient.interceptors.request.use(
	(config) => {
		// Modify or log the request configuration if needed
		// console.log('Request:', config);
		return config;
	},
	(error) => {
		// Handle request errors
		console.error('Request error:', error);
		return Promise.reject(error);
	}
);

// Add a response interceptor (optional)
apiClient.interceptors.response.use(
	(response) => {
		// Process or log the response data
		// console.log('Response:', response);
		return response;
	},
	(error) => {
		// Handle response errors
		console.error('Response error:', error);
		return Promise.reject(error);
	}
);

export default apiClient;
