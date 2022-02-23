
type PropertyType = {
  goods: string[],
}

function PropertyFeatures({goods}: PropertyType): JSX.Element {
  return (
    <ul className="property__inside-list">
      {goods.map((feature) => <li className="property__inside-item" key={feature}>{feature}</li>)}
    </ul>
  );
}

export default PropertyFeatures;
