import './Card.css'

const Card = (props) => {
    const { button, image } = props
    const { restaurant_name, cuisine_type, image_url } = props.data

    return (
        <>
            <div className='cardlist' >
                <div className='cardlist1' onClick={props.onClick}>
                    <div >
                        <img src={image}></img>
                        <h3>{restaurant_name}</h3>
                        <h5>{cuisine_type}</h5>
                    </div>

                    <div>
                        <button>{button}</button>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Card;