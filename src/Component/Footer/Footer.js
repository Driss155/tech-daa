// src/Component/Footer/Footer.js

import './footer.css';

// 1. Accept all the new props from Home.js
function Footer({ onHomeClick, onServiceClick, onAboutClick, onProjectsClick, onContactClick }) {

    const handleLinkClick = (e, clickFunction) => {
        e.preventDefault(); // Prevents page from jumping to the top
        clickFunction();
    };

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src='/navbar/Logo.png' alt='Tech-DA Logo'/>
                    <p>High level experience in web design and development knowledge, producing quality work.</p>
                </div>
                <div className='footer-links'>
                    <div className='footer-column'>
                        <p className="footer-heading">Company</p>
                        <ul>
                            {/* 2. Use the onClick handlers for scrolling */}
                            <li><a href='#' onClick={(e) => handleLinkClick(e, onHomeClick)}>Home</a></li>
                            <li><a href='#' onClick={(e) => handleLinkClick(e, onServiceClick)}>Service</a></li>
                            <li><a href='#' onClick={(e) => handleLinkClick(e, onAboutClick)}>About</a></li>
                            <li><a href='#' onClick={(e) => handleLinkClick(e, onProjectsClick)}>Projects</a></li>
                            <li><a href='#' onClick={(e) => handleLinkClick(e, onContactClick)}>Contact</a></li>
                        </ul>
                    </div>

                    <div className='footer-column'>
                        <p className="footer-heading">Portfolio</p>
                        <ul>
                            {/* 3. Link to the real project URLs */}
                            <li><a href='https://group-sigma.com/' target="_blank" rel="noopener noreferrer">Group Sigma</a></li>
                            <li><a href='https://www.milorecipes.com/' target="_blank" rel="noopener noreferrer">Milo Recipes</a></li>
                            <li><a href='https://totalwebx.com/smm/' target="_blank" rel="noopener noreferrer">TotalWebX SMM</a></li>
                            <li><a href='https://frmr.ma/frmr/' target="_blank" rel="noopener noreferrer">FRMR Rugby</a></li>
                            <li><a href='https://divingservice.ma/en/' target="_blank" rel="noopener noreferrer">Diving Service</a></li>
                        </ul>
                    </div>

                    <div className='footer-column'>
                        <p className="footer-heading">Follow us</p>
                        <div className='footer-socials'>
                            <a href='https://wa.me/212772570811' target="_blank" rel="noopener noreferrer"><img src='/images/whatssap.png' alt='WhatsApp'/></a>                            <a href='https://facebook.com/YOUR_PAGE' target="_blank" rel="noopener noreferrer"><img src='/images/facebook.png' alt='Facebook'/></a>
                            <a href='https://instagram.com/tech_d.a' target="_blank" rel="noopener noreferrer"><img src='/images/instagram.png' alt='Instagram'/></a>                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-copy'>
                {/* 5. The copyright year is now always current */}
                <p>© {new Date().getFullYear()} TECH-DA, Inc. All Rights Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;