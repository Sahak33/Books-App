import { FC, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ReactComponent as CloseIcon } from "assets/close.svg";
import "./NumberInput.scss";

interface INumberInput {
  register: UseFormRegisterReturn;
}

const NumberInput: FC<INumberInput> = ({ register }) => {
  const [value, setValue] = useState<string>("");
  const handleClearSearch = () => setValue("");

  return (
    <div className="numberInput">
      <input autoComplete="off" className="numberInput_input" placeholder="Search price..." type="number" {...register} />
      {value.length > 0 && <CloseIcon className="numberInput_clear_icon" onClick={handleClearSearch} />}
    </div>
  );
};

export default NumberInput;
