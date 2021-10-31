import React from 'react';
import './ActivitiesSection.css';

const ActivitiesSection = () => {
    return (
        <section className="activities-section py-8">
            <div className="container px-2">
                <div className="row justify-content-end">
                    <div className="col col-lg-6">
                        <h2 className="display-4 her-heading mb-4">Island Activities</h2>
                        <p className="lh-lg text-secondary pb-5 pb-md-0">Snorkeling at sunset, cruises under the stars, cooking classes, excursions and many more experiences will enrich your stay in the Maldives. Live incredible adventures in this exceptional natural landscape.</p>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-2">
                        <div className="col">
                            <img src="https://i.postimg.cc/mrLt47ZC/2.jpg" className="img-fluid" alt="resort" />
                        </div>
                        <div className="col">
                            <div>
                                <img src="https://i.postimg.cc/8Pv43fCT/1.jpg" className="img-fluid pt-4 pt-lg-5" alt="resort" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="pt-0 pt-lg-5">
                                <img src="https://i.postimg.cc/MpD727JJ/3.jpg" className="img-fluid pt-4 pt-lg-5" alt="resort" />
                            </div>
                        </div>
                    </div>
            </div>
            
        </section>
    );
};

export default ActivitiesSection;