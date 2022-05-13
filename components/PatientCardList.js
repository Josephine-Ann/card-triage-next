import styles from '../styles/PatientCardList.module.css'
import React, { useContext } from 'react'
import { usePatients } from '../context/patientContext';
import { PatientCard } from './PatientCard';


export const PatientCardList = () => {
    const {
        items
    } = usePatients();

    return (
        <div id={styles[[`list__three-columns`]]}>
            <div id={styles[["list__columns"]]}>
                <div className={items.pendingIs ? styles[['list']] : styles[['list-hidden']]}>
                    <div className={styles[["list__titles-desktop"]]}>
                        <p className={styles[["list__titles-top"]]}>Pending Tests</p>
                    </div>
                    {
                        items.patientList.map((patient) => {
                            if (patient.status === 'PENDING') {
                                return <PatientCard key={patient.id} {...patient} />
                            }
                        })
                    }
                </div>
                <div className={items.doneIs ? styles[['list']] : styles[['list-hidden']]}>
                    <div className={styles[["list__titles-desktop"]]}>
                        <p className={styles[["list__titles-top"]]}>Tests Done</p>
                    </div>
                    {
                        items.patientList.map((patient) => {
                            if (patient.status === 'DONE') {
                                return <PatientCard key={patient.id} {...patient} />
                            }
                        })
                    }
                </div>
                <div className={items.rejectedIs ? styles[['list']] : styles[['list-hidden']]} >
                    <div className={styles[["list__titles-desktop"]]}>
                        <p className={styles[["list__titles-top"]]}>Tests Rejected</p>
                    </div>
                    {
                        items.patientList.map((patient) => {
                            if (patient.status === 'REJECTED') {
                                return <PatientCard key={patient.id} {...patient} />
                            }
                        })
                    }
                </div>
            </div>
        </div >
    )
}


export default PatientCardList