// src/Component/Works/Works.js

import './works.css';
import WorkCard from './WorkCard/WorkCard';
import WorkCardData from './WorkCard/WorkCardData';

function Works() {
    return (
        <div>
            <div className='work-container'>
                <div className='work-header'>
                    <p>Our Work</p>
                    <p>Featured Projects</p>
                    <div className='tech-header-work'>
                        <img src='/images/backgounds-tech/css.png' alt='css icon' />
                        <img src='/images/backgounds-tech/react.png' alt='react icon' />
                        <img src='/images/backgounds-tech/symphony.png' alt='symphony icon' />
                    </div>
                    <p>Explore our portfolio of successful client projects that showcase our expertise, creativity, and technical capabilities.</p>
                </div>
                <div className='workk'>
                    {
                        WorkCardData.map((card) => (
                            <WorkCard
                                key={card.id}
                                image={card.image}
                                workCardTitle={card.workCardTitle}
                                workCardName={card.workCardName}
                                workCardDescription={card.workCardDescription}
                                workCardLink={card.link} // <-- THIS IS THE NEW LINE WE ADDED
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Works;