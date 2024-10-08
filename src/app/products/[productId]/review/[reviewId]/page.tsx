"use client";

import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
};

export default function Review( {
  params,
} :{
  params : {
    productId : string;
    reviewId : string;
  };
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error Loading Review");
  }
  
  if (parseInt(params.productId) > 10 || parseInt(params.reviewId) > 10) {
    return notFound();
  }

  return (
    <h1> Review {params.reviewId} for Product {params.productId} </h1>
  )
}
