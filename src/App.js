import './App.css';
import {useRef, useState} from "react";

function App() {
    const [employees, setEmpployees] = useState([{firstName: "Jan", lastName: "Kowalski"}])
    const [errorMessage, setErrorMessage] = useState('')
    const [selectedEmployee, setSelectedEmployee] = useState(NaN)
    const firstNameInput = useRef()
    const lastNameInput = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        const firstName = firstNameInput.current.value
        const lastName = lastNameInput.current.value
        if(!firstName || !lastName) {
            setErrorMessage("Podaj imie lub nazwisko pracownika!")
        } else {
            setEmpployees(state => [...state, {firstName, lastName}])
            setErrorMessage("")
        }
    }

    const removeEmployeeHandler = (employeeIndex) => {
        setEmpployees(state => [...state.slice(0, employeeIndex), ...state.slice(employeeIndex + 1)])
    }

    const removeButtonMouseEnterHandler = (employeeIndex) => {
        setSelectedEmployee(employeeIndex)
    }

    const removeButtonMouseLeaveHandler = (employeeIndex) => {
        setSelectedEmployee(NaN)
    }

  return (
    <div className="App">
      <header className="App__header">
        A
      </header>
        <main>
            <section className="App__hero">
                <div className="App__E">
                    E
                </div>
            </section>
            <section className="App__grid">
                <span>Pracownicy</span>
                {employees.map(
                    (e, index) =>
                        [
                            <span key={`${index}-firstName`} className={selectedEmployee === index ? 'App__grid--selected' : ''}>{e.firstName}</span>,
                            <span key={`${index}-lastName`} className={selectedEmployee === index ? 'App__grid--selected' : ''}>{e.lastName}
                                <button onClick={() => removeEmployeeHandler(index)} onMouseEnter={() => removeButtonMouseEnterHandler(index)} onMouseLeave={() => removeButtonMouseLeaveHandler(index)}>X</button>
                            </span>
                        ]
                )}
            </section>
            {errorMessage ? <span className="App__error">{errorMessage}</span> : null}
            <form onSubmit={submitHandler}>
                <label>
                    Imię:
                <input ref={firstNameInput} type="text" name="firstName" />
                </label>
                <label>
                    Nazwisko:
                <input ref={lastNameInput} type="text" name="lastName" />
                </label>
                <button type="submit" disabled={employees.length>=5}>Dodaj pracownika</button>
            </form>
        </main>
    <footer className="App__footer">
        B
    </footer>
    </div>
  );
}

export default App;
