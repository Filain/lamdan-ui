"use client";

import OrderFormComponent from "@/components/OrderFormComponent";
import PaginationComponent from "@/components/PaginationComponent";

export default function Main() {
  return (
    <>
      <OrderFormComponent />
      <br />
      <hr />
      <PaginationComponent />
    </>
  );
}
