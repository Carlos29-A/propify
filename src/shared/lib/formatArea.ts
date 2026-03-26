// Formatear área a formato de metros cuadrados
export const formatArea = (area: number) => {
    const value = new Intl.NumberFormat("es-PE").format(area);
    return `${value} m²`;
}