import { FC } from "react";

interface IAddComma {
  data: string[];
}

const AddComma: FC<IAddComma> = ({ data }) => {
  return (
    <>
      {data?.map((item, i) => (
        <span key={item}>
          {item}
          {data.length - 1 !== i && ", "}
        </span>
      ))}
    </>
  );
};

export default AddComma;
