import { useState } from "react";

interface ISwitcher {
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const Switcher = ({ checked = false, onChange }: ISwitcher) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default Switcher;
