import { AppButtonInterface } from "../../Interfaces/AppButtonInterface";

function AppButton({ onClick, width }: AppButtonInterface) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold w-${width} py-2 px-4 rounded-full`}
    >
      Button
    </button>
  );
}

export default AppButton;
