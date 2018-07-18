import axios from 'axios';

const service = {
    getShows : () => axios.get('https://gist.githubusercontent.com/memikequinn/475999c535ef4e1341f1262484244c68/raw/d77d0f6f4d7e53d7bf5dd7bd1997b27d291d4b0b/db.json')
};

export default service;
