import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoarbol.png';
import Input from '../components/Input';
import { Check } from 'lucide-react';
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
        <div className="text-center">
          <p className="text-lg font-semibold text-[#6BA539] mb-4">
            Usuario registrado con éxito
          </p>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#6BA539] flex items-center justify-center text-white text-2xl font-bold">
            <Check size={24} />
          </div>
          <h2 className="text-xl font-semibold text-[#00674D] mb-2">
            {/* {`${datosParticipante?.nombres} ${datosParticipante?.apellidos}`} */}
          </h2>
          <div className="bg-gray-50 rounded-lg p-4 shadow-inner text-left space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[#00674D] font-medium">Documento:</span>
              {/* <span className="text-gray-700">{datosParticipante?.tipo_documento}-{datosParticipante?.documento}</span> */}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00674D] font-medium">Correo:</span>
              {/* <span className="text-gray-700">{datosParticipante?.correo}</span> */}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00674D] font-medium">Celular:</span>
              {/* <span className="text-gray-700">{datosParticipante?.celular}</span> */}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00674D] font-medium">Dirección:</span>
              {/* <span className="text-gray-700">{datosParticipante?.direccion}-{datosParticipante?.distrito}</span> */}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00674D] font-medium">Es miembro:</span>
              {/* <span className="text-gray-700">{datosParticipante?.es_miembro ? 'Si' : 'No'}</span> */}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00674D] font-medium">Es miembro:</span>
              {/* <span className="text-gray-700">{datosParticipante?.es_miembro ? 'Si' : 'No'}</span> */}
            </div>
          </div>

          {/* Botón */}
          <div className="mt-6">
            <button
              //   onClick={() => setToggleModal(false)}
              className="px-4 py-2 rounded-lg bg-[#00674D] text-white hover:bg-[#00513C] transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosUsuario;
