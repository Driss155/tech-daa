// src/Component/Works/WorkCard/WorkCard.js

import './workCard.css';

// Make sure to receive the 'workCardLink' prop here
function WorkCard({ image, workCardTitle, workCardName, workCardLink, workCardDescription }) {
    return (
        <div className='work-card-container'>
            <div className='work-card-img' style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className='work-card-text'>
                <p>{workCardTitle}</p>
                <p>{workCardName}</p>
                <p>{workCardDescription}</p>
                
                {/* THIS IS THE FIXED BUTTON */}
                {/* It's an <a> tag that opens the link in a new tab */}
                <a href={workCardLink} target="_blank" rel="noopener noreferrer" className="go-site-button">
                    Go Site
                </a>
            </div>
        </div>
    )
}
export default WorkCard;