import axios from 'axios';

export const BASE_URL = 'https://swapi.co/api'

export default class BaseRepository {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(path) {
    return axios.get(`${this.baseUrl}${path}`);
  }
}
