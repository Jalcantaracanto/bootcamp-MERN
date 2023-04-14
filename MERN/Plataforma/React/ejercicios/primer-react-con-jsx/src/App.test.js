import { render, screen } from "@testing-library/react"
// import App from "./App"
import { Component } from "react"

test("renders learn react link", () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()

    class App extends Component {    
      render() {        
          return (            
              <h1 class="my-class">This is JSX</h1>        
          );    
      }
  }
})

