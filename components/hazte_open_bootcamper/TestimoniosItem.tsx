import Image from "next/image"
import { ITestimonio } from "../../shared/models/models.interface"

export const TestimoniosItem = ({testimonio}: {testimonio: ITestimonio}) => {
 return(
  <div>
    <div>
      <Image 
        src={testimonio.imagen}
        width={84}
        height={84}
        alt={`Foto de ${testimonio.nombre}`}
      />
      <p>{testimonio.nombre}</p>
      <p>{testimonio.trabajo}</p>
    </div>
    <div>
      {testimonio.testimonio}
    </div>
  </div>
 )
}