import { UseFormRegisterReturn } from "react-hook-form";
import "./Select.scss";
import { FC } from "react";

interface ISelect {
  register: UseFormRegisterReturn;
  options: { id: number; name: string }[];
}

const Select: FC<ISelect> = ({ register, options }) => {
  return (
    <select className="select" {...register}>
      {options?.map(({ name, id }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
