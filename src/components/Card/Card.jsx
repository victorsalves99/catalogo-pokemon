import "./Card.scss"



const Card = ({img, nome, tipo}) => {
  return (
    <div className= {`card` } >
        <div className="boxImg">
            <img src={img} />
        </div>
        <div className="boxConteudo">
            <h4>{nome}</h4>
            <p>{tipo}</p>
        </div>
        
    </div>
  )
}

export default Card