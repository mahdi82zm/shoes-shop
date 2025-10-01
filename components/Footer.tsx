import React from "react";

export default function Footer() {
  return (
    <div className="md:main-container  relative ">
      <div className="flex flex-col md:flex-row bg-[#4A69E2] rounded-t-4xl justify-between items-center md:my-[60px] mdpy-20 z-10 relative">
        <div className="main-container w-1/2 ">
          <h3 className="font-bold text-4xl text-white pb-3 w-1/2">
            Join our KicksPlus Club & get 15% off
          </h3>
          <p className="font-light text-sm pb-3 text-gray-300 ">
            Sign up for free! Join the community.
          </p>
          <div className="md:flex">
            <input
              type="email"
              placeholder="Email address "
              className=" pb-3  border-white border-2 p-3 rounded-xl text-white focus:outline-none"
            />
            <button
              type="submit"
              title="submit"
              className="text-white bg-black p-3 rounded-xl mx-4 "
            >
              Submit
            </button>
          </div>
        </div>
        <img
          className="mr-[60px]  sm:w-36  md:w-48 lg:w-[300px] w-1/2"
          src="/images/icon2.png"
          alt=""
        />
      </div>
      <div className=" bg-[#232321] text-white font-light rounded-4xl -top-29   relative z-20">
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4  py-2 px-5 gap-7 justify-between gap-7 ">
          <div className="about-us  w-2/5 ">
            <h3 className="text-[#FFA52F] text-xl font-bold">About us</h3>
            <p>
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>
          <div className="categories w-1/5">
            <h3 className="text-[#FFA52F] text-xl font-bold">Categories</h3>
            <p>Runners</p>
            <p>Sneakers</p>
            <p>Basketball</p>
            <p>Outdoor</p>
            <p>Golf</p>
            <p>Hiking</p>
          </div>
          <div className="company  w-1/5">
            <h3 className="text-[#FFA52F] text-xl font-bold">Company</h3>
            <p>About</p>
            <p>Contact</p>
            <p>Blogs</p>
          </div>
          <div className=" w-1/5">
            <h3 className="text-[#FFA52F] text-xl font-bold">Follow us</h3>
            <div className="flex gap-9  flex-col sm:flex-row">
              <img src="/images/ic_baseline-facebook.svg" alt="" />
              <img src="/images/mdi_instagram.svg" alt="" />
              <img src="/images/mdi_twitter.svg" alt="" />
              <img src="/images/ic_baseline-tiktok.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="px-5 pt-12">
          {" "}
          <img src="/images/Logo.svg" alt="" className="" />
        </div>
      </div>
    </div>
  );
}
