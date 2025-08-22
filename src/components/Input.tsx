interface IInput {
  name?: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLDivElement>;
}

const Input: React.FC<IInput> = ({
  name,
  value,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-full h-fit flex flex-col items-start">
      <p className="text-[#4A7729] font-medium mb-1"> {label} </p>
      <input
        className="w-full outline-none border-2 border-[#F5F5F5] rounded-md py-1.5 p-1 text-sm"
        type="text" 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        />
    </div>
  );
};

export default Input;
