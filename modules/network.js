const w = require("node-wifi")

w.init({
  iface: null
})

const network = {
  scan () {
    return new Promise((resolve, reject) => {
      w.scan()
      .then(networks => {
        resolve(networks)
      })
      .catch(err => reject(err))
    })
  },

  connect (ssid, password) {
    return new Promise((resolve, reject) => {
      w.connect({ ssid: ssid, password: password })
      .then(() => resolve(true))
      .catch(err => reject(err))
    })
  }
}

module.exports = network