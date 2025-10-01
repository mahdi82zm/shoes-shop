"use client";
import Category from "@/components/Category";
import Shoes from "/images/shoes1.png";
import ProductCart from "@/components/ProductCart";
import Slider from "@/components/Slider";
import { supabase } from "@/lib/supabaseClient";

import { useEffect, useState } from "react";
import Reviews from "@/components/ReviewsCart";
import ReviewsList from "@/components/ReviewsList";
import Footer from "@/components/Footer";
import Spinner from "../components/Spinner"

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
  if (loading) return <Spinner />;

  return (
    <>
      <div className="  lg:mx-[60px] sm:mx-6 mx-4">
        <div className=" font-bold py-8">
          <h2 className="w-full text-center  font-bold  text-6xl   md:text-8xl lg:text-[140px] xl:text-[180px]">
            DO IT <span className="bluecolor "> RIGHT</span>
          </h2>
        </div>
        <Slider />

        <div className="flex justify-between h-auto items-end my-10">
          <h3 className="text-black font-[500] md:text-4xl text-2xl  lg:text-4xl xl:text-6xl xl:w-xl w-1/2">
            DON’T MISS OUT NEW DROPS
          </h3>
          <button className="bg-[#4A69E2] rounded-xl text-sm md:text-xl p-3 h-1/3 font-[500] text-white">
            {" "}
            Shop New Drops
          </button>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
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

      <ReviewsList></ReviewsList>
      <Footer></Footer>
      <div className="flex justify-center items-center">
        {" "}
        <p>© All rights reserved | Made with ❤️ by Mahdi Zabihi</p>
      </div>
    </>
  );
}
