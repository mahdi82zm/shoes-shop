"use client";
import { supabase } from "@/lib/supabaseClient";
import React, { useEffect, useState } from "react";
import ReviewsCart from "./ReviewsCart";

interface Review {
  user_name: string;
  user_avatar: string;
  rating: number;
  description: string;
  title: string;
  product_image: string;
}

export default  function ReviewsList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from("Reviews")
        .select(
          "user_name, user_avatar, rating,title, description, product_image"
        );

      if (error) console.error(error);
      else setReviews(data as Review[]);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  if (loading) return <p>Loading Reviews ...</p>;
  return (
    <div className="main-container">
      <div className="flex justify-between  py-20">
        <h3 className="text-5xl font-[500]">REVIEWS</h3>
        <button className="text-sm bg-[#4A69E2] text-white rounded-lg px-5">
          SEE ALL
        </button>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-5">
        {reviews?.map((review, i) => (
          <ReviewsCart key={i} {...review} />
        ))}
      </div>
    </div>
  );
}
