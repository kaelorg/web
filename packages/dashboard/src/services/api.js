import axios from 'axios';

export const imgurApi = axios.create({
  baseURL: 'https://api.imgur.com/3',
  headers: {
    Authorization: 'Client-ID df6abf4ee365ac4',
  },
});

export default axios.create({ baseURL: process.env.REACT_APP_API_URL });
