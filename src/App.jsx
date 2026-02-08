
import './App.css'
import BackImages from './main-page/BackImages'
import Navbar from './main-page/Navbar'
import WhoWeAre from './who-we-are/WhoWeAre'
import TheExperience from './the-experience/TheExperience'

function App() {
  return (
    <div className="app-container">
      <section className="main-page-section">
        <BackImages />
        <Navbar />
      </section>
      <WhoWeAre />
      <TheExperience />
    </div>
  )
}

export default App
