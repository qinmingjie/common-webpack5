import React from 'react'
import { createRoot } from 'react-dom/client'
class Count extends React.Component {
  constructor() {
    super()
    this.state = { count: 1 }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <button onClick={this.increment}>React count {this.state.count}</button>
    )
  }
}

function Hello() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Count />
    </div>
  )
}

const root = createRoot(document.querySelector("#reactApp"))
root.render(<Hello />)
