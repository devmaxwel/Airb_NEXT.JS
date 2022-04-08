import React from 'react'
import Image from 'next/image'
import {SearchIcon} from '@heroicons/react/solid'
import { GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon } from '@heroicons/react/solid';
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/dist/client/router'

export default function Header({ placeholder }) {
  const router = useRouter();

  const [searchInput, setSearcInput] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRanges = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const [guests, setGuests] = useState(1);

  const handleCancel = () => {
    setSearcInput("");
  };

  const handleOnchange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const Search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto "
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          alt="logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* center - Search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
          value={searchInput}
          onChange={(e) => setSearcInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto py-2">
          <DateRangePicker
            ranges={[selectionRanges]}
            onChange={handleOnchange}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b shadow-sm mb-6 px-3">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5 px-2 " />
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min={1}
              className="w-12 text-red-400 outline-none pl-2 text-lg"
              type="number"
            />
          </div>
          <div className="flex">
            <button onClick={handleCancel} className="flex-grow">
              Cancel
            </button>
            <button onClick={Search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
