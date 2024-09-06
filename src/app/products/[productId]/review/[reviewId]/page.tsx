import { notFound } from "next/navigation";

export default function Review( {
  params,
} :{
  params : {
    productId : string;
    reviewId : string;
  };
}) {
  if (parseInt(params.productId) > 10 || parseInt(params.reviewId) > 10) {
    return notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for Product {params.productId}
    </h1>
  )
}
