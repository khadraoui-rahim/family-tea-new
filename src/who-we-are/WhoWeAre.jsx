import './WhoWeAre.css'

function WhoWeAre() {
  return (
    <section className="who-we-are-section">
      <div className="who-we-are-content">
        <h2 className="who-we-are-title">Who We Are</h2>
        <div className="grid-container">
          <div className="grid-item grid-item-brown">
            <div className="grid-item-content">
              <h3 className="grid-item-title">What do we offer?</h3>
              <ul className="grid-item-list">
                <li>Traditional Saharan tea, freshly prepared on the spot</li>
                <li>Homemade sweets and tea accompaniments</li>
                <li>Professional mobile tea service</li>
                <li>Immersive and fully designed tea corner</li>
                <li>Authentic hospitality and traditional tea rituals</li>
              </ul>
            </div>
            <img src="/who-we-are/1.png" alt="" className="grid-item-image" />
          </div>
          <div className="grid-item grid-item-red">
            <div className="grid-item-content">
              <h3 className="grid-item-title">Rooted in authenticity</h3>
              <p className="grid-item-text">We don't just serve tea — we revive a ritual, tell a story, and turn every cup into a shared moment.</p>
            </div>
            <img src="/who-we-are/2.png" alt="" className="grid-item-image" />
          </div>
          <div className="grid-item grid-item-green">
            <div className="grid-item-content">
              <p className="grid-item-title special">
                Authentic by nature.<br />
                Positive energy only.<br />
                Hospitality guaranteed.
              </p>
            </div>
            <img src="/who-we-are/3.png" alt="" className="grid-item-image" />
          </div>
          <div className="grid-item grid-item-white">
            <div className="grid-item-content grid-item-content-white">
              <h3 className="grid-item-title grid-item-title-white">Designed for real moments</h3>
              <p className="grid-item-text grid-item-text-white">The Family Tea experience is created for those who value:</p>
              <ul className="grid-item-list grid-item-list-white">
                <li className='special2'>Shared moments</li>
                <li>Cultural depth</li>
                <li>Thoughtful details</li>
              </ul>
              <p className="grid-item-text grid-item-text-white">From intimate gatherings to large-scale events, we tailor our services to your space and your story.</p>
            </div>
            <img src="/who-we-are/5.png" alt="" className="grid-item-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
