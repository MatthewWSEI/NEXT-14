import { notFound } from "next/navigation";
import React from "react";

const getRandomId = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomId(2);

  if (random === 1) {
    throw new Error("Error Loading review");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Review {params.reviewId} for produt {params.productId}
    </div>
  );
};

export default ReviewDetail;
