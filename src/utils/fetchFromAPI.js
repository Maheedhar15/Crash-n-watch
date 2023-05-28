import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params: { part: 'snippet', videoId: 'M7FIvfx5J10' },
  headers: {
    'X-RapidAPI-Key': '9038ca2f20mshb6c2444e3eeaffbp1bf52djsn68dc162ac3c3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
