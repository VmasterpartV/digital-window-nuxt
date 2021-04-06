import {
  SnackbarProgrammatic as Snackbar,
  NotificationProgrammatic as Notification,
  ToastProgrammatic as Toast,
  DialogProgrammatic as Dialog
} from 'buefy'

/**
 *
 * @param {*} message
 */
function errorSnackbar (message, position = 'is-bottom') {
  Snackbar.open({
    duration: 5000,
    message,
    type: 'is-danger',
    position,
    actionText: 'Entendido',
    queue: false
  })
}

/**
 *
 * @param {*} message
 */
function errorToast (message) {
  Toast.open({
    duration: 7000,
    message,
    type: 'is-danger'
  })
}

/**
 *
 * @param {*} message
 */
function successToast (message) {
  Toast.open({
    duration: 7000,
    message,
    type: 'is-success'
  })
}

function errorDialog ({ title, message }) {
  return new Promise((resolve) => {
    Dialog.confirm({
      title,
      message,
      cancelText: 'Cancelar',
      confirmText: 'Confirmar',
      type: 'is-danger',
      hasIcon: true,
      icon: 'alert',
      onConfirm: () => {
        resolve()
      }
    })
  })
}

function alertErrorDialog ({ title, message }) {
  return new Promise((resolve) => {
    Dialog.alert({
      title,
      message,
      type: 'is-danger',
      hasIcon: true,
      icon: 'alert',
      ariaRole: 'alertdialog',
      ariaModal: true,
      confirmText: 'Entendido',
      onConfirm: () => {
        resolve()
      }
    })
  })
}

function warningDialog ({ title, message }) {
  return new Promise((resolve) => {
    Dialog.confirm({
      title,
      message,
      cancelText: 'Cancelar',
      confirmText: 'Confirmar',
      type: 'is-warning',
      hasIcon: true,
      icon: 'alert',
      onConfirm: () => {
        resolve()
      }
    })
  })
}

export default {
  errorSnackbar,
  errorToast,
  successToast,
  errorDialog,
  warningDialog,
  alertErrorDialog
}
