export interface IParticipante {
  id?: string;
  nombres: string;
  apellidos: string;
  direccion: string;
  distrito: string;
  celular?: string;
  correo?: string;
  es_miembro: boolean;
  asistio: boolean;
  cuenta_fs?: string;
  crear_cuenta_fs?: boolean;
  rol?: string;
}
