import * as settings from '~/settings'

const getters = {}

Object.keys(settings).forEach((key) => {
  getters[key] = state => settings[key]
})

export default getters
