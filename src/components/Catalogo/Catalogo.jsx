import { Children } from "react"
import "./Catalogo.scss"


const Catalogo = (props) => {
  return (
    <section className="catalogo">
        {props.children}
    </section>
  )
}

export default Catalogo