import React from "react";
import genOne from "../assets/data/genOne";
import { Link } from "react-router-dom";
import { formatImageName } from "../helpers/generic";

const MainPage = () => {
    return (
        <div className="pokemonList">
            {genOne.map((name, index) => {
                return (
                    <div>
                        <Link to={`/detail/${index + 1}`} key={index}>
                            <img
                                src={`../assets/pokemonsPNG/${formatImageName(index + 1)}.png`}
                                alt={name}
                                title={name}
                            />
                            <span>{name}</span>
                        </Link>
                    </div>
                );
            })}
        </div >
    );
};
export default MainPage;
