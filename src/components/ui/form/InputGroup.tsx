"use client";

import { ChangeEvent, FocusEvent, forwardRef, Ref, useState } from "react";

import Button from "@/components/ui/Button";
import { Course } from "@/constants/enums";

interface InputProps {
  label?: string;
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputGroup = forwardRef<HTMLInputElement | HTMLSelectElement, InputProps>(({ label, name, value, onChange, onBlur }, ref) => {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      {label && <label htmlFor={name}>{label}</label>}

      {isSelect ? (
        <select
          name={name}
          ref={ref as Ref<HTMLSelectElement>}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="border p-2 rounded w-full h-10 bg-gray-100 border-none
              focus:outline-green-500 pr-10 focus:bg-gray-100 focus:ring-green-500"
        >
          <option value="">Select...</option>
          {Object.entries(Course).map(([val, text]) => (
            <option key={val} value={val}>
              {text}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          ref={ref as Ref<HTMLInputElement>}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={label}
          className="border p-2 rounded w-full h-10 bg-gray-100 border-none focus:outline-green-500"
        />
      )}

      <div className="flex flex-row justify-between gap-2">
        <Button className="h-6 text-sm p-0 w-full" type="button" onClick={() => setIsSelect(false)}>
          input
        </Button>
        <Button className="h-6 text-sm p-0 w-full" type="button" onClick={() => setIsSelect(true)}>
          select
        </Button>
      </div>
    </div>
  );
});

InputGroup.displayName = "InputGroup";

export default InputGroup;
