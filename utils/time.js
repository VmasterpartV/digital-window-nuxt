/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

/**
 * Unused time ago filter
 * @param {number} time
 */
export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minutos')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' horas')
  } else {
    return pluralize(~~(between / 86400), ' días')
  }
}

/**
 * Time since filter
 * @param {string} date
 */
export function timeSince (date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000)

  let interval = seconds / 31536000

  if (interval > 1) {
    return Math.floor(interval) > 1
      ? Math.floor(interval) + ' años'
      : Math.floor(interval) + ' año'
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return Math.floor(interval) > 1
      ? Math.floor(interval) + ' meses'
      : Math.floor(interval) + ' mes'
  }
  interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) > 1
      ? Math.floor(interval) + ' días'
      : Math.floor(interval) + ' día'
  }
  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) > 1
      ? Math.floor(interval) + ' horas'
      : Math.floor(interval) + ' hora'
  }
  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) > 1
      ? Math.floor(interval) + ' minutos'
      : Math.floor(interval) + ' minuto'
  }
  return Math.floor(seconds) > 1
    ? Math.floor(seconds) + ' segundos'
    : Math.floor(seconds) + ' segundo'
}

export function isNearbyToExpire (token) {
  const today = new Date()
  const exp = new Date(0)
  exp.setUTCSeconds(token)
  const diffMs = exp - today
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000) // minutes
  console.log(diffMins)
  return diffMins > 0 && diffMins <= 5
}
