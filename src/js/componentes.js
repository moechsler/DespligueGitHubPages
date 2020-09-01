import '../css/componentes.css'

// para que la funcion sea visible debe ponerse export

export const saludar = ( nombre ) => {

    console.log( 'Creando etiqueta H1' );
    
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }, que tal como estas?`;
    
    document.body.append(h1);
    
    
    }

