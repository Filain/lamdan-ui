"use client";

import FilterComponent from "@/components/FilterComponent";
import OrdersComponent from "@/components/OrderContainer/OrdersComponent";
import PaginationComponent from "@/components/PaginationComponent";

export default function Main() {
  return (
    <>
      <FilterComponent />
      <OrdersComponent />
      <PaginationComponent />
    </>
  );
}
