import ui from 'touchui/dist/ui/index.js'
import App from './app.ui'


let options = {
  app: App
}




ui.networkTimeout = 5
ui.networkBaseUrl = ''

ui.start(options)

ui.preloadDialogs([
  require('#/pages/dialogs/loginInterface.ui')
])