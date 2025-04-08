"use client";

import FilterComponent from "@/components/FilterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import OrdersComponent from "@/components/OrderContainer/OrdersComponent";
import PaginationComponent from "@/components/PaginationComponent";

export default function Main() {
  return (
    <>
      <HeaderComponent />
      <FilterComponent />
      <OrdersComponent />
      <PaginationComponent />
    </>
  );
}
