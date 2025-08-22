import { CheckCircle2 } from "lucide-react";

export default function Gracias() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8E7] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        
        <CheckCircle2 className="mx-auto text-green-500 w-16 h-16 mb-4" />
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          ¡Registro exitoso!
        </h1>
        <p className="text-gray-600 mb-6">
          Gracias por registrarte.  
          Esperamos tu asistencia el <span className="font-semibold text-[#4A7729]">6 de septiembre</span>  
          a partir de las <span className="font-semibold text-[#4A7729]">4:00 p.m.</span>
        </p>

        <div className="bg-[#d8f3c5] border border-[#6BA539] rounded-xl p-4 text-[#333333] text-sm mb-6">
          <p>
            Este evento será una gran oportunidad para <br />
            fortalecer la unión familiar y reconectarte con tu historia.
          </p>
        </div>

        {/* <a
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-purple-600 text-white font-medium shadow hover:bg-purple-700 transition"
        >
          Volver al inicio
        </a> */}
      </div>
    </div>
  );
}
