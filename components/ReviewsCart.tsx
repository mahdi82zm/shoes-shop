import { supabase } from "@/lib/supabaseClient";
import React from "react";

type ReviewsProps = {
  user_name: string;
  user_avatar: string;
  rating: number;
  description: string;
  title: string;
  product_image: string;
};

export default function ReviewsCart({
  user_name,
  user_avatar,
  rating,
  description,
  title,
  product_image,
}: ReviewsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300 flex flex-col   gap-3 ">
      <div className="flex justify-between items-center p-4">
        <div>
          <h3 className="font-[500] text-xl">{title}</h3>

          <p className="font-light text-gray-500">{description}</p>

          <p>
            {"⭐".repeat(rating)}
            {rating}.0
          </p>
        </div>
        <img src={user_avatar} alt="" />
      </div>
      <img className="rounded-b-2xl" src={product_image} alt="" />
    </div>
  );
}
