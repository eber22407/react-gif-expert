import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    // console.log(setCategories);

    const [inputValue, setInputValue]  = useState('');
    // const onInputValues = ({event}) => { DESESTRUCTURADO
        // setInputValue(target.value); DESESTRUCTURADO
    const onInputChange = ({target}) => {
        // console.log(event.target.value)
        setInputValue(target.value);
        // setCategories(target.value)
    }

    // const [setCategories] = AddCategory;

    // const onSubmit = ( event ) =>  {
    //     event.preventDefault();
    //     if( inputValue.trim().length <=1 ) return;
	// 	setCategories( categories =>[ inputValue, ...categories]);// el 1er categories es el callback
    //     setInputValue('');

    // }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
        
    }
    return (
        // CADA COMPONENTE PUEDE TENER SU PROPIO ESTADO SUS PROPIOS HOOKS Y PROPIO USESTATE
        <form onSubmit={ (event) => onSubmit(event) }>

            <input 
                type="text" 
                placeholder="Buscar Gif"
                value={ inputValue }
                // onChange={ (event) => onInputValues(event) }
                onChange={ onInputChange }
            />
        </form>
        
    )
}
