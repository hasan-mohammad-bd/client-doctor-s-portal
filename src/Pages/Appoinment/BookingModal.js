import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({date, treatment, setTreatment}) => {
    const {name, slots} = treatment;
    const [user] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const date = event.target.date.value
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        console.log(slot, name, email, phone, date);
        setTreatment(null)
    }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
            <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-3">
            <input type="text" name="date" disabled value={format(date,'PP')} class="input input-bordered w-full max-w-xs" />
            <select name="slot" class="select select-bordered w-full max-w-xs text-black">
            {
                slots.map(slot => <option value={slot}>{slot}</option>)
            }
            </select>
            <input type="text" name="name" disabled value={user?.displayName} placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" disabled value={user?.email} placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Your Phone" class="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" class=" w-full max-w-xs btn btn-secondary" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
