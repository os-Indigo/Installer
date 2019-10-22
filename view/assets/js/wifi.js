const w = require(`${__dirname}/../modules/network`)
const wifis = document.querySelector('.wifis')

const netw = {
  getAps () {
    w.scan()
    .then((aps) => {

      wifis.innerHTML = ''
      console.log(aps)

      for (i in aps) {
        wifis.innerHTML += `<div class="ap" id="ap-${i}">
          <i id="wifi-icon" class="material-icons">wifi</i>
          <p id="wifi-ssid">${aps[i].ssid.slice(0, 20)}</p>
          <div class="pass" id="pass-ap-${i}" active="false">
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="password" id="ap-password-${i}">
              <label class="mdl-textfield__label" for="ap-password-${i}">Password</label>
            </div>
            <i id="connect" onclick="netw.connect('${aps[i].ssid}', ${i})" class="material-icons">keyboard_arrow_right</i>
          </div>
        </div>`
      }

      document.querySelectorAll('.ap').forEach(item => {
        item.addEventListener('click', e => {
          e.stopImmediatePropagation()
          netw.tooglePassword(item.getAttribute('id').replace('ap-', ''))
        })
      })

    })
  },

  connect (ssid, id) {
    const password = document.querySelector(`#ap-password-${id}`)

    w.connect(ssid, password)
    .then(() => steps.next())
    .catch((err) => alert(err))
  },

  tooglePassword (id) {
    const pass = document.querySelector(`#pass-ap-${id}`)

    if (pass.getAttribute('active') === 'true') {
      pass.setAttribute('active', false)
      pass.style.display = 'none'
    } else {
      pass.setAttribute('active', true)
      pass.style.display = 'flex'
    }
  }
}