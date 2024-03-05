interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

// =================================================

interface Direccion {
    pais: string,
    casaNo: number,
}

// =================================================

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Juan',
        edad: 49,
        direccion: {
            pais: 'Colombia',
            casaNo: 124,
        }
    }

    return (
        <>
            <h3>Nombre: {persona.nombreCompleto}</h3>
            <h3>Edad: {persona.edad}</h3>
            <h3>Pais: {persona.direccion.pais}</h3>
            <h3>Casa Número: {persona.direccion.casaNo}</h3>
            <h3>{ JSON.stringify(persona) }</h3> {/* Transforma un objeto en su representación JSON */}

            <code>
                <pre>{ JSON.stringify( persona, null, 2 ) }</pre>
            </code>
            
        </>
    )
}
