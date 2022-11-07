import { useState } from "react";

const Listecar = () => {

        const [cars, setcar] = useState ( (
            {
                id: 1,
                marque: "Renault",
                modele: "Clio",
                couleur: "bleu",
                anneé: 2008
            },
            {
                id: 2,
                marque: "Renault",
                modele: "Megane",
                couleur: "black",
                anneé: 2022
            }
        ))

    return ( 
        <div className="listcar">
            {
            cars.map( (car) => (
                <div className="car" key={car.id}>
                <p className="car-marque">Marque: {car.marque}</p>
                </div>
            ))
        }
        </div>
     );
}

 
export default Listecar;