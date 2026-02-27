import './App.css'

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="logo">Irrus</div>
        <h1>Deployment Test</h1>
        <p className="subtitle">React + TypeScript · Azure Static Web Apps</p>
        <div className="status">
          <span className="dot" />
          Online
        </div>
        <p className="meta">Gebouwd en gedeployed door Kai · {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default App
