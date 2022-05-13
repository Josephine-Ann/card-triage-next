import React, { useContext } from 'react'
// import { usePatientInfo, usePatientInfoUpdate } from './PatientInfoProvider'
import { usePatients } from '../context/patientContext';
import styles from '../styles/PatientCard.module.css'

export const PatientCard = (props) => {
    const {
        updatePatient,
        items
    } = usePatients();
    return (
        <div className={styles[["card"]]}>
            <div id={styles[["card__info"]]}>
                <div>
                    <p className={styles[["card__para"]] + " " + styles[["card__titles"]] + " my-[14px] + h-[16.5px]"}>General Information</p>
                    <p className={styles[["card__para"]] + " " + styles[["card__ul_p"]] + " my-[12px] + h-[14px]"}>Name:</p>
                    <p className={styles[["card__para"]] + " " + styles[["card__ul_p"]] + " my-[12px] + h-[14px]"}>{props.patient_name}</p>
                    <p className={styles[["card__para"]] + " " + styles[["card__ul_p"]] + " my-[12px] + h-[14px]"}>Reading taken on: </p>
                    <p className={styles[["card__para"]] + " " + styles[["card__ul_p"]] + " my-[12px] + h-[14px]"}>{props.created_date}</p>
                    <p className={styles[["card__para"]] + " " + styles[["card__ul_p"]] + " my-[12px] + h-[14px]"}>Status: {props.status[0]}{props.status.slice(1, 8).toLowerCase()}</p>
                    <p className={styles[["card__para"]] + " " + styles[["card__titles"]] + " my-[14px] + h-[16.5px]"}>Arrythmias</p>
                    <ul className={styles[["card__ul"]] + " " + styles[["card__ul_p"]] + " my-[12px] + h-[14px]"}>
                        {props.arrhythmias.map((arrhythmia) => {
                            return <li key={props.arrhythmias.indexOf(arrhythmia)} className={styles[["card__ul_p"]]}>{arrhythmia}</li>
                        })}
                    </ul>
                </div>
                <div id={styles[["card__button-change"]]}>
                    <button className={styles[["card__button"]]} id={styles[["card__change"]]} onClick={() => updatePatient(props.id)}>{props.status === 'DONE' ? items.done : items.pendingOrRejected}</button>
                </div>
            </div>
        </div>
    )
}



export default PatientCard

