"use client"
import { useState } from "react";
import RadarChart from "./RadarChart";
const CalculateForm = () => {
    const [baseFar, setBaseFar] = useState("0.00");
    const [highestFar, setHighestFar] = useState("0.00");
    const [area, setArea] = useState([]);


    const zoneData=[
        {ZoneId:1,Zone:"dhaka"}
    ]

    return (
        <div>
             <div className="container mx-auto">
      <div>
        <div className="w-full  mx-auto md:flex justify-start gap-10   p-2 md:p-12">
          {/* <form onChange={handleCalculator}> */}
          <form>
            <div className=" border-gray-300 rounded-xl p-6 grid grid-cols-1 gap-6 bg-base-100 hover:shadow-2xl  shadow-lg ">
              <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 ">
                <div className=" border flex  justify-between items-center rounded-md">
                  <label className="text-md font-md w-16 pl-1">
                    Zone <span className="text-red-500">*</span>
                  </label>
                  <select
                    onChange={(e) => handleZoneId(e.target.value)}
                    className="w-full border p-2 rounded"
                  >
                    {zoneData.map((zone, i) => (
                      <option key={i} value={zone?.ZoneId}>
                        {zone.Zone}
                      </option>
                    ))}
                  </select>
                </div>
                <div className=" border flex justify-between items-center rounded-md">
                  <label className="text-md font-md w-16 pl-1" htmlFor="">
                    Area <span className="text-red-500">*</span>
                  </label>
                  <select name="area" className="border w-full   p-2 rounded">
                    {area?.map((areaData, i) => (
                      <option key={i}>{areaData.Locality_thana}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className=" gap-4 grid grid-cols-1 md:grid-cols-2 ">
                <div className=" border flex  justify-between items-center rounded-md">
                  <label className="text-md font-md w-16 pl-1">
                    Ward <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border p-2 rounded">
                    <option>DNCC_Ward-01-P</option>
                    <option>DNCC_Ward-01-S</option>
                    <option>DNCC_Ward-02</option>
                  </select>
                </div>
                <div className=" border flex justify-between items-center rounded-md">
                  <label className="md:text-md text-sm font-md  " htmlFor="">
                    <h2>ইমারত এর শ্রেণী (শুধু মাত্র A3 শ্রেণী আপাতত) </h2>
                  </label>
                  <select className="border p-2 rounded-md ">
                    <option>A1 (একক পরিবার)</option>
                    <option>A2 (দুই পরিবার)</option>
                    <option>A3 (ফ্ল্যাট / এপার্টমেন্ট)</option>
                    <option>A4 (মেস/ বোর্ডিং/হোস্টেল)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1  gap-4">
                <div className="grid grid-cols-2 gap-6  rounded">
                  <div className="flex border rounded bg-gray-100 items-center p-2 ">
                    <svg
                      className="fill-current text-gray-800 mr-2 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        className="heroicon-ui"
                        d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"
                      />
                    </svg>

                    <input
                      type="text"
                      placeholder="Area of the Plot (sqft)"
                      className="bg-gray-100 max-w-full focus:outline-none text-gray-700"
                    />
                  </div>
                  <div className="flex border rounded bg-gray-100 items-center p-2 ">
                    <svg
                      className="fill-current text-gray-800 mr-2 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        className="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Plot adjacent road (feet)"
                      className="bg-gray-100 max-w-full focus:outline-none text-gray-700"
                    />
                  </div>
                </div>

                <div className="my-5 flex justify-between md:text-2xl text-green-500 font-semibold">
                  <h2 htmlFor="">
                    ভিত্তি FAR <span className="text-red-700">{baseFar}</span>{" "}
                    {/*set data*/}
                  </h2>
                  <h2 htmlFor="">
                    সর্বোচ্চ FAR{" "}
                    <span className="text-red-700">{highestFar}</span>
                  </h2>
                </div>
              </div>
              {/* <div className="flex justify-center"><button className="p-2 border w-1/4 rounded-md bg-gray-800 text-white">Calculate</button></div> */}
            </div>

            <div className=" border-gray-300 p-6 mt-10 grid grid-cols-1 gap-6 bg-base-100 hover:shadow-2xl  shadow-lg rounded-lg">
              <h2>
                প্রণোদনা FAR নির্ণয় সংক্রান্ত তথ্য (অনুচ্ছেদ -৩.১২ অনুযায়ী)
              </h2>

              <div className="flex flex-col space-y-2 gap-5">
                <div className="border p-2 flex items-center rounded-md">
                  <input
                    type="checkbox"
                    className="checkbox mr-5  checkbox-primary"
                    value={1}
                    id="school"
                  ></input>

                  <label className="text-md font-md py-1" htmlFor="school">
                    ১টি বিদ্যালয়{" "}
                  </label>
                </div>
                <div className="border p-2 flex items-center rounded-md">
                  <input
                    className="checkbox mr-5  checkbox-primary"
                    value={0.25}
                    type="checkbox"
                    id="field"
                  />
                  <label className="text-md font-md py-1" htmlFor="field">
                    ১টি খেলার মাঠ/পার্ক (সম্ভাব্য সর্বোচ্চ - ০.২৫) ward based{" "}
                  </label>
                </div>
                <div className="border p-2 flex items-center rounded-md">
                  <input
                    className="checkbox mr-5  checkbox-primary"
                    value={0.75}
                    type="checkbox"
                    id="unitAbason"
                  />
                  <label className="text-md font-md py-1" htmlFor="unitAbason">
                    ন্যুনতম ০5টি ইউনিট সাশ্রয়ী আবাসন (সম্ভাব্য সর্বোচ্চ - ০.৭৫)
                    use
                  </label>
                </div>
                <div className="border p-2 flex items-center rounded-md">
                  <input
                    className="checkbox mr-5  checkbox-primary"
                    value={0.5}
                    type="checkbox"
                    id="TOD"
                  />

                  <label className="text-md font-md py-1" htmlFor="TOD">
                    TOD বলয় এলাকা (সম্ভাব্য সর্বোচ্চ - ০.৫)
                  </label>
                </div>

                <div className="border p-2 flex items-center rounded-md">
                  <label className="text-md font-md  py-2" htmlFor="">
                    TDR ক্রয় (সর্বোচ্চ FAR এর মান প্রাপ্ত হতে যা প্রয়োজন তার
                    চেয়ে বেশী নয়) Type{" "}
                  </label>
                  <input
                    className="input w-20  ml-2  input-sm bg-gray-100 input-primary "
                    type="text"
                  />
                </div>
              </div>

              <div className="my-5 flex text-center justify-between md:text-xl text-green-500 font-semibold">
                <div className="hover:shadow-xl p-2">
                  <h2 htmlFor="">
                    সম্ভাব্য মোট প্রণোদনা{" "}
                    <span className="text-red-700">2.25</span>
                  </h2>
                </div>{" "}
                <div className="hover:shadow-xl p-2 ">
                  <h2 htmlFor="">
                    ভিত্তি FAR+প্রণোদনা{" "}
                    <span className="text-red-700">5.25</span>{" "}
                  </h2>
                </div>
              </div>
              {/* <div className="flex justify-center"><button className="p-2 border w-1/4 rounded-md bg-gray-800 text-white">Calculate</button></div> */}
            </div>
          </form>
          <div className=" flex flex-col  items-center mx-auto">
            <h2 className="text-2xl font-bold text-red-600">
              FAR determinants
            </h2>
            <p className="text-sm mb-10">
              plot FAR, area FAR and incentive FAR
            </p>
            <div>
              <RadarChart />
            </div>
            <div>
              <h2>
                Desirable Net Density (DU/ katha): <span>1.80</span>
              </h2>
              <h2>
                Avg. DU Size (sqft): <span>1.80</span>
              </h2>
              <h2>
                Area FAR: <span>1.80</span>
              </h2>
              <h2>
                Plot FAR : <span>1.80</span>
              </h2>
              <h2>
                MGC in percentage %: <span>1.80</span>
              </h2>
            </div>

            <div className="mt-5 p-10 shadow-md hover:shadow-2xl">
              <h2 className="text-center">
                কার্যকর FAR/ DESIGN FAR <br />
                <span>3.76</span>
              </h2>
              <div className="space-y-2 mt-5 ">
                <h3 htmlFor="">
                  শর্তহীন সর্বোচ্চ ইউনিট সংখ্যা <span>45.16</span>
                </h3>

                <h3 htmlFor="">
                  শর্তাধীন সর্বোচ্চ ইউনিট সংখ্যা (৩০% পর্যন্ত অতিরিক্ত)
                  <span> 45.16</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CalculateForm;