import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvaliableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="my-12">
      <p className="text-secondary text-xl text-center">
        You have selected: {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {
              services.map(service => <Service service={service} key={service._id} setTreatment={setTreatment}></Service>)
          }
      </div>
      {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
    </div>
  );
};

export default AvaliableAppoinment;
