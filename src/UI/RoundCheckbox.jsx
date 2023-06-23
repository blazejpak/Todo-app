import checked from "../assets/images/icon-check.svg";

const RoundCheckbox = ({ active, style }) => {
  return (
    <div
      className={`${
        active
          ? "bg-gradient-to-r from-[#55DDFF] to-[#C058F3]"
          : "bg-[#E3E4F1] dark:bg-opacity-20"
      } h-5 w-5 rounded-full  caret-transparent ${style}   p-[1px]`}
    >
      <div
        className={`flex h-full w-full items-center justify-center rounded-full  ${
          active ? "bg-transparent" : "bg-white dark:bg-[#25273D]"
        }`}
      >
        <img
          alt="check icon"
          src={checked}
          className={`${active ? "" : "hidden"}`}
        />
      </div>
    </div>
  );
};

export default RoundCheckbox;
