
import './App.css'
import BackImages from './main-page/BackImages'
import Navbar from './main-page/Navbar'
import WhoWeAre from './who-we-are/WhoWeAre'

function App() {
  return (
    <div className="app-container">
      <section className="main-page-section">
        <BackImages />
        <Navbar />
      </section>
      <WhoWeAre />
    </div>
  )
}

export default App
