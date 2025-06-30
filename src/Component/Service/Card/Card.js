// src/Component/Service/Card/Card.js
import './card.css';

function Card({ image, cardHeader, cardTitle, cardBody, cardOrder, directionFlex }) {
    return (
        <div className='card-container'>
            <div className='ligne-2' style={{ direction: directionFlex }}>
                <div className='col-3'></div>
                <div className='col-4'></div>
            </div>
            <div className='card'>
                <div className='card-left'>
                    <div className='card-left-header'>
                        <p>{cardHeader}</p>
                    </div>
                    <div className='card-left-body'>
                        <p>{cardTitle}</p>
                    </div>

                    {/* === THIS IS THE UPDATED PART === */}
                    <div className='card-left-footer'>
                        {/* We map over the cardBody array to create a list */}
                        <ul>
                            {cardBody.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>
                    {/* === END OF UPDATED PART === */}
                    
                </div>

                <div className='card-right' style={{ order: cardOrder }}>
                    <img src={image} alt='Service illustration' />
                </div>
            </div>
        </div>
    )
}
export default Card;