import './header.css';
import { useEffect, useState } from 'react';

function Header({ onReadMoreClick }) {
    const words = ['Website', 'App', 'Portfolio', 'Store'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    });

const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    setHeaderVisible(true);
  }, []);

    return (
        <div className={`header ${headerVisible ? 'header-enter-active' : 'header-enter'}`}>
            <div className='header-all'>
                
                <div className='header-logo'>
                    <img src='/navbar/Logo.png' alt='Logo' />
                </div>
                
                <div className='header-text-1'>
                    <p>Make your <span key={words[currentWordIndex]} className='changing-word'>{words[currentWordIndex]}</span> Now</p>
                </div>

                <div className='header-text-2'>
                    <p>We are a passionate tech agency offering modern digital solutions, driven by innovation and a fresh vision in the industry</p>
                    <button onClick={onReadMoreClick}>Read More</button>
                </div>
                
            </div>
        </div>
    )
}
export default Header;