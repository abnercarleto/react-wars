import BaseRepository, { BASE_URL } from './BaseRepository';

class PersonRepository extends BaseRepository {
  constructor(baseUrl) {
    super(baseUrl);
  }

  all() {
    return this.get('/people/');
  }
}

export default new PersonRepository(BASE_URL);
