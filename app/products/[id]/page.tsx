import ColorOption from "@/components/ColorOption";
import Footer from "@/components/Footer";
import SizePicker from "@/components/SizePicker";

import { supabase } from "@/lib/supabaseClient";

interface ProductPageProps {
  params: {
    id: string;
  };
}

type Product = {
  id: number;
  name: string;
  price: number;
  product_images?: { image_url: string }[];
  product_sizes?: { size: number; is_available: boolean }[];
};

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const { id } = await params;

  const { data: product, error } = await supabase
    .from("products")
    .select(
      `id , name,price , product_images (image_url) , product_sizes(size, is_available)`
    )
    .eq("id", id)
    .single<Product>();
  console.log(product);
  if (error || !product) {
    return <p>product not found!!!</p>;
  }
  const sizes = product.product_sizes?.map((s) => ({
    size: Number(s.size),
    is_available: s.is_available,
  }));
  return (
    <div>
      <div className="mx-[60px] flex gap-4">
        <div className="images  grid grid-cols-2  gap-2 rounded-3xl m-0 w-2/3  overflow-hidden">
          {product.product_images?.map(
            (img: { image_url: string }, index: number) => (
              <img
                src={img.image_url}
                key={index}
                alt={product.name}
                className="w-full h-full object-cover "
              />
            )
          )}
        </div>

        <div className="w-1/3 flex flex-col justify-start items-start gap-6">
          <button
            type="button"
            className="bg-[#4A69E2] text-white p-3 rounded-2xl"
          >
            New Release
          </button>
          <h3 className="text-4xl font-[500]">{product.name}</h3>
          <p className="text-[#4A69E2]  text-3xl font-[500]">
            $ {product.price}.00
          </p>
          <div>
            <p className="text-xl font-[500]">COLOR</p>
            <ColorOption></ColorOption>
          </div>
          <div className="sizePicker">
            <div className="flex font-[500] justify-between w-full items-center">
              <p>SIZE</p>
              <p>SIZE CHART</p>
            </div>
            <SizePicker sizes={sizes ?? []}></SizePicker>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
