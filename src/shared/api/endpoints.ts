export const API = {
  auth: {
    login: '/auth/login',
    refresh: '/auth/refresh',
  },
  aircrafts: {
    all: '/aircrafts',
    byId: (id: string) => `/aircrafts/${id}`,
  },
}
