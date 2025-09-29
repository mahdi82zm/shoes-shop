"use client";
import Category from "@/components/Category";
import Shoes from "/images/shoes1.png";
import ProductCart from "@/components/ProductCart";
import Slider from "@/components/Slider";
import { supabase } from "@/lib/supabaseClient";

import { useEffect, useState } from "react";

interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      console.log(data);
      if (error) console.log(error);
      else setProducts(data as Products[]);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="main-container">
        <div className=" font-bold ">
          <h2 className="w-full text-center  font-bold big-font">
            DO IT <span className="bluecolor "> RIGHT</span>
          </h2>
        </div>
        <Slider />

        <div className="flex justify-between h-auto items-end my-10">
          <h3 className="text-black font-[500] text-[70px] w-1/2">
            DON’T MISS OUT NEW DROPS
          </h3>
          <button className="bg-[#4A69E2] rounded-xl text-xl p-3 h-1/3 font-[500] text-white">
            {" "}
            Shop New Drops
          </button>
        </div>
        <div className="flex gap-3">
          {products.map((product) => (
            <ProductCart
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>

      <Category></Category>

      
    </>
  );
}
