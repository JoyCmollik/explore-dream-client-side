import axios from 'axios';

const useAxios = () => {
	const client = axios.create({
		baseURL: 'http://localhost:5000/',
	});
	return { client };
};

export default useAxios;
