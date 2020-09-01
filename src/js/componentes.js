import '../css/componentes.css'

// para que la funcion sea visible debe ponerse export

export const saludar = ( nombre ) => {

    console.log( 'Creando etiqueta H1' );
    
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }, Esta es mi primer pagina en NODE con webpack!!`;
    
    document.body.append(h1);
    
    
    }

