import axios from 'axios';

const KEY = 'AIzaSyDy79LL1Ec6TWub54MNR_m4XcIiD-v1i3M';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY

	}
});

