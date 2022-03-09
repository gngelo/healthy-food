import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Menu from './components/menu'
import Footer from './components/footer'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
        <main className="App-main">
          <Routes />
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App
