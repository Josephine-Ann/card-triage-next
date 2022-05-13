import styles from '../styles/Header.module.css'
import { usePatients } from '../context/patientContext';
import React, { useContext } from 'react'
import openEyeIcon from '../styles/images/eye.svg'
import crossedEyeIcon from '../styles/images/crossed-eye-icon.svg'
import Image from 'next/image'

export function Header() {
    const {
        items,
        filterPatient,
        updateFilter,
        selectColumnFilter
    } = usePatients()

    const OpenEyePhotoWrapper = ({ children }) => {
        return <div className={`relative pt-[50%] ${styles[["header__open"]]}`}>{children}</div>;
    }
    const ClosedEyePhotoWrapper = ({ children }) => {
        return <div className={`relative pt-[50%] ${styles[["header__image"]]}  ${styles[["header__closed"]]}`}>{children}</div>;
    }
    return (
        <div className={styles[["header"]]}>
            <div className={styles[["header__responsive-settings"]]}>
                <div>
                    <OpenEyePhotoWrapper>
                        <Image src={openEyeIcon}
                            alt="open eye icon"
                            layout="fill"
                        />
                    </OpenEyePhotoWrapper>
                    <ClosedEyePhotoWrapper>
                        <Image src={crossedEyeIcon}
                            alt="eye icon crossed out"
                            layout="fill"
                        />
                    </ClosedEyePhotoWrapper>

                </div>
                <div className={styles[["header__column-buttons"]]}>
                    <div className={styles[["header__checkboxes"]]}>
                        <input type="checkbox" id={styles[["list1"]]} name="list1" value="list1" className={styles[["header__checkbox"]]} onChange={() => selectColumnFilter('pendingIs')} checked={items.pendingIs} /><label className={styles[["header__label"]]}>P</label>
                    </div>
                    <div className={styles[["checkboxes"]]}>
                        <input type="checkbox" id={styles[["list2"]]} name="list2" value="list2" className={styles[["header__checkbox"]]} onChange={() => selectColumnFilter('doneIs')} checked={items.doneIs} /><label className={styles[["header__label"]]}>D</label>
                    </div>
                    <div className={styles[["checkboxes"]]}>
                        <input type="checkbox" id={styles[["list3"]]} name="list3" value="list3" className={styles[["header__checkbox"]]} onChange={() => selectColumnFilter('rejectedIs')} checked={items.rejectedIs} /><label className={styles[["header__label"]]}>R</label>
                    </div>
                </div>
            </div>
            <div id={styles[["header__search"]]}>
                <input id={styles[["header__input"]]} onChange={(e) => { filterPatient(e.target.value) }} />
                <div className={styles[["header__dropdown"]]}>
                    <button className={styles[["header__dropbtn"]]}>Search by</button>
                    <div className={styles[["header__dropdown-content"]]}>
                        <button className={items.filters === 'arrhythmias' ? (styles[["header__dropdown-buttons"]] + " " + styles[["header__active-filter"]]) : styles[["header__dropdown-buttons"]]} onClick={() => { updateFilter('arrhythmias') }}>Arrhythmias</button>
                        <button className={items.filters === 'name' ? (styles[["header__dropdown-buttons"]] + " " + styles[["header__active-filter"]]) : styles[["header__dropdown-buttons"]]} onClick={() => { updateFilter('name') }}>Patient Name</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

