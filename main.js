const { BrowserWindow, app } = require('electron')

let window

const createMainWindow = () => {
  const { screen } = require('electron')
  const w = screen.getAllDisplays()[0]

  window = new BrowserWindow({
    //frame: false,
    resizable: false,
    width: 1880, //w.size.width,
    height: 980, //w.size.width,
    //x: w.bounds.x,
    //y: 0,
    webPreferences: {
      nodeIntegration: true
    }
  })

  window.loadURL(`file://${__dirname}/view/index.html`)
}

app.on('ready', createMainWindow)