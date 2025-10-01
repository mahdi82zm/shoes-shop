import React from "react";

export default function Footer() {
  return (
    <div className="main-container relative ">
      <div className="flex  bg-[#4A69E2] rounded-t-4xl justify-between items-center my-[60px] py-20 z-10 relative">
        <div className="main-container w-sm ">
          <h3 className="font-bold text-4xl text-white pb-3">
            Join our KicksPlus Club & get 15% off
          </h3>
          <p className="font-light text-sm pb-3 text-gray-300 ">
            Sign up for free! Join the community.
          </p>
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
        <img className="mr-[60px] w-[300px]" src="/images/icon2.png" alt="" />
      </div>
      <div className=" bg-[#232321] text-white font-light rounded-4xl -top-29   relative z-20">
        <div className="flex  py-2 px-5 justify-between gap-7 ">
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
            <div className="flex gap-9">
              <img src="/images/ic_baseline-facebook.svg" alt="" />
              <img src="/images/mdi_instagram.svg" alt="" />
              <img src="/images/mdi_twitter.svg" alt="" />
              <img src="/images/ic_baseline-tiktok.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="px-5 pt-12">
          {" "}
          <img src="/images/Logo.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
