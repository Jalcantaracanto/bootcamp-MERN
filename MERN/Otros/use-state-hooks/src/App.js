import "./App.css"
import { MiPrimerEstado } from "./components/MiPrimerEstado"
import { EjercicioComponent } from "./components/EjercicioComponent"

function App() {
    const fecha = new Date()
    const yearActual = fecha.getFullYear()
    return (
        <div className="App">
            <header className="App-header">
                Hook Use State
                <MiPrimerEstado />
                <EjercicioComponent year={yearActual} />
            </header>
        </div>
    )
}

export default App
