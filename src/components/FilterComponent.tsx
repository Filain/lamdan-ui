"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

import Button from "@/components/ui/Button";
import InputCheckBox from "@/components/ui/form/InputCheckBox";
import InputNumber from "@/components/ui/form/InputNumber";
import { InputSelect } from "@/components/ui/form/InputSelect";
import InputText from "@/components/ui/form/InputText";
import Icons from "@/components/ui/Icons";
import { Course, CourseFormat, CourseType, Status } from "@/constants/enums";

export default function FilterComponent() {
  const { control, register, reset } = useForm();

  const router = useRouter();
  const searchParams = useSearchParams();
  const watchedValues = useWatch({
    control,
  });

  useEffect(() => {
    console.log("Watched values:", watchedValues);
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(watchedValues).forEach(([key, value]) => {
      if (value) {
        params.set(key, String(value));
      } else {
        params.delete(key);
      }
    });

    router.push(`?${params.toString()}`);
  }, [watchedValues]);

  return (
    <form className="border-2 flex flex-row justify-center align-middle  gap-2 p-4">
      <div>
        <div className="flex gap-2 px-2">
          <InputText {...register("group")} label="Group" />
          <InputText {...register("name")} label="Name" />
          <InputText {...register("surname")} label="Surname" />
          <InputText {...register("email")} label="Email" />
          <InputNumber {...register("phone")} label="Phone" />
          <InputNumber {...register("age")} label="Age" />
        </div>
        <div className="flex gap-2 px-2">
          <InputSelect {...register("status")} name="status" label="Status" options={Status} />
          <InputNumber {...register("sum")} label="Sum" />
          <InputNumber {...register("alreadyPaid")} label="Already paid" />
          <InputSelect {...register("course")} name="course" label="Course" options={Course} />
          <InputSelect {...register("courseFormat")} name="courseFormat" label="Course format" options={CourseFormat} />
          <InputSelect {...register("courseType")} name="courseType" label="Course type" options={CourseType} />
        </div>
      </div>
      <InputCheckBox label="My" {...register("my")} />
      <Button type="submit" onClick={() => reset()} className="w-10 h-10" icon={true}>
        <Icons name="refresh" className="w-8 h-8 fill-transparent stroke-white   stroke-1" />
      </Button>
    </form>
  );
}
