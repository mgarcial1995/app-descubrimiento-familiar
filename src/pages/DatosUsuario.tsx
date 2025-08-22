import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoarbol.png';
import Input from '../components/Input';
// import Select from 'react-select/base';

const DatosUsuario = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-[#FFF8E7] flex justify-center">
      <div className="w-full md:w-2xl md:mt-8 gap-2 p-4 h-fit bg-white flex flex-col items-center">
        <div className="w-full flex justify-start">
          <p
            onClick={() => navigate(-1)}
            className="cursor-pointer font-medium text-[#4A7729] hover:text-[#6BA539]"
          >
            {'< Volver'}
          </p>
        </div>
        <div className="w-full md:w-fit flex gap-4 items-center mb-4">
          <img className="w-12" src={logo} />
          <p className="w-36 text-2xl font-medium leading-none text-[#4A7729]">
            Buscar participante
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="w-2/6 flex flex-col md:w-1/2">
              <p className="text-[#4A7729] font-medium mb-1">
                Tipo de Documento
              </p>
              {/* <Select
                className="basic-single w-full"
                classNamePrefix="select"
                isSearchable
                name="tipo_doc"
                onChange={()=>{}}
                value={{
                  label: participante.tipo_doc || '',
                  value: participante.tipo_doc || '',
                }}
                options={[
                    { label:"Documento", value: "dni" },
                    { label:"Nombre", value: "nombre" },
                ]}
              /> */}
            </div>
            <div className="w-4/6">
              <Input
                label="Nro. documento"
                name="documento"
                value={''}
                // onChange={handleChangeCampos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosUsuario;
