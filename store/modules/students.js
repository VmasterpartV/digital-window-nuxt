import {
  createOrUpdateStudent,
  uploadFiles,
  UpdateStudent
} from '@/api/students'

export default {
  namespaced: true,
  state: {
    studentForm: {}
  },
  mutations: {
    BASIC (state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    async update ({ commit }, payload) {
      const { studentForm, files, admin } = payload
      delete studentForm.user
      delete studentForm.CURP_file
      delete studentForm.NSS_file
      let data
      if (admin) {
        console.log(admin)
        data = await UpdateStudent(studentForm.uuid, studentForm)
      } else { data = await createOrUpdateStudent(studentForm) }

      // TODO: remover archivos
      // TODO: hacer CURP/NSS obligatorio si selecciona un archivo
      if (files.CURP_file || files.NSS_file) {
        const formData = new FormData()
        for (const key in files) {
          if (files[key]) { formData.append(key, files[key]) }
        }
        data = await uploadFiles(data.uuid, formData)
      }
      commit('BASIC', {
        key: 'studentForm',
        value: data
      })
      return Promise.resolve(data)
    }
  }
}
