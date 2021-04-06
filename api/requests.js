import request from '@/utils/axios'

export function getRequestsStats () {
  return request({
    url: '/requests/stats/',
    method: 'GET'
  })
}

export function getRequestList (params) {
  return request({
    url: '/requests/',
    method: 'GET',
    params
  })
}

export function createRequest (data) {
  return request({
    url: '/requests/',
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}

export function updateRequest (uuid, data) {
  return request({
    url: `/requests/${uuid}/`,
    method: 'PUT',
    data
  })
}

export function deleteRequest (uuid) {
  return request({
    url: `/requests/${uuid}/`,
    method: 'DELETE'
  })
}
