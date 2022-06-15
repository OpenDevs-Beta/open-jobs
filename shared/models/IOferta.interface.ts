export type IOferta = {
  id: number,
  nombre: string,
  descripcion: string, 
  ubicacion: string,
  experiencia: string,
  presencialidad: string,
  estado: string,
  publicada: boolean,
  salarioMin: number,
  salarioMax: number,
  vacantes: number,
  empresaId: number,
  createdAt: Date,
  updatedAt: Date,
  habilidades: Object[],
  empresa: Object
}