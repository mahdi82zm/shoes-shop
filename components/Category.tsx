import { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    name: "Lifestyle Shoes",
    image: "/images/category1.png",
    backcolor: "#F6F6F6",
  },
  {
    id: 2,
    name: "Basketball Shoes",
    image: "/images/category2.png",
    backcolor: "#ECEEF0",
  },
];

export default function Category() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemPerSlide, setItemPerSlide] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemPerSlide(1);
      } else {
        setItemPerSlide(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < categories.length - itemPerSlide) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-[#232321]  w-full">
      <div className="main-container flex justify-between  py-12">
        <h3 className="text-4xl text-white font-[500]">CATEGORIES</h3>
        <div className=" flex gap-3 items-end">
          {" "}
          <button
            onClick={prevSlide}
            type="button"
            title="Previous slide"
            aria-label="Previous slide"
            className="bg-[#E7E7E3] p-2 rounded-md "
          >
            <img src="/images/arroeleft.svg" alt="Previous slide" />
          </button>
          <button
            onClick={nextSlide}
            type="button"
            title="Next slide"
            aria-label="Next slide"
            className="bg-[#E7E7E3] p-2 rounded-md "
          >
            <img src="/images/arrowright.svg" alt="Next slide" />
          </button>
        </div>
      </div>
      <div className=" flex ml-[60px]  ">
        {categories
          .slice(currentIndex, currentIndex + itemPerSlide)
          .map((category) => (
            <div
              key={category.id}
              className="bg-[#ECEEF0] flex-1  overflow-hidden  flex-col"
              style={{ height: "500px", borderRadius: "30px 0  0   0" }}
            >
              <div className="h-4/5 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-1/5 flex items-center justify-between main-container">
                <h4 className="text-[#232321] font-[500] text-3xl text-center px-2 w-3">
                  {category.name}
                </h4>
                <button
                  type="button"
                  title="go to category"
                  className="bg-[#232321] rounded-lg p-2"
                >
                  <img
                    src="/images/arrow_trend_right_up.svg"
                    alt=""
                    className="w-5"
                  />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
