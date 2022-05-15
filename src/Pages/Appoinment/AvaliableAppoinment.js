import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";
import {useQuery} from 'react-query';
import Loading from "../Shared/Loading";

const AvaliableAppoinment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)


    const formattedDate = format(date, 'PP')
    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], ()=>fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])
  return (
    <div className="my-12">
      <p className="text-secondary text-xl text-center">
        You have selected: {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {
              services?.map(service => <Service service={service} key={service._id} setTreatment={setTreatment}></Service>)
          }
      </div>
      {treatment && <BookingModal 
      date={date} 
      treatment={treatment} 
      setTreatment={setTreatment}
      refetch={refetch}></BookingModal>}
    </div>
  );
};

export default AvaliableAppoinment;
