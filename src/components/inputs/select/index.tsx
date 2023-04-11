import { UseFormRegisterReturn } from "react-hook-form";
import "./Select.scss";
import { FC } from "react";

interface ISelect {
  register: UseFormRegisterReturn;
}

const Select: FC<ISelect> = ({ register }) => {
  return (
    <select className="select" {...register}>
      <option>Open Source</option>
      <option>Mobile</option>
      <option>Java</option>
      <option>Software Engineering</option>
      <option>Internet</option>
      <option>Web Development</option>
    </select>
  );
};

export default Select;
