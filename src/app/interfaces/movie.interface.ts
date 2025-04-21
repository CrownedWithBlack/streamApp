//Esta interface ayuda a manejar el tipado de datos cuando se llama al servicio load-data.service.ts
export interface Movie{
    title: string;
    review: string;
    titleID: number;
    path: string;
}