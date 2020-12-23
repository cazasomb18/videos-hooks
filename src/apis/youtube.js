import axios from 'axios';

const KEY = 'AIzaSyCB-3-ojmRqVpkg1nC3OvII46DZbCCRIS4';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});

