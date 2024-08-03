import React, { useState, useEffect } from "react";
import ShareButtons from './ShareButtons';
import BabaGrey from "../assets/img/babaGrey.png";

export default function Tribute() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tributes, setTributes] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [displayCount, setDisplayCount] = useState(5);

  useEffect(() => {
    fetchTributes();
  }, []);

  const fetchTributes = async () => {
    try {
      const response = await fetch(
        "https://tributetookorafor.onrender.com/tributes"
      );
      const data = await response.json();
      setTributes(data);
    } catch (error) {
      console.error("Error fetching tributes:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tributetookorafor.onrender.com/tributes/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, description }),
        }
      );
      if (response.ok) {
        setModalOpen(false);
        fetchTributes();
        setName("");
        setDescription("");
      }
    } catch (error) {
      console.error("Error adding tribute:", error);
    }
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 z-50 flex items-center justify-center w-full h-screen backdrop-blur-lg">
          <div className="w-4/5 h-auto bg-white lg:w-1/2 lg:h-3/4 rounded-2xl p-7">
            <p
              className="text-2xl font-semibold text-right cursor-pointer text-customBrown"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              &times;
            </p>
            <p className="m-3 font-serif text-2xl text-customBrown">
              Leave your Tribute
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="FULL NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full p-2 mx-auto mt-5 text-sm border-2 outline-none border-customGold rounded-xl"
              />
              <textarea
                name="tribute"
                rows="5"
                cols={"50"}
                id="Tribute"
                placeholder="ADD YOUR TRIBUTE TEXT HERE"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full p-2 mx-auto mt-5 text-sm border-2 outline-none border-customGold rounded-xl"
              ></textarea>
              <button
                type="submit"
                className="p-3 mt-4 text-xs font-medium text-white rounded-full bg-customGold"
              >
                PUBLISH TRIBUTE
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="w-full h-full px-10 py-5 bg-orange-50">
        <p className="font-serif text-2xl text-center lg:text-4xl text-customBrown">
          SEND YOUR TRIBUTES
        </p>
        <div className="flex flex-col justify-between h-full px-0 mt-5 lg:h-screen lg:flex-row lg:px-20" id='tributes'>
          <div className="w-full h-full px-2 mr-0 lg:w-2/3 lg:mr-4 lg:overflow-x-hidden lg:overflow-scroll">
            {tributes.slice(0, displayCount).map((data) => {
              return (
                <div
                  key={data.id}
                  className="p-4 px-5 my-3 bg-white border-2 border-customGold rounded-2xl lg:px-10"
                >
                  <h2 className="text-lg font-semibold text-customBrown">
                    {data.name}
                  </h2>
                  <p className="mt-2 text-xs leading-6 opacity-40">
                    {data.description}
                  </p>
                  <ShareButtons tribute={data} />
                </div>
              );
            })}

            {tributes.length > displayCount && (
              <button 
                onClick={() => setDisplayCount(tributes.length)}
                className="block p-3 mx-auto my-4 text-sm text-white rounded-full hover:bg-hoverColor bg-customGold"
              >
                LOAD MORE
              </button>
            )}
          </div>
          <div className="relative w-full p-5 ml-0 font-serif bg-orange-200 rounded-lg lg:w-1/4 lg:ml-4 text-customBrown">
            <p className="text-sm">SERVICE OF SONGS</p>
            <p className="mt-2 text-xs leading-6">
              <span className="font-semibold">3 August 2024</span> <br />
              HIS RESIDENCE <br />
              721 Road, F Close <br />
              Festac Town, Lagos, Nigeria <br />
              5:00 PM - 7:00 PM
            </p>

            <p className="mt-4 text-xs leading-6">
              <span className="font-semibold ">
                16 August 2024 <br />
              </span>
              <span className="font-medium">
                FOURSQUARE GOSPEL <br />
                CHURCH <br />
              </span>
              House 1 (Plot 602A) <br />
              322 Road, E Close Roundabout <br />
              Festac Town, Lagos, Nigeria <br />
              5:00 PM - 7:00 PM
            </p>
            <p className="my-4">FUNERAL SERVICE</p>
            <p className="mb-6 text-xs leading-6 ">
              <span className="font-semibold">
                22 August 2024 <br />
              </span>
              UGO VILLAGE SQUARE <br />
              Arochukwu, Abia State, Nigeria <br />
              11:00 AM
            </p>
            <img
              src={BabaGrey}
              className="absolute right-0 bottom-20 w-5/6 scale-x-[-1]"
            />
            <button
              onClick={() => {
                setModalOpen(true);
              }}
              className="relative z-10 block p-4 mx-auto font-sans text-xs text-white rounded-full bg-customGold hover:bg-hoverColor"
            >
              SEND YOUR TRIBUTE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}