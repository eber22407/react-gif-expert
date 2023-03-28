// import React from 'react'
import { useState } from 'react';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from './components';//POR DEFAULT APUNTO AL ARCHIVO INDEX(ARCHIVO DE BARRIL)

export const GifExpertApp = () => {
// no poner  con distintas condiciones distinto hooks (if else), react pierde la relacion de lo hooks la referencia a que hook esta manejando
	const [categories, setCategories] = useState([ 'One Punch' ]);

	// const onAddCategory = () => {
	// 	// Agregar una categoria
	// 	setCategories( [...categories, 'Valorant']);
	// 	// setCategories( cat => [ ...cat, 'Valorant']);

	// }

	const onAddCategory = (newCategory) => {

        if( categories.includes( newCategory ) ) return;
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [...cat, newCategory]);
        // console.log(newCategory)

    }

	return (
		<>
			{/*  titulo  */}
			<h1>GifExpertApp</h1>

			{/* input */}
			<AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value)}
                //on es un evento, esta emitiendo algo, esu na propiedad del componente
                currentCategories={ categories }
            />
			{/* Listado de Gif */}
			{/* <button onClick={ onAddCategory }>Agregar</button> */}
			{   
            // esta devolviendo el objeto sin return ni llaves
                categories.map( (category) => 
                    (
                        <GifGrid key={category} category={category}/>
                    )
                )
            }
				{/* Gif Item */}
		</>
	)
}
