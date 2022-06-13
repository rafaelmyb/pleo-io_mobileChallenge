import HttpClient from './utils/HttpClient';

class ExpensesService {
  constructor() {
    this.httpClient = new HttpClient('http://192.168.100.102:3000');
  }

  async listExpenses(limit = '25') {
    return this.httpClient.get(`/expenses?limit=${limit}&offset=${limit}`);
  }
}

export default new ExpensesService();
