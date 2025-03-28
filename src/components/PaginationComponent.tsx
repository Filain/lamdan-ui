"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function PaginationComponent() {
  return (
    <div>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >{`<`}</button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >
        1
      </button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >
        2
      </button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >
        3
      </button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >
        4
      </button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >
        5
      </button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >
        6
      </button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >
        7
      </button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >
        8
      </button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >
        9
      </button>
      <button
        className="text-lg mb-1  bg-green-700 text-white px-6 py-2 rounded-4xl
      transition-all duration-200 active:scale-95 hover:bg-green-800"
      >{`>`}</button>
    </div>
  );
}
