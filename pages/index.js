import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { usePatients } from '../context/patientContext';
import { useContext } from 'react';
import { PatientCardList } from '../components/PatientCardList'
import { Header } from '../components/Header'

export default function Home() {
  const {
    items
  } = usePatients()
  return (
    <div className='background min-h-[100vh]'>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      {
        items.patientList.length === 0 ? (
          <div>
            <p>No patients</p>
          </div>
        ) : (
          <PatientCardList />
        )
      }
    </div>
  )
}
