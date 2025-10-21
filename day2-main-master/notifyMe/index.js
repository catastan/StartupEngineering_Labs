/**
 * Complete the function and make it send a notification
 *
 *
 * === Important ===
 *
 * For this task, you will need a static HTTP server.
 *
 * If you have Python installed, run this command into this folder:
 *
 * python -m SimpleHTTPServer 8000
 */

function notifyMe () {
  // TODO:

  let notification = new Notification('Hi there!')
}

/**
 * Scaffolding for requesting notification permission
 */
function requestNotificationPermission () {
  if (
    (Notification.permission !== 'granted' &&
      Notification.permission !== 'denied') ||
    Notification.permission === 'default'
  ) {
    Notification.requestPermission()
  }

  document.querySelector('button').addEventListener('click', notifyMe)
}

document.addEventListener('DOMContentLoaded', requestNotificationPermission)
