import axios from 'axios';

const useAxios = () => {
	// https://evening-lake-03295.herokuapp.com/
	const client = axios.create({
		baseURL: 'http://localhost:5000/',
	});
	return { client };
};

export default useAxios;
