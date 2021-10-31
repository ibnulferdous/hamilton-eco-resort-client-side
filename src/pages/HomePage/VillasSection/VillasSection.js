import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import VillaCard from './VillaCard/VillaCard';
import './VillasSection.css';

const VillasSection = () => {
    const [villas, setVillas] = useState([]);

    useEffect(() => {
        fetch('https://fierce-tundra-10720.herokuapp.com/villas')
        .then(res => res.json())
        .then(data => setVillas(data));
    }, []);


    return (
        <section className="villas-section py-8 overflow-hidden">
            <div className="container pb-7">
                <div className="row">
                    <div className="col col-lg-6 px-2">
                        <h2 className="display-4 her-heading mb-4">Luxury Accommodation</h2>
                        <p className="lh-lg text-secondary">Luxury Villas surrounded by tropical nature, turquoise waters and velvet-smooth white sands. Accommodations created with typically Italian attention to detail using materials and design techniques for optimum sustainability while making the most of the natural setting and its all-embracing beauty. Take a dip in the private pool and enjoy unparalleled views of the white sand and the crystal clear ocean.  But no matter which villa you choose, we promise you will not want to leave.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {
                        villas.map(villa => <VillaCard key={villa._id} villa={villa}></VillaCard>)
                    }
                </Row>
            </div>
        </section>
    );
};

export default VillasSection;