import React from 'react';

const Image = ({url, alt}) => {
    return <img onClick={() => console.log("user clicked on the element")} onMouseEnter={() => console.log("user hovered over the element")} src={url} alt={alt} />
};

export default Image;