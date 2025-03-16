import React from "react";
import FormatDate from "../../utils/FormatDate";
import starCreator from "../../utils/StarCreator";

const ReviewItem = ({ review, image }) => (
  <div
    key={review.reviewerName}
    className="bg-[#FAFAFA] px-4 py-6 w-full rounded-lg mb-6"
  >
    <div className="flex w-full gap-2">
      <img className="w-14 h-14 rounded-[50%]" src={image} alt="product" />
      <div className="w-full">
        <div className="flex items-center justify-between mb-2">
          <h5 className="text-lg font-semibold">{review.reviewerName}</h5>
          <span>{FormatDate(review.date)}</span>
        </div>
        <div className="flex gap-1 mb-2">{starCreator(review.rating)}</div>
        <p className="text-secondary">{review.comment}</p>
      </div>
    </div>
  </div>
);

export default ReviewItem;
