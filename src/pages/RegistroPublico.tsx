/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '../components/Input';
import logo from '../assets/logoarbol.png';
import Switcher from '../components/Switcher';
import Select from 'react-select';
import { useState } from 'react';
import Boton from '../components/Boton';
import { useNavigate } from 'react-router-dom';
import { registrarParticipante } from '../services/participanteService';
import type { AxiosError } from 'axios';

const RegistrarUsuario = () => {
  const navigate = useNavigate();
  const datosinit = {
    tipo_documento: '',
    documento: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    celular: '',
    correo: '',
    distrito: '',
    es_miembro: false,
    asistio: false,
    crear_cuenta_fs: false,
  };

  const [participante, setParticipante] = useState(datosinit);
  const [butonState, setButonState] = useState(false);
  const [textoBoton, setTextoBotone] = useState('Registrarme');

  const distritos = [
    { label: 'Ancón', value: 'Ancón' },
    { label: 'Ate', value: 'Ate' },
    { label: 'Barranco', value: 'Barranco' },
    { label: 'Breña', value: 'Breña' },
    { label: 'Carabayllo', value: 'Carabayllo' },
    { label: 'Chaclacayo', value: 'Chaclacayo' },
    { label: 'Chorrillos', value: 'Chorrillos' },
    { label: 'Cieneguilla', value: 'Cieneguilla' },
    { label: 'Comas', value: 'Comas' },
    { label: 'El Agustino', value: 'El Agustino' },
    { label: 'Independencia', value: 'Independencia' },
    { label: 'Jesús María', value: 'Jesús María' },
    { label: 'La Molina', value: 'La Molina' },
    { label: 'La Victoria', value: 'La Victoria' },
    { label: 'Lima', value: 'Lima' },
    { label: 'Lince', value: 'Lince' },
    { label: 'Los Olivos', value: 'Los Olivos' },
    { label: 'Lurigancho', value: 'Lurigancho' },
    { label: 'Lurín', value: 'Lurín' },
    { label: 'Magdalena del Mar', value: 'Magdalena del Mar' },
    { label: 'Miraflores', value: 'Miraflores' },
    { label: 'Pachacámac', value: 'Pachacámac' },
    { label: 'Pucusana', value: 'Pucusana' },
    { label: 'Pueblo Libre', value: 'Pueblo Libre' },
    { label: 'Puente Piedra', value: 'Puente Piedra' },
    { label: 'Punta Hermosa', value: 'Punta Hermosa' },
    { label: 'Punta Negra', value: 'Punta Negra' },
    { label: 'Rímac', value: 'Rímac' },
    { label: 'San Bartolo', value: 'San Bartolo' },
    { label: 'San Borja', value: 'San Borja' },
    { label: 'San Isidro', value: 'San Isidro' },
    { label: 'San Juan de Lurigancho', value: 'San Juan de Lurigancho' },
    { label: 'San Juan de Miraflores', value: 'San Juan de Miraflores' },
    { label: 'San Luis', value: 'San Luis' },
    { label: 'San Martín de Porres', value: 'San Martín de Porres' },
    { label: 'San Miguel', value: 'San Miguel' },
    { label: 'Santa Anita', value: 'Santa Anita' },
    { label: 'Santa María del Mar', value: 'Santa María del Mar' },
    { label: 'Santa Rosa', value: 'Santa Rosa' },
    { label: 'Santiago de Surco', value: 'Santiago de Surco' },
    { label: 'Surquillo', value: 'Surquillo' },
    { label: 'Villa El Salvador', value: 'Villa El Salvador' },
    { label: 'Villa María del Triunfo', value: 'Villa María del Triunfo' },
    { label: 'Otro', value: 'Otro' },
  ];

  const tipoDoc = [
    { label: 'DNI', value: 'DNI' },
    { label: 'C.E.', value: 'C.E.' },
    { label: 'Otro', value: 'Otro' },
  ];

  const handleChangeCampos = (e: any) => {
    const { name, type, value, checked } = e.target;

    setParticipante((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleChangeSelect = (selectedOption: any, { name }: any) => {
    setParticipante((prev) => ({
      ...prev,
      [name]: selectedOption.value,
    }));
  };

  const guardarDatos = async () => {
    setButonState(true);
    setTextoBotone('Guardando...');
    try {
      const result = await registrarParticipante(participante);
      console.log(result);
      if (result.success) {
        setButonState(false);
        setTextoBotone('Registrarme');
        navigate('/gracias');
      } else {
        alert(result.message);
        setButonState(false);
        setTextoBotone('Registrarme');
      }
    } catch (err: unknown) {
      const error = err as AxiosError<{ message: string }>;
      if (error.response) {
        alert('⚠️ ' + error.response.data.message);
        setButonState(false);
        setTextoBotone('Registrarme');
      } else {
        alert('Error de red: ' + error.message);
        setButonState(false);
        setTextoBotone('Registrarme');
      }
    }
  };

  const isFormValid = () => {
    return (
      participante.tipo_documento.trim() !== '' &&
      participante.documento.trim() !== '' &&
      participante.nombres.trim() !== '' &&
      participante.apellidos.trim() !== '' &&
      participante.distrito.trim() !== '' &&
      participante.direccion.trim() !== ''
    );
  };

  return (
    <div className="w-full h-full bg-[#FFF8E7] flex justify-center">
      <div className="w-full md:w-2xl md:mt-8 gap-2 p-4 h-fit bg-white flex flex-col items-center">
        <div className="w-full md:w-fit flex gap-4 items-center">
          <img className="w-12" src={logo} />
          <p className="w-full text-2xl font-medium leading-none text-[#4A7729]">
            Descubrimiento Familiar
            <br></br>
            Regístrate y disfruta
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-2xl mb-6">
          <h2 className="text-xl font-bold text-purple-700 mb-3">
            Cuatro grandes razones para conectarte con tu historia
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Construye tu árbol genealógico</li>
            <li>✅ Explora el origen de tus apellidos</li>
            <li>✅ Reflexiona sobre el valor de las familias</li>
            <li>✅ Llévate tu árbol familiar impreso</li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="w-full flex flex-col md:w-1/2">
              <p className="text-[#4A7729] font-medium mb-1">
                Tipo de Documento
              </p>
              <Select
                className="basic-single w-full"
                classNamePrefix="select"
                isSearchable
                name="tipo_documento"
                onChange={handleChangeSelect}
                value={{
                  label: participante.tipo_documento || '',
                  value: participante.tipo_documento || '',
                }}
                options={tipoDoc}
              />
            </div>
            <div className="w-full md:w-1/2">
              <Input
                label="Nro. documento"
                name="documento"
                value={participante.documento}
                onChange={handleChangeCampos}
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2">
            <Input
              label="Nombres"
              name="nombres"
              value={participante.nombres}
              onChange={handleChangeCampos}
            />
            <Input
              label="Apellidos"
              name="apellidos"
              value={participante.apellidos}
              onChange={handleChangeCampos}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full flex flex-col ">
              <p className="text-[#4A7729] font-medium mb-1">Distrito</p>
              <Select
                className="basic-single w-"
                classNamePrefix="select"
                isSearchable
                name="distrito"
                onChange={handleChangeSelect}
                value={{
                  label: participante.distrito || '',
                  value: participante.distrito || '',
                }}
                options={distritos}
              />
            </div>
            <Input
              label="Dirección"
              name="direccion"
              value={participante.direccion}
              onChange={handleChangeCampos}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Input
              label="Celular"
              name="celular"
              value={participante.celular}
              onChange={handleChangeCampos}
            />
            <Input
              label="Correo"
              name="correo"
              value={participante.correo}
              onChange={handleChangeCampos}
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="w-full">
              <p className="text-[#4A7729] font-medium mb-4">
                ¿Es miembro SUD?
              </p>
              <Switcher
                checked={participante.es_miembro}
                onChange={(e) =>
                  setParticipante({ ...participante, es_miembro: e })
                }
              />
            </div>
            <div className="w-full">
              <p className="text-[#4A7729] font-medium mb-4">
                ¿Desea crear una cuenta en Family Search?
              </p>
              <Switcher
                checked={participante.crear_cuenta_fs}
                onChange={(e) =>
                  setParticipante({ ...participante, crear_cuenta_fs: e })
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-4">
          <Boton
            styles="text-center "
            onClick={() => guardarDatos()}
            texto={textoBoton}
            disabled={!isFormValid() || butonState}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrarUsuario;
