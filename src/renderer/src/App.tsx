import Versions from './components/Versions.civet'
import Layout from './components/Layout'
import electronLogo from './assets/electron.svg'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Layout />
      <Versions />
    </>
  )
}

export default App
