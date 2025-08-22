export interface IParticipante {
  nombres: string;
  apellidos: string;
  tipo_documento: string;
  documento: string;
  direccion: string;
  distrito: string;
  celular?: string;
  correo?: string;
  es_miembro: boolean;
  cuenta_fs?: string;
  rol?: string;
}
