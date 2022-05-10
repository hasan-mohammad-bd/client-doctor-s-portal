import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
          repellat! Dolore facere dolores quibusdam aperiam.
        </p>
        <div class="flex justify-around items-center">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
