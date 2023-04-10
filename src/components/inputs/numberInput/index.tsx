import { ChangeEvent, FC, useState } from "react";
import { ReactComponent as CloseIcon } from "assets/close.svg";
import "./NumberInput.scss";

const NumberInput: FC = () => {
  const [value, setValue] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleClearSearch = () => setValue("");

  return (
    <div className="numberInput">
      <input
        autoComplete="off"
        className="numberInput_input"
        onChange={handleOnChange}
        placeholder="Search books..."
        type="number"
        value={value}
      />
      {value.length > 0 && <CloseIcon className="numberInput_clear_icon" onClick={handleClearSearch} />}
    </div>
  );
};

export default NumberInput;
