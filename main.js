const { BrowserWindow, app } = require('electron')

let window

const createMainWindow = () => {
  const { screen } = require('electron')
  const w = screen.getAllDisplays()[0]

  window = new BrowserWindow({
    frame: false,
    resizable: false,
    width: w.bounds.width,
    height: w.bounds.height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  window.loadURL(`file://${__dirname}/view/index.html`)
}

app.on('ready', createMainWindow)