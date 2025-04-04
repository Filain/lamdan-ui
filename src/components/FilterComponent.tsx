"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

import Button from "@/components/ui/Button";
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
    <form>
      <div>
        <InputText {...register("group")} label="Group" />
        <InputText {...register("name")} label="Name" />
        <InputText {...register("surname")} label="Surname" />
        <InputText {...register("email")} label="Email" />
        <InputNumber {...register("phone")} label="Phone" />
        <InputNumber {...register("age")} label="Age" />
        <InputSelect {...register("status")} name="status" label="Status" options={Status} />
        <InputNumber {...register("sum")} label="Sum" />
        <InputNumber {...register("alreadyPaid")} label="Already paid" />
        <InputSelect {...register("course")} name="course" label="Course" options={Course} />
        <InputSelect {...register("courseFormat")} name="courseFormat" label="Course format" options={CourseFormat} />
        <InputSelect {...register("courseType")} name="courseType" label="Course type" options={CourseType} />
      </div>
      <input type="checkbox" {...register("my")} />
      <label> My</label>
      <Button type="submit" onClick={() => reset()} className="" icon={true}>
        <Icons name="refresh" className="w-20 h-20 fill-transparent stroke-white   stroke-1" />
      </Button>
    </form>
  );
}
