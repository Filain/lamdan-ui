"use client";

import FilterComponent from "@/components/FilterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import OrdersComponent from "@/components/OrderContainer/OrdersComponent";
import PaginationComponent from "@/components/PaginationComponent";
import Button from "@/components/ui/Button";
import Icons from "@/components/ui/Icons";

export default function Main() {
  return (
    <>
      <HeaderComponent />
      <FilterComponent />
      <OrdersComponent />
      <PaginationComponent />
      <Button className="" icon={true}>
        <Icons name="download" className="w-10 h-10 fill-transparent stroke-white   stroke-2" />
      </Button>

      <Button className="" icon={true}>
        <Icons name="refresh" className="w-20 h-20 fill-transparent stroke-white   stroke-1" />
      </Button>
      <Button className="" icon={true}>
        <Icons name="download" className="w-20 h-20 fill-transparent stroke-white   stroke-2" />
      </Button>
    </>
  );
}
