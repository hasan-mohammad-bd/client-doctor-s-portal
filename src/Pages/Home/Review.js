import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
          repellat! Dolore facere dolores quibusdam aperiam.
        </p>
        <div className="flex justify-around items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt='' />
            </div>
          </div>
          <div>
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
