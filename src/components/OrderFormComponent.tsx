"use client";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/form/InputField";
import { Course, CourseFormat, CourseType, Status } from "@/constants/enums";
import { orderValidator } from "@/validators/orderValidator";

export default function OrderFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(orderValidator),
  });
  return (
    <>
      <form onSubmit={handleSubmit(() => console.log("submit"))} className="border-2  p-4 w-[700px]">
        <div className="flex gap-6 ">
          <div className="w-1/2">
            <InputField label="Group" name="group" type="text" register={register} />
            <p className="text-red-500 text-sm h-4">{errors.group?.message ? String(errors.group?.message) : ""}</p>
            <InputField label="Name" name="name" type="text" register={register} />
            <p className="text-red-500 text-sm h-4">{errors.name?.message ? String(errors.name?.message) : ""}</p>
            <InputField label="Surname" name="surname" type="text" register={register} />
            <p className="text-red-500 text-sm h-4">{errors.surname?.message ? String(errors.surname?.message) : ""}</p>
            <InputField label="Email" name="email" type="text" register={register} />
            <p className="text-red-500 text-sm h-4">{errors.email?.message ? String(errors.email?.message) : ""}</p>
            <InputField label="Phone" name="phone" type="text" register={register} />
            <p className="text-red-500 text-sm h-4">{errors.phone?.message ? String(errors.phone?.message) : ""}</p>
            <InputField label="Age" name="age" type="text" register={register} />
            <p className="text-red-500 text-sm h-4">{errors.age?.message ? String(errors.age?.message) : ""}</p>
          </div>
          <div className="w-1/2 ">
            <InputField label="Status" name="status" type="select" options={Status} register={register} />
            <p className="text-red-500 text-sm h-4"></p>
            <InputField label="Sum" name="sum" type="text" register={register} />
            <p className="text-red-500 text-sm h-4">{errors.sum?.message ? String(errors.sum?.message) : ""}</p>
            <InputField label="Already paid" name="alreadyPaid" type="text" register={register} />
            <p className="text-red-500 text-sm h-4">{errors.surname?.message ? String(errors.surname?.message) : ""}</p>
            <InputField label="Course" name="course" type="select" options={Course} register={register} />
            <p className="text-red-500 text-sm h-4"></p>
            <InputField label="Course format" name="courseFormat" type="select" options={CourseFormat} register={register} />
            <p className="text-red-500 text-sm h-4"></p>
            <InputField label="Course type" name="courseType" type="select" options={CourseType} register={register} />
            <p className="text-red-500 text-sm h-4"></p>
          </div>
        </div>
        <div className="flex  justify-end gap-4 ">
          <Button>CLOSE</Button>
          <Button type="submit">SUBMIT</Button>
        </div>
      </form>
    </>
  );
}
