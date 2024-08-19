import React from 'react';
import "./Features.css";
import sections from '../../contants/data';
import Feature from './Feature';

const Features = () => {
  return (
    <section className='features section-p bg-black' id = "features">
        <div className='container'>
            <div className='features-content'>
                <div className='item-list text-white'>
                    {
                        sections.features.map(feature => {
                            return (
                                <Feature key = {feature.id} {...feature} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features