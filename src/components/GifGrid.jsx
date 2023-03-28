import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            {/* className sinonimo de class, por que class es una palabra reservada de js */}
            <div className="card-grid">
            {   
            // esta devolviendo el objeto sin return ni llaves}
                // image desestructurado
                // images.map( ({id, title}) =>
                images.map( ( image ) =>
                    (   
                        <GifItem 
                            key={image.id}
                            { ...image}
                            // con el operador spread ... exparse las propiedades en el componente
                        /> 
                    )
                )
            }
            </div>
        </>
    )
}
