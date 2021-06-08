import React from 'react';
import Card from './Card';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';

import '../assets/styles/Dashboard.css';

function Dashboard() {

    const cards = [
        {
            id: 1,
            image: img1,
            title: 'Black Widow',
            date: 'July 9, 2021',
            button: 'https://www.youtube.com/'
        },
        {
            id: 2,
            image: img2,
            title: 'Shang-Chi and the Legend of the Ten Rings',
            date: 'September 3, 2021',
            button: 'https://www.youtube.com/'
        },
        {
            id: 3,
            image: img3,
            title: 'Eternals',
            date: 'November 5, 2021',
            button: 'https://www.youtube.com/'
        },
        {
            id: 4,
            image: img4,
            title: 'Spider-Man: No Way Home',
            date: 'December 17, 2021',
            button: 'https://www.youtube.com/'
        }
    ]

    return (
        <main>
            <div className="container d-flex justify-content-center h-100 align-items-center">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-light">Marvel Movies 2021</h5>
                    </div>
                    {
                        cards.map(card => (
                            <div className="col-md-3" key={card.id}>
                                <Card img={card.image} title={card.title} date={card.date} buttonUrl={card.button} />
                            </div>
                        ))
                    } 
                </div>
            </div>
        </main>
    )
}

export default Dashboard;
