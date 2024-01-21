import React from "react";

const Gallery = props => {

  return (
    <div>
      <div className="showcase">
        <img src={props.selectedUrl} alt={props.name} title={props.name} />
      </div>
      <div className="selectImage">
        {
          props.sprites.map((sprite) =>
            <img className="thumbnail" src={sprite} alt={props.name} title={props.name} key={sprite} onClick={() => {
              props.setSelectedUrl(sprite);
            }} />
          )
        }
      </div>
    </div>)

}

export default Gallery;