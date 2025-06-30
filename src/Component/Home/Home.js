import './Home.css';
import NavBar from '../Nav-Bar/NavBar';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Works from '../Works/Works';
import Contuct from '../Contuct/Contuct';
import Footer from '../Footer/Footer';
import { useRef } from 'react';

function Home() {

    const contactRef = useRef(null);
    const homeRef = useRef(null);
    const serviceRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className='main'></div>
            <div className='home-header' ref={homeRef}>
                <video autoPlay loop muted className="background-video">
                    <source src="/videos/vid-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <NavBar
                    onContactClick={() => scrollToSection(contactRef)}
                    onhomeClick={() => scrollToSection(homeRef)}
                    onserviceClick={() => scrollToSection(serviceRef)}
                    onaboutClick={() => scrollToSection(aboutRef)}
                    onProjectsClick={() => scrollToSection(projectsRef)}
                />
                <Header onReadMoreClick={() => scrollToSection(aboutRef)} />
            </div>

            <div ref={serviceRef} className="scroll-target">
                <Service />
            </div>

            <div className='tech-container scroll-target' ref={aboutRef}>
                <div className='tech-header'>
                    <p>Why TECH-DA?</p>
                    <div className='tech-header-imgs'>
                        <img src='/images/backgounds-tech/css.png' alt='CSS' />
                        <img src='/images/backgounds-tech/react.png' alt='React' />
                        <img src='/images/backgounds-tech/symphony.png' alt='Symphony' />
                    </div>
                </div>

                {/* === TEXT UPDATED HERE === */}
                <div className='tech-body'>
                    <p>
                        At Tech-DA, we bring your digital ideas to life from simple websites to smart platforms powered by AI. We specialize in custom web development and AI solutions, tailored to your needs, your goals, and your budget. Whether you need a showcase website, an online store, or AI features that automate and boost your business   <br></br>we do it all.
                    </p>
                    <p>
                        We offer quality work at fair prices. From design to deployment, we guide you every step of the way. Simple, clear, and focused on your success.    
                    </p>
                </div>

            </div>

            <div ref={projectsRef} className="scroll-target">
                <Works />
            </div>

            <div ref={contactRef} className="scroll-target">
                <Contuct />
            </div>

            <div>
            <Footer 
            onHomeClick={() => scrollToSection(homeRef)}
            onServiceClick={() => scrollToSection(serviceRef)}
            onAboutClick={() => scrollToSection(aboutRef)}
            onProjectsClick={() => scrollToSection(projectsRef)}
            onContactClick={() => scrollToSection(contactRef)}
            />
            </div>
        </div>
    )
}
export default Home;