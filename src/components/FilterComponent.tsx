"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";

import Button from "@/components/ui/Button";
import InputCheckBox from "@/components/ui/form/InputCheckBox";
import InputNumber from "@/components/ui/form/InputNumber";
import { InputSelect } from "@/components/ui/form/InputSelect";
import InputText from "@/components/ui/form/InputText";
import Icons from "@/components/ui/Icons";
import { Course, CourseFormat, CourseType, Statuses } from "@/constants/enums";
import { IFormData } from "@/interfaces/orderInterface";
import { exelService } from "@/services/exelService";

export default function FilterComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const currentSort = searchParams.get("sort") || "id";
  const my = searchParams.get("my") === "true";
  const group = searchParams.get("group") || undefined;
  const name = searchParams.get("name") || undefined;
  const surname = searchParams.get("surname") || undefined;
  const email = searchParams.get("email") || undefined;
  const phone = searchParams.get("phone") || undefined;
  const age = searchParams.get("age") || undefined;
  const status = searchParams.get("status") || undefined;
  const sum = searchParams.get("sum") || undefined;
  const already_paid = searchParams.get("alreadyPaid") || undefined;
  const course = searchParams.get("course") || undefined;
  const course_format = searchParams.get("courseFormat") || undefined;
  const course_type = searchParams.get("courseType") || undefined;

  const page = searchParams.get("page") || "1";

  const sortParams = [currentSort, group, name, surname, email, phone, age, status, sum, already_paid, course, course_format, course_type]
    .filter(Boolean)
    .join(",");

  const { control, register, reset } = useForm<IFormData>({
    defaultValues: {
      group: group ?? undefined,
      name: name ?? undefined,
      surname: surname ?? undefined,
      email: email ?? undefined,
      phone: phone ?? undefined,
      age: age ? Number(age) : undefined,
      status: status ?? undefined,
      sum: sum ? Number(sum) : undefined,
      already_paid: already_paid ? Number(already_paid) : undefined,
      course: course ?? undefined,
      course_format: course_format ?? undefined,
      course_type: course_type ?? undefined,
      my,
    },
  });
  const watchedValues = useWatch<IFormData>({
    control,
  });

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current); // очищає попередній таймер
    }

    debounceTimeout.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      let filtersChanged = false;

      (Object.entries(watchedValues) as [keyof IFormData, unknown][]).forEach(([key, value]) => {
        const paramKey = String(key);
        const prevValue = searchParams.get(paramKey);
        const newValue = value !== undefined && value !== null && value !== "" ? String(value) : null;

        if (paramKey !== "page" && newValue !== prevValue) {
          filtersChanged = true;
        }

        if (newValue !== null) {
          params.set(paramKey, newValue);
        } else {
          params.delete(paramKey);
        }
      });

      if (filtersChanged) {
        params.set("page", "1");
      }

      const newUrl = `?${params.toString()}`;
      if (`?${searchParams.toString()}` !== newUrl) {
        router.push(newUrl);
      }
    }, 500); // 500ms затримка
  }, [watchedValues, router, searchParams]);

  const downloadExcel = async () => {
    await exelService.getAll({
      page,
      sort: sortParams,
      group,
      name,
      surname,
      email,
      phone,
      age,
      status,
      sum,
      already_paid,
      course,
      course_format,
      course_type,
      my,
    });
  };

  return (
    <form className=" flex flex-row justify-center items-center  gap-2 p-4">
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
          <InputSelect {...register("status")} name="status" label="Status" options={Statuses} />
          <InputNumber {...register("sum")} label="Sum" />
          <InputNumber {...register("already_paid")} name="already_paid" label="Already paid" />
          <InputSelect {...register("course")} name="course" label="Course" options={Course} />
          <InputSelect {...register("course_format")} name="course_format" label="Course format" options={CourseFormat} />
          <InputSelect {...register("course_type")} name="course_type" label="Course type" options={CourseType} />
        </div>
      </div>
      <InputCheckBox label="My" {...register("my")} />
      <Button
        type="submit"
        onClick={() => {
          reset();
          router.push("?page=1");
        }}
        className="w-10 h-10"
        icon={true}
      >
        <Icons name="refresh" className="w-8 h-8 fill-transparent stroke-white   stroke-1" />
      </Button>
      <Button type="button" onClick={() => downloadExcel()} className="w-10 h-10" icon={true}>
        <Icons name="download" className="w-8 h-8 fill-transparent stroke-white   stroke-2" />
      </Button>
    </form>
  );
}
