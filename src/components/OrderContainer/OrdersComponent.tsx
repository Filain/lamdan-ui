"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

import OrderComponent from "@/components/OrderContainer/OrderComponent";
import { orderService } from "@/services/orderService";

export default function OrdersComponent() {
  const { data, isPending, error } = useQuery({ queryKey: ["orders"], queryFn: () => orderService.getAll() });
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort");
  const page = searchParams.get("page") || "1";

  const getSortIcon = (key: string) => {
    if (currentSort === key) return " 🠟";
    if (currentSort === `-${key}`) return " 🠝";
    return "";
  };

  const handleSortClick = (key: string) => {
    const newSort = currentSort === key ? `-${key}` : key;

    // Створення нових параметрів запиту
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("sort", newSort);
    newParams.set("page", page);

    // Оновлення URL
    router.push(`?${newParams.toString()}`);
  };

  if (error) {
    return <span>Error: {error.message}</span>;
  }
  if (isPending) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <div className="flex gap-2 bg-green-800 text-white">
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("id")}
        >
          Id{getSortIcon("id")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("name")}
        >
          Name{getSortIcon("name")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("surname")}
        >
          Surname{getSortIcon("surname")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("email")}
        >
          Email{getSortIcon("email")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("phone")}
        >
          Phone{getSortIcon("phone")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("age")}
        >
          Age{getSortIcon("age")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("course")}
        >
          Course{getSortIcon("course")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("course_format")}
        >
          Course format{getSortIcon("course_format")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("course_type")}
        >
          Course type{getSortIcon("course_type")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("sum")}
        >
          Sum{getSortIcon("sum")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("alreadyPaid")}
        >
          Already Paid{getSortIcon("alreadyPaid")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("created_at")}
        >
          Created At{getSortIcon("created_at")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("status")}
        >
          Status{getSortIcon("status")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("group")}
        >
          Group{getSortIcon("group")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-[120px] border-2"
          onClick={() => handleSortClick("manager")}
        >
          Manager{getSortIcon("manager")}
        </div>
      </div>
      {data?.data.map((order, index) => <OrderComponent key={order._id} order={order} isDark={index % 2 === 0} />)}
    </>
  );
}
