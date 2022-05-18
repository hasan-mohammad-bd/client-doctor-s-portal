import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card md:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <p><small>Price: $ {price}</small></p>
        <div className="card-actions justify-center">

          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn 
           btn-primary btn-sm"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
