import request from '@/utils/axios'

export function getDepartmentList (params) {
  return request({
    url: '/departments/',
    method: 'GET',
    params
  })
}
