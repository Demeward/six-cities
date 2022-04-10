
type PropertyType = {
  images: string[],
}

function PropertyPhotos({images}: PropertyType): JSX.Element {
  return (
    <>
      {images.map((image) => <div className="property__image-wrapper" key={image}><img className="property__image" src={image} alt="Photo studio" /></div>)}
    </>
  );
}

export default PropertyPhotos;
