import BackImages from '../main-page/BackImages';
import Navbar from '../main-page/Navbar';
import WhoWeAre from '../who-we-are/WhoWeAre';
import TheExperience from '../the-experience/TheExperience';
import TrustedByMany from '../trusted-by-many/TrustedByMany';

function Home() {
    return (
        <>
            <section className="main-page-section">
                <BackImages />
                <Navbar />
            </section>
            <WhoWeAre />
            <TheExperience />
            <TrustedByMany />
        </>
    );
}

export default Home;
