import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }
});


