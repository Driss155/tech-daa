import './service.css';
import Card from './Card/Card';
import cardsData from './Card/CardData';

function Service() {
    return (
        <div className='service-container'>
            <div className='lignes'>
                <div className='left-ligne'>
                    <div className='ligne-1'>
                        <div className='col-1'></div>
                        <div className='col-2'></div>
                    </div>
                    <div className='ligne-2'>
                        <div className='col-3'></div>
                        <div className='col-4'></div>
                    </div>
                    <div className='ligne-3'>
                        <div className='col-5'></div>
                        <div className='col-6'></div>
                        <div className='col-7'></div>
                    </div>
                </div>

                <div className='our-service'>
                    <p>Our Services</p>
                </div>

                <div className='right-ligne'>
                    <div className='ligne-1'>
                        <div className='col-1'></div>
                        <div className='col-2'></div>
                    </div>
                    <div className='ligne-2'>
                        <div className='col-3'></div>
                        <div className='col-4'></div>
                    </div>
                    <div className='ligne-3'>
                        <div className='col-5'></div>
                        <div className='col-8'></div>
                        <div className='col-7'></div>
                    </div>
                </div>
            </div>

            <div className='service-body'>
                {
                    cardsData.map((card) => (
                        <Card
                            key={card.id}
                            image={card.image}
                            cardHeader={card.cardHeader}
                            cardTitle={card.cardTitle}
                            cardBody={card.cardBody}
                            cardOrder={card.cardOrder}
                            directionFlex={card.directionFlex}
                        />
                    ))
                }
            <div className='ligne-2'>
                <div className='col-3'></div>
                <div className='col-4'></div>
            </div>
            </div>
        </div>
    )
}
export default Service;