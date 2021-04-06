import request from '@/utils/axios'

export function createOrUpdateStudent (data) {
  return request({
    url: '/students/',
    method: 'POST',
    data
  })
}

export function UpdateStudent (uuid, data) {
  return request({
    url: `/students/${uuid}/`,
    method: 'PUT',
    data
  })
}

export function uploadFiles (uuid, data) {
  return request({
    url: `/students/${uuid}/`,
    method: 'PATCH',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}

export function getStudentRequests (params) {
  return request({
    url: '/requests/',
    method: 'GET',
    params
  })
}

export function getStudents (params) {
  return request({
    url: '/students/',
    method: 'GET',
    params
  })
}

export function getStudentInfo (uuid) {
  return request({
    url: `/students/${uuid}/`,
    method: 'GET'
  })
}

export function deleteStudent (uuid) {
  return request({
    url: `/students/${uuid}/`,
    method: 'DELETE'
  })
}
