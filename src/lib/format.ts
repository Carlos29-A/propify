// Formatear precio a formato de soles peruanos
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
    }).format(price);
}