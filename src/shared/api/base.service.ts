import { http } from './http'

export class BaseService<T> {
  constructor(protected endpoint: string) {}
  findAll() {
    return http.get<T[]>(this.endpoint)
  }
  find(id: string) {
    return http.get<T>(`${this.endpoint}/${id}`)
  }
  create(data: Partial<T>) {
    return http.post<T>(this.endpoint, data)
  }
  update(id: string, data: Partial<T>) {
    return http.put<T>(`${this.endpoint}/${id}`, data)
  }
  delete(id: string) {
    return http.delete(`${this.endpoint}/${id}`)
  }
}
