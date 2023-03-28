import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    //si no devuelve jsx no es un funcional component es solo una funcion

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages)
        setIsLoading( false );
    }
    // useEffect es un hook de reack que sirve para disparar efectos secundarios, un efecto secundario es algun
    // proceso que quiera ejecutarr cuando algo suceda

    // lleva 2 argumentos una funcion, y luego una lista de depencias(condiociones bajo las cuales quiero volver a ejcutar el callback)
    // 2do argumento es opcional, pero en teoria obligatorio
    // [] -> dependencias, si estan vacias
    useEffect( () => {
        getImages();
    }, [])
    // images: images, al tener el mismo nombre se puede abreviar
    return{
        images,
        isLoading
    }
}
