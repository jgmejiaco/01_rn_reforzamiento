
export const TiposBasicos = () => {

    const nombre: string = 'Juan';
    const edad: number = 49;
    const activo: boolean = true;

    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar bajo el agua'];


  return (
    <>
        <h3>TiposBasicos</h3>
        <h4>Nombre:{nombre}</h4>
        <h4>Edad: {edad}</h4>
        <h4>Activo: {activo ? 'si' : 'no'}</h4>
        <h4>Poderes: { poderes.join(', ')}</h4>
        {/* <h4>Poderes: { poderes[0] }, { poderes[1] }, { poderes[2] }</h4> */}
    </>
  )
}
