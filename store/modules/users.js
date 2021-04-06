import {
  getToken,
  setToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  decodeToken,
  removeToken
} from '@/utils/cookies'

import { login, getUserInfo, refreshToken, getNotifications } from '@/api/users'
import { isNearbyToExpire } from '@/utils/time'

const state = {
  isLogued: false,
  isStaff: false,
  user: {},
  student: {
    enrollment: '',
    admission: null,
    CURP: '',
    NSS: '',
    career: '',
    specialty: ''
  },
  schoolRequest: {},
  notification: {},
  isComponentModalActive: false
}

const mutations = {
  SET_LOGIN (state, value) {
    state.isLogued = value
  },
  SET_USER (state, value) {
    state.user = value
  },
  SET_STUDENT (state, value) {
    state.user.student = value
  },
  SET_NOTIFICATION (state, value) {
    state.notification = value
  },
  SHOW_FORM (state, value) {
    state.isComponentModalActive = value
  },
  SET_TYPE (state, value) {
    state.schoolRequest.type = value
  },
  CLEAR_REQ (state) {
    state.schoolRequest = {}
  }
}
const actions = {
  async login ({ commit }, data) {
    const res = await login(data)
    return new Promise((resolve, reject) => {
      try {
        setToken(res.access)
        setRefreshToken(res.refresh)
        commit('SET_LOGIN', true)
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
  },
  // user logout
  logout () {
    return new Promise((resolve, reject) => {
      removeToken()
      removeRefreshToken()
      resolve()
    })
  },
  verifyToken ({ commit }) {
    return new Promise((resolve, reject) => {
      const token = getToken()
      const refresh = getRefreshToken()
      const decoded = decodeToken(token)
      if (token) {
        try {
          if (isNearbyToExpire(decoded.exp)) {
            const data = refreshToken(refresh)
            setToken(data.access)
          }
        } catch (error) {
          reject(error)
        }
      }
      /*
      else {
        reject()
      }
      resolve()
      */
    })
  },
  async getUser ({ commit }) {
    let token = await getToken()
    if (token) {
      token = await decodeToken(token)
      const user = await getUserInfo(token.id)
      return new Promise((resolve, reject) => {
        try {
          commit('SET_LOGIN', true)
          commit('SET_USER', user)
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    }
  },
  getNotification ({ commit, state }) {
    return new Promise((resolve, reject) => {
      try {
        const data = getNotifications()
        commit('SET_NOTIFICATION', data)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
