import React from "react";

interface IconProps {
  name: string;
  className?: string;
}

export default function Icons({ name, className = "" }: IconProps) {
  return (
    <svg className={className}>
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}
