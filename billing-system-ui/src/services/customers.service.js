/* eslint-disable max-len */
import { HttpClient } from '../http.client';
import config from '../config';

const url = `${config.billingService.hostname}${config.billingService.endpoints.customers}`;

class CustomersService {
  static getById(id) {
    return HttpClient.get(`${url}/${id}`, null);
  }

  static getAll() {
    return HttpClient.get(url, null);
  }

  static create(customer) {
    return HttpClient.post(url, customer);
  }

  static updateById(id, updatedFields) {
    return HttpClient.put(`${url}/${id}`, updatedFields);
  }

  static deleteById(id) {
    return HttpClient.delete(`${url}/${id}`);
  }
}

export default CustomersService;
