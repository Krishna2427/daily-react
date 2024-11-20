import '../styles/card.css';
const Card=({title, description, imageUrl})=>{
    return(
        <div className="card">
            <img  alt={imageUrl}  className="card-img"/>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}
export default Card;