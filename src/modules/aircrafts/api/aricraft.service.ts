import { BaseService } from '@/shared/api/base.service'
import { http } from '@/shared/api/http'
import type { Aircraft } from '../types'

export class AircraftService extends BaseService<Aircraft> {
  constructor() {
    super('/aircrafts')
  }
  // aircraft specific operations
  search(query: string) {
    return http.get<Aircraft[]>(`${this.endpoint}?search=${query}`)
  }
}

export default new AircraftService()
