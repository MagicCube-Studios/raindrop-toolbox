const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 720,
    height: 515,
    titleBarStyle: 'customButtonsOnHover',
    frame: false,
    resizable: false
  })
  win.loadFile('index.html')
}
app.whenReady().then(() => { 
  createWindow()
})


  