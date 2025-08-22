interface IBoton {
  texto: string;
  styles?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Boton: React.FC<IBoton> = ({ texto, styles, disabled, onClick }) => {
  return (
    <div className="w-full">
      {disabled ? (
        <div
          className={`${styles} w-full py-2 px-4 rounded-md font-medium cursor-pointer opacity-70 bg-[#6BA539]`}
        >
          <p className="text-white"> {texto} </p>
        </div>
      ) : (
        <div
          onClick={onClick}
          className={`${styles} w-full py-2 px-4 rounded-md font-medium cursor-pointer hover:bg-[#4A7729] bg-[#6BA539]`}
        >
          <p className="text-white"> {texto} </p>
        </div>
      )}
    </div>
  );
};

export default Boton;
