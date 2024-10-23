import React from 'react'

function button1() {
    let handleMouseOver=()=>{
        setHovered(true);
    };
    const handleMouseOut =() =>{
        setHovered(false);
    }
  return (
    <div>
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >Hover over this box
        </div>
        {Hovered && <p>hovering over the box!</p>}

    </div>
  );
};

export default button1;