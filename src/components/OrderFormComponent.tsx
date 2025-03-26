"use client";
import { useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/form/InputField";
import { Status } from "@/constants/enums";

export default function OrderFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: joiResolver(),
  });
  return (
    <>
      <form onSubmit={handleSubmit(() => console.log("submit"))} className="flex flex-col border-2 w-[400px] p-4">
        <div>
          <InputField label="Name" name="name" type="select" options={Status} register={register} />
          {errors.name?.message && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}
        </div>
        <Button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          SUBMIT
        </Button>
        <Button>CLOSE</Button>
      </form>
    </>
  );
}
