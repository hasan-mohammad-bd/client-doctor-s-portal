import React from 'react';
import treatment from '../../assets/images/treatment.png';

const ServiceDetails = () => {
    return (
        <div class="hero min-h-screen bg-white-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            class="max-w-sm rounded-lg shadow-2xl flex-1"
            alt=''
          />
          <div className="flex-1">
            <h1 class="text-5xl font-bold">Expectational Dental care on your  terms</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
            <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;