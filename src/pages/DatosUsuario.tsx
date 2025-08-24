import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoarbol.png';
import { Check, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import type { IParticipante } from '../interfaces/participantes';
import {
    asistenciaParticipante,
  traerDatosParticipante,
  traerParticipantes,
} from '../services/participanteService';

type Participante = {
  id: number;
  nombre: string;
  miembro: boolean;
  crear_cuenta: boolean;
  asistencia: boolean;
};

const DatosUsuario = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [toggleModal, setToggleModal] = useState(false);
  const [loader, setLoader] = useState(true);
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [datosParticipante, setDatosParticipante] = useState<IParticipante>();

  const [currentPage, setCurrentPage] = useState(1);

  const getDatosParticipante = async (id: string) => {
    const participante = await traerDatosParticipante(id);
    setDatosParticipante(participante.data);
    setLoader(false);
  };

  const getDatosParticipantes = async () => {
    const result = await traerParticipantes();
    const participantes = result.data.map((el: IParticipante) => {
      return {
        id: el.id,
        nombre: `${el.nombres} ${el.apellidos}`,
        miembro: el.es_miembro,
        crear_cuenta: el.crear_cuenta_fs,
        asistencia: el.asistio
      };
    });

    setParticipantes(participantes);
  };

  useEffect(() => {
    getDatosParticipantes();
  }, []);

  const filteredData = participantes.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );
  const rowsPerPage = 15;

  // Calcular inicio y fin de los datos de la página actual
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Calcular total de páginas
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Funciones de cambio de página
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const marcarAsistencia = async (id: number) => {
    await asistenciaParticipante(String(id))
    await getDatosParticipante(String(id))
  }

  const verDatosUsuario = async (id: number) => {
    setToggleModal(true);
    await getDatosParticipante(String(id));
  };

  return (
    <div className="w-full h-full bg-[#FFF8E7] flex justify-center">
      <div className="w-full md:w-2xl md:mt-8 gap-2 p-0 md:p-4 h-fit bg-white flex flex-col items-center">
        <div className="w-full flex justify-start">
          <p
            onClick={() => navigate(-1)}
            className="cursor-pointer font-medium text-[#4A7729] hover:text-[#6BA539]"
          >
            {'< Volver'}
          </p>
        </div>

        <div className="w-full p-2 md:w-fit flex gap-4 items-center mb-4">
          <img className="w-12" src={logo} />
          <p className="w-36 text-2xl font-medium leading-none text-[#4A7729]">
            Datos de participante
          </p>
        </div>
        <div className="p-2 md:p-6 max-w-6xl mx-auto">
          <h1 className="text-xl font-bold text-[#00674D] mb-4">
            Participantes Registrados
          </h1>

          <div className="w-full relative mb-6">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por nombre o apellido..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="mb-4 w-full md:w-3/4 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="w-full">
            {/* Tabla */}
            <div className="overflow-x-auto bg-white shadow rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#6BA539] text-white">
                  <tr>
                    <th className="py-2 px-4">Nombre</th>
                    <th className="py-2 px-4 hidden md:table-cell">Miembro</th>
                    <th className="py-2 px-4 hidden md:table-cell">
                      Cuenta FS
                    </th>
                    <th className="py-2 px-4 hidden md:table-cell">
                      Asistencia
                    </th>
                    <th className="py-2 px-4">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.length > 0 ? (
                    currentRows.map((p, i) => (
                      <tr
                        key={p.id}
                        className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="py-2 px-4">{p.nombre}</td>
                        <td className="py-2 px-4 hidden md:table-cell">
                          {p.miembro ? (
                            <Check color="#6BA539" />
                          ) : (
                            <X color="red" />
                          )}
                        </td>
                        <td className="py-2 px-4 hidden md:table-cell">
                          {p.crear_cuenta ? (
                            <Check color="#6BA539" />
                          ) : (
                            <X color="red" />
                          )}
                        </td>
                        <td className="py-2 px-4 hidden md:table-cell">
                          {p.asistencia ? (
                            <Check color="#6BA539" />
                          ) : (
                            <X color="red" />
                          )}
                        </td>
                        <td className="py-2 px-4">
                          <button
                            onClick={() => verDatosUsuario(p.id)}
                            className="px-3 py-1 cursor-pointer bg-[#6BA539] text-white rounded-lg hover:bg-[#4A7729]"
                          >
                            Ver
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center py-4 text-gray-500 italic"
                      >
                        No se encontraron resultados
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-4">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                >
                  Anterior
                </button>

                <span className="px-4 py-1 text-gray-700">
                  Página {currentPage} de {totalPages}
                </span>

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                >
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
        <Modal
          isOpen={toggleModal}
          onClose={() => {
            setToggleModal(false);
            setLoader(true);
          }}
        >
          <div className="text-center">
            <p className="text-lg font-semibold text-[#6BA539] mb-4">
              Datos de Participante
            </p>
            {loader ? (
              <div>
                <p>Cargando...</p>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold text-[#00674D] mb-2">
                  {`${datosParticipante?.nombres} ${datosParticipante?.apellidos}`}
                </h2>
                <div className="bg-gray-50 rounded-lg p-4 shadow-inner text-left space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#00674D] font-medium">Correo:</span>
                    <span className="text-gray-700">
                      {datosParticipante?.correo}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00674D] font-medium">Celular:</span>
                    <span className="text-gray-700">
                      {datosParticipante?.celular}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00674D] font-medium">
                      Dirección:
                    </span>
                    <span className="text-gray-700">
                      {datosParticipante?.direccion} - {datosParticipante?.distrito}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00674D] font-medium">
                      Es miembro:
                    </span>
                    <span className="text-gray-700">
                      {datosParticipante?.es_miembro ? 'Si' : 'No'}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00674D] font-medium">
                      Crear cuenta FS:
                    </span>
                    <span className="text-gray-700">
                      {datosParticipante?.crear_cuenta_fs ? 'Si' : 'No'}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
                    <div className="flex items-start gap-3">
                      <span className="text-[#00674D] font-medium">
                        Asistencia:
                      </span>
                      <span className="text-gray-700">
                        {datosParticipante?.asistio ? 'Si' : 'No'}
                      </span>
                    </div>
                    {!datosParticipante?.asistio && (
                      <button
                        onClick={() => marcarAsistencia(Number(datosParticipante?.id))}
                        className="px-4 cursor-pointer py-1 rounded-lg bg-[#4A7729] text-white hover:bg-[#6BA539] transition"
                      >
                        Marcar Asistencia
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6">
              <button
                onClick={() => {
                  setToggleModal(false);
                  setLoader(true);
                }}
                className="px-4 cursor-pointer py-2 rounded-lg bg-[#4A7729] text-white hover:bg-[#6BA539] transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DatosUsuario;
