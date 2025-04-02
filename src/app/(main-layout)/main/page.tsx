"use client";

import OrdersComponent from "@/components/OrderContainer/OrdersComponent";
import OrderFormComponent from "@/components/OrderFormComponent";
import PaginationComponent from "@/components/PaginationComponent";

export default function Main() {
  return (
    <>
      <OrdersComponent />
      <PaginationComponent />
      <OrderFormComponent />
    </>
  );
}
