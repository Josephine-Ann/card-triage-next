import { createContext } from "react";
import { useContext, useState } from "react";
import Cards from '../cards.json';

export const PatientContext = createContext()
export const usePatients = () => {
    const context = useContext(PatientContext)
    return context
}

export const PatientProvider = ({ children }) => {

    const [items, setItems] = useState({
        patientList: Cards,
        unfilteredPatientList: Cards,
        pendingIs: true,
        rejectedIs: true,
        doneIs: true,
        filters: 'name',
        input: '',
        loading: true,
        pendingOrRejected: 'Done',
        done: 'Rejected'
    })
    const handleSetState = async (key, value) => {
        setItems({
            ...items,
            [key]: value,
        })
    }
    const handleMultipleStateChanges = async (arrKeysValues) => {
        arrKeysValues.forEach(element => {
            handleSetState(element.key, element.value)
        });
    }

    const updatePatient = async (id) => {
        const newPatientList = items.patientList;

        for (var patient in newPatientList) {
            if (newPatientList[patient].id === id && newPatientList[patient].status === 'PENDING') {
                newPatientList[patient].status = 'DONE'
            } else if (newPatientList[patient].id === id && newPatientList[patient].status === 'DONE') {
                newPatientList[patient].status = 'REJECTED'
            } else if (newPatientList[patient].id === id && newPatientList[patient].status === 'REJECTED') {
                newPatientList[patient].status = 'DONE'
            }
        }
        handleSetState("patientList", newPatientList)
        console.log(items)
    };

    const selectColumnFilter = (stateKey) => {
        handleSetState([stateKey], !items[stateKey])
    }
    const filterPatient = async (writing) => {
        new Promise((resolve) => {
            let oldItems = items;
            for (var item in oldItems) {
                if (item === "input") {
                    oldItems[item] = writing
                }
            }
            setItems(oldItems)
            resolve()
        }).then(() => {
            let newItems = items
            if (items.filters === 'arrhythmias') {
                const arrythmiaMatch = (element) => element.toLowerCase().includes(items.input)
                newItems = items.unfilteredPatientList.filter(patient => patient.arrhythmias.some(arrythmiaMatch))
                handleSetState("patientList", items.unfilteredPatientList.filter(patient => patient.arrhythmias.some(arrythmiaMatch)))
            } else {
                handleSetState("patientList", items.unfilteredPatientList.filter(patient => patient.patient_name.toLowerCase().includes(items.input.toLowerCase())))
            }
        });
    };

    const updateFilter = async (button) => {
        handleSetState("filters", button)
    };


    return (
        <PatientContext.Provider
            value={{
                items,
                filterPatient,
                selectColumnFilter,
                handleSetState,
                handleMultipleStateChanges,
                updatePatient,
                updateFilter
            }}>
            {children}
        </PatientContext.Provider>
    )
}
