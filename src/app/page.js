import Image from "next/image";
import { teams } from "./data";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const events = [
  {
    teamName: "Las Vegas Aviators",
    date: "OCT 15",
    time: "04:30 PM",
    day: "Mon",
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
    img: "/images/2.png",
  },
  {
    teamName: "Sacramento River Cats",
    date: "OCT 15",
    time: "04:30 PM",
    day: "Mon",
    place: "Sutter Health Park, Sacramento, California",
    img: "/images/2.png",
  },
  {
    teamName: "Las Vegas Aviators",
    date: "OCT 15",
    time: "04:30 PM",
    day: "Mon",
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
    img: "/images/2.png",
  },
  // {
  //   teamName: "Las Vegas Aviators",
  //   date: "OCT 15",
  //   time: "04:30 PM",
  //   day: "Mon",
  //   place: "Las Vegas Ballpark, Las Vegas, Nevada",
  //   img: "/images/2.png",
  // },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen pt-[100px] flex flex-col justify-center py-8 sm:py-16">
      <div className="ml-[16%] mb-[30px]">
        <h2 className="w-fit text-black text-2xl font-bold border-b-4 border-blue-500 py-3">Sports</h2>
      </div>

      <main className="flex justify-center items-center flex-wrap gap-[14px]">
        {teams.map((team, index) => {
          if (index == 4) {
            return;
          }
          return (
            <div
              key={index}
              className="bg-white  shadow-md p-[10px] relative w-[238px] h-[511px] "
            >
              <div className=" ">
                <img
                  src={team.image}
                  alt={team.teamName}
                  objectFit="contain"
                  className=" h-[365px] w-[218px]"
                />
              </div>
              <div className=" font-[500] text-[17px] text-black mt-[15px]">
                {team.teamName}
              </div>
              <div className="text-sm text-gray-500 flex gap-[40px] items-center bg-[#F7F7F8] p-[11px] mt-[16px]">
                <div>
                  <p className="font-[400] text-[12px]">Total Events</p>
                  <p className="font-[500] text-[14px]">{team.totalEvents}</p>
                </div>
                <div>
                  <p className="font-[400] text-[12px]">Sport</p>
                  <p className="font-[500] text-[14px]">{team.sports}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bg-white  shadow-lg p-[10px] relative w-[238px] h-[511px] ">
          <div className=" ">
            <img
              src={teams[4].image}
              objectFit="contain"
              className=" h-[218px] w-[218px]"
            />
          </div>
          <div className=" font-[500] text-[17px] text-black p-[4px]  mt-[15px]">
            {teams[4].title}
          </div>
          <div className="text-sm text-gray-500 flex gap-[40px] items-center p-[4px] ">
            {teams[4].description}
          </div>
        </div>
      </main>

      <button className="bg-blue-500 w-fit place-self-center mt-[50px] text-white font-bold py-2 px-4 rounded">
        See more
      </button>

      <div className="text-black place-self-center text-center p-[80px] mt-6">
        <h1 className="text-2xl text-[50px] font-[700]">
          Collection Spotlight
        </h1>
        <p className="mt-6">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>

      <div className="flex justify-between gap-32 items-center max-w-[80%] mx-auto">
        <p className="text-black border-blue-600 border-2 p-4">
          <FaChevronLeft className="text-blue-600" />
        </p>
        <main className="flex justify-center items-center flex-wrap gap-[14px]">
          {events.map((team, index) => {
            return (
              <div
                key={index}
                className="bg-white  shadow-2xl  relative w-[257px] h-[625px] overflow-hidden"
              >
                <img
                  src={team.img}
                  alt={team.teamName}
                  objectFit="contain"
                  className="h-[401px] w-[256px]"
                />

                <div className="flex relative -left-2 justify-between items-center mx-auto w-[107%]">
                  <div className="w-[20px] shadow-lg h-[20px] rounded-full bg-[#D9D9D9]"></div>
                  <div className="border-dashed border-gray-400 border-b-2 h-[1px] w-[80%] mx-auto"></div>

                  <div className="w-[20px] h-[20px] rounded-full bg-[#D9D9D9]"></div>
                </div>

                <div className="flex flex-col justify-center items-center mt-[25px] text-black">
                  <h1 className="text-xl font-bold">{team.teamName}</h1>
                  <div className="flex items-center space-x-2 text-center">
                    <p>{team.date}</p>
                    <span>|</span>
                    <p>{team.day}</p>
                    <span>|</span>
                    <p>{team.time}</p>
                  </div>
                  <p className="mt-2 max-w-[80%] text-center">{team.place}</p>

                  <button className="bg-black text-white font-bold py-2 px-4  mt-[20px]">
                    Take Flight Collection
                  </button>
                </div>
              </div>
            );
          })}
        </main>
        <p className="text-black border-blue-600 border-2 p-4">
          <FaChevronRight className="text-blue-600" />
        </p>
      </div>
    </div>
  );
}
