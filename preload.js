const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getCredentials: () => ipcRenderer.invoke('get-credentials'),
  startAuth: () => ipcRenderer.send('start-auth'),
  onAuthCode: (callback) => ipcRenderer.on('auth-code', (event, code) => callback(code))
});