import { getRequestsStats } from '@/api/requests'

export default {
  namespaced: true,
  state: {
    stats: {
      total: 0,
      pending: 0,
      ready: 0,
      archived: 0,
      students: 0
    }
  },
  mutations: {
    SET_STATS (state, value) {
      state.stats = value
    }
  },
  actions: {
    async getStats ({ commit }) {
      const data = await getRequestsStats()
      commit('SET_STATS', data)
    }
  }
}
