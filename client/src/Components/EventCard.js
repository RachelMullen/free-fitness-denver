import {Link} from 'react-router-dom'

function EventCard({ event }) {
    const { title, budget, genre, image, id } = event

    return (

            <div>
                <Link to={`/productions/${id}`}> <h2>{title}</h2></Link>
                <p>{genre}</p>
                <p>$ {budget}</p>
            </div>
            <img src={image} />
    
     
    );
}