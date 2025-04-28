"use client";
import dayjs from "dayjs";

import Button from "@/components/ui/Button";
import Icons from "@/components/ui/Icons";

export default function FooterComponent() {
  return (
    <footer className="flex justify-between items-center min-h-16 bg-green-200">
      <p></p>
      <p className="ml-5 text-2xl font-bold text-green-800 drop-shadow-xl">
        © {dayjs(new Date()).format("YYYY")}
        <span className="italic"> Created by Volodymyr Fylypiv</span>
      </p>
      <div className=" flex flex-row items-center">
        <Button className="mr-5" icon={true}>
          <Icons name="info" className="w-10 h-10 fill-transparent stroke-white  stroke-1.5" />
        </Button>
        <Button className="mr-5" icon={true}>
          <Icons name="github" className="w-10 h-10 fill-transparent stroke-white  stroke-1.5" />
        </Button>
        <Button className="mr-5" icon={true}>
          <Icons name="linkedin" className="w-10 h-10 fill-transparent stroke-white  stroke-1.5" />
        </Button>
      </div>
    </footer>
  );
}
