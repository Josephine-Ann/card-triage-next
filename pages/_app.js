import '../styles/globals.css'
import { PatientProvider } from '../context/patientContext'

function MyApp({ Component, pageProps }) {
  return (
    <PatientProvider>
      <Component {...pageProps} />
    </PatientProvider>
  )
}
export default MyApp
