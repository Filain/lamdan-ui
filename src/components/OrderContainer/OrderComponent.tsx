"use client";

import dayjs from "dayjs";

import { IOrder } from "@/services/orderService";

interface IOrderProps {
  order: IOrder;
  isDark: boolean;
}

export default function OrderComponent({ order, isDark }: IOrderProps) {
  const {
    _id,
    name,
    surname,
    email,
    phone,
    age,
    course,
    course_format,
    course_type,
    sum,
    already_paid,
    created_at,
    status,
    group,
    manager,
  } = order;

  return (
    // <div className="flex flex-row gap-2 ">
    <div className={`flex flex-row  gap-2 ${isDark ? "bg-gray-400" : "bg-white"}`}>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{_id}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{name}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{surname}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{email}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{phone}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default text-center">{age}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default text-center">{course}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default text-center">{course_format}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default text-center">{course_type}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default text-center">{sum}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default text-center">{already_paid}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default text-center">
        {dayjs(created_at).format("DD.MM.YYYY")}
      </p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default  text-center">{status}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default  text-center">{group}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default  text-center">{manager}</p>
    </div>
  );
}
