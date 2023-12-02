import React from 'react';
import Image from './Image';

const Body = ({numberOfElements}) => {
    const images = Array.from({length: numberOfElements}, (v, i) => (
        <Image key={i} url={`./assets/image${i}.jpeg`} alt={`Image ${i}`} />));

    return (
        <>
            <h1>Images</h1>
            <main>{images}</main>
        </>
    );
}

export default Body;