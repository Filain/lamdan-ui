"use client";

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
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{age}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{course}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{course_format}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{course_type}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{sum}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{already_paid}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{created_at}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{status}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{group}</p>
      <p className="w-1/12 truncate overflow-hidden text-ellipsis whitespace-nowrap cursor-default">{manager}</p>
    </div>
  );
}
