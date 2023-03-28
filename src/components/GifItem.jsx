
export const GifItem = ({title, url, id}) => {
    
  return (
    <div className="card">
        {/* alt es lo que muestra si no se visualiza la img */}
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
