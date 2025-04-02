"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import OrderComponent from "@/components/OrderContainer/OrderComponent";
import { orderService } from "@/services/orderService";
import { useOrderStore } from "@/store/useOrderStore";
import Loading from "@/app/loading";

export default function OrdersComponent() {
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "id";
  const page = searchParams.get("page") || "1";

  const { setTotal } = useOrderStore();

  const { data, isPending, error } = useQuery({
    queryKey: ["orders", page, currentSort],
    queryFn: () => orderService.getAll({ page, sort: currentSort }),
  });

  useEffect(() => {
    setTotal(data?.total || 0);
  }, [data, setTotal]);

  const router = useRouter();

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
    return <Loading />;
  }
  return (
    <>
      <div className="flex gap-2 bg-green-800 text-white">
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("_id")}
        >
          Id{getSortIcon("id")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("name")}
        >
          Name{getSortIcon("name")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("surname")}
        >
          Surname{getSortIcon("surname")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("email")}
        >
          Email{getSortIcon("email")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("phone")}
        >
          Phone{getSortIcon("phone")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("age")}
        >
          Age{getSortIcon("age")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("course")}
        >
          Course{getSortIcon("course")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12 "
          onClick={() => handleSortClick("course_format")}
        >
          Course format{getSortIcon("course_format")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("course_type")}
        >
          Course type{getSortIcon("course_type")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("sum")}
        >
          Sum{getSortIcon("sum")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("alreadyPaid")}
        >
          Already Paid{getSortIcon("alreadyPaid")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("created_at")}
        >
          Created At{getSortIcon("created_at")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("status")}
        >
          Status{getSortIcon("status")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("group")}
        >
          Group{getSortIcon("group")}
        </div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-85 w-1/12"
          onClick={() => handleSortClick("manager")}
        >
          Manager{getSortIcon("manager")}
        </div>
      </div>
      {data?.data.map((order, index) => <OrderComponent key={order._id} order={order} isDark={index % 2 === 0} />)}
    </>
  );
}
