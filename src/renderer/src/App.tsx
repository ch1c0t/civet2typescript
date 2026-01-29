import Versions from './components/Versions.civet'
import Layout from './components/Layout'
import electronLogo from './assets/electron.svg'

import { Provider } from 'jotai'
import store from './store'
import './hotkeys'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  // https://jotai.org/docs/guides/using-store-outside-react
  return (
    <Provider store={store}>
      <Layout />
      <Versions />
    </Provider>
  )
}

export default App
