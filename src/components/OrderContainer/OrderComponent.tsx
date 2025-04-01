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
    <div className={`flex flex-row gap-2 ${isDark ? "bg-gray-400" : "bg-white"}`}>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{_id}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{name}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{surname}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{email}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{phone}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{age}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{course}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{course_format}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{course_type}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{sum}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{already_paid}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{created_at}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{status}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{group}</p>
      <p className="w-[120px] border-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">{manager}</p>
    </div>
  );
}
