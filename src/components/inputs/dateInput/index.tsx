import { UseFormRegisterReturn } from "react-hook-form";
import "./DateInput.scss";
import { FC } from "react";

interface IDateInput {
  register: UseFormRegisterReturn;
}

const DateInput: FC<IDateInput> = ({ register }) => <input type="date" className="dateInput" {...register} />;

export default DateInput;
