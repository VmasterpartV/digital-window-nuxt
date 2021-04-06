import request from '@/utils/axios'

export function login (data) {
  return request({
    url: '/token/',
    public: true,
    method: 'POST',
    data
  })
}

export function refreshToken (token) {
  return request({
    url: '/refresh/',
    method: 'POST',
    data: {
      refresh: token
    }
  })
}

export function register (data) {
  return request({
    url: '/accounts/register/',
    public: true,
    method: 'POST',
    data
  })
}

export function accountVerify (data) {
  return request({
    url: '/accounts/verify-registration/',
    public: true,
    method: 'POST',
    data
  })
}

export function sendPasswordLink (data) {
  return request({
    url: '/accounts/send-reset-password-link/',
    public: true,
    method: 'POST',
    data
  })
}

export function getUserInfo (id) {
  return request({
    url: `/users/${id}/`,
    method: 'GET'
  })
}

export function updateUser (data) {
  return request({
    url: '/accounts/profile/',
    method: 'PUT',
    data
  })
}

export function getNotifications () {
  return request({
    url: '/notifications/',
    method: 'GET'
  })
}

export function changePassword (data) {
  return request({
    url: '/accounts/change-password/',
    method: 'POST',
    data
  })
}

export function getUsers (params) {
  return request({
    url: '/users/',
    method: 'GET',
    params
  })
}
