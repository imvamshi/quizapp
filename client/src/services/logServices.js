import axios from 'axios';

const apiUrl = "http://localhost:8080/api/logs";

export function getLogs() {
    return axios.get(apiUrl);
}

export function addLog(task) {
    return axios.post(apiUrl, task);
}

export function updateLog(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteLog(id) {
    return axios.delete(apiUrl + "/" + id);
}