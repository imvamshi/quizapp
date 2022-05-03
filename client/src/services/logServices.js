import axios from 'axios';
import APIURL from './constants';

const apiUrl =  `${APIURL}/api/logs`
// const apiUrl = "http://quiz-raghu.herokuapp.com/api/tasks" || "http://localhost:8080/api/tasks"

export function getLogs() {
    return axios.get(apiUrl);
}

export function addLog(task) {
    console.log(`Running addLog`);
    console.log(`task = ${task}, typeof task = ${typeof task}`);
    return axios.post(apiUrl, task);
}

export function updateLog(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteLog(id) {
    return axios.delete(apiUrl + "/" + id);
}