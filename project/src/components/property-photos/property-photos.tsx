import React from 'react';

type PropertyType = {
  images: string[],
}

function PropertyPhotos({images}: PropertyType): JSX.Element {

  // eslint-disable-next-line no-console
  console.log('render');

  return (
    <>
      {images.map((image) => <div className="property__image-wrapper" key={image}><img className="property__image" src={image} alt="studio" /></div>)}
    </>
  );
}

export {PropertyPhotos};
export default React.memo(PropertyPhotos,
  (prevProps, nextProps) => prevProps.images === nextProps.images);
