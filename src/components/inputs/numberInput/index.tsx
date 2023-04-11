import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import "./NumberInput.scss";

interface INumberInput {
  register: UseFormRegisterReturn;
}

const NumberInput: FC<INumberInput> = ({ register }) => (
  <input autoComplete="off" className="numberInput" placeholder="Search price..." type="number" {...register} />
);

export default NumberInput;
