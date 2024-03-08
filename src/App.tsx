// import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorConHook';
// import { Funciones } from './typescript/Funciones';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { TiposBasicos } from './typescript/TiposBasicos';


export const App = () => {
  return (
    <div className="mt-2">
      <h1>Intro TypeScript</h1>

      <hr />

      <ContadorConHook/>

      {/* <Contador/> */}

      {/* <Funciones/> */}

      {/* <ObjetosLiterales/> */}

      {/* <TiposBasicos/> */}
    </div>
  )
}