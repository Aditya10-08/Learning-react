import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import SkeletonCard from "./components/SkeletonCard";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  // Pagination range
  const getPages = () => {
    const pages = [];
    const start = Math.max(1, index - 1);
    const end = index + 2;

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="bg-zinc-900 h-screen text-white p-5 overflow-auto">
      
      {/* Cards */}
      <div className="flex flex-wrap gap-4 p-2">
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : userData.map((elem) => (
              <Card key={elem.id} elem={elem} />
            ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center p-4 gap-3">
        
        {/* Prev */}
        <button
          disabled={index === 1}
          onClick={() => setIndex((prev) => prev - 1)}
          className="bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white active:scale-95 rounded px-4 py-2 font-semibold cursor-pointer"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {getPages().map((page) => (
          <button
            key={page}
            onClick={() => page !== index && setIndex(page)}
            className={`px-4 py-2 rounded font-semibold transition
              ${
                page === index
                  ? "bg-white text-black cursor-not-allowed pointer-events-none opacity-80"
                  : "bg-zinc-700 text-white hover:bg-zinc-600 cursor-pointer"
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className="bg-blue-800 text-white active:scale-95 rounded px-4 py-2 font-semibold cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
