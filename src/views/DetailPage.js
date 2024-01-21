import React, { useEffect, useState } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import { getPokemon } from "../actions/pokemon";
import { formatImageName } from "../helpers/generic";
import Gallery from "../components/Gallery";

const DetailPage = () => {
  const { id } = useParams();
  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState(null);
  const [selectedUrl, setSelectedUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id <= 0 || id >= 151) { return false; }
      else { return getPokemon(id); }
    };

    fetchData().then(
      resp => {
        if (resp) {
          resp.sprites = extractNonNullStrings(resp.sprites);
          setIsValid(true);
          setData(resp);
          setSelectedUrl(resp.sprites[0]);
        }
        else {
          setIsValid(false);
        }
      }
    );
  }, [id]);

  function extractNonNullStrings(obj) {
    const result = [];

    function explore(obj) {
      if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            explore(obj[key]);
          }
        }
      } else if (typeof obj === 'string' && obj !== null && obj !== "") {
        result.push(obj);
      }
    }

    explore(obj);

    return result;
  }


  return (<div className="wrapper">
    {isValid && data ?
      (
        <>
          <h1>{data.name}</h1>
          <div className="body">
            <div className="generic">
              <img
                src={`../assets/pokemonsPNG/${formatImageName(id)}.png`}
                alt={data.name}
                title={data.name}
                className="mainImg"
              />
              <div>
                <p>Height: {data.height}ft</p>
                <p>Weight: {data.weight} lbs</p>
                <div className="types">Types: {data.types.map((type, index) => <div key={index}>
                  <img src={`../assets/types/${type.type.name}.svg`} alt={type.type.name}
                    title={type.type.name} className={`type ${type.type.name}`} />{' '}
                  {type.type.name}
                </div>
                )}
                </div>
              </div>
            </div>
            <h2>Generic stats</h2>
            <div className="stats">
              <table>
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {data.stats.map((stat, index) => (
                    <tr key={index}>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>Images</h2>
            <div className="gallery">
              <Gallery
                selectedUrl={selectedUrl}
                setSelectedUrl={setSelectedUrl}
                name={data.name}
                sprites={data.sprites}
              />
            </div>
            <div className="home">
              <Link to="/" >
                <span>Go to home</span>
              </Link>
            </div>
          </div>
        </>
      ) : isValid ? "loading page" : (<div>
        Only rendering pokemon from gen 1.
        <div className="home">
          <Link to="/" >
            <span>Go to home</span>
          </Link>
        </div></div>)}
  </div>)
}

export default DetailPage;
