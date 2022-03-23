import { City } from '../../const';


type CitiesType = {
  activeCity: string,
  onChangeCity: (city: string) => void,
}

function CitiesList(props: CitiesType): JSX.Element {
  const { activeCity, onChangeCity } = props;

  return (
    <ul className="locations__list tabs__list">
      {Object.values(City).map((city) => (
        <li className="locations__item" key={city}>
          <a className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
            href="#"
            onClick={() => {
              onChangeCity(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}

export default CitiesList;
