import "./App.css"
import { AjaxComponent } from "./components/AjaxComponent"
import { PruebasComponent } from "./components/PruebasComponent"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <PruebasComponent />
                <AjaxComponent/>
            </header>
        </div>
    )
}

export default App
