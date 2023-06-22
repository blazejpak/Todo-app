import checked from "../assets/images/icon-check.svg";

const RoundCheckbox = ({ active, style }) => {
  return (
    <div
      className={`${
        active ? "bg-gradient-to-r from-[#55DDFF] to-[#C058F3]" : "bg-[#E3E4F1]"
      } caret-transparent h-5 w-5  rounded-full ${style}   p-[1px]`}
    >
      <div
        className={`h-full rounded-full w-full flex justify-center items-center  ${
          active ? "bg-transparent" : "bg-white"
        }`}
      >
        <img src={checked} className={`${active ? "" : "hidden"}`} />
      </div>
    </div>
  );
};

export default RoundCheckbox;
