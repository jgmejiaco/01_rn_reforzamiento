
export const Funciones = () => {

    const sumar = (a:number, b:number):number => {
        return a + b;
    }

    // ====================================

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de la suma es: { sumar(6,9) }</span>
        </>
    )
}
