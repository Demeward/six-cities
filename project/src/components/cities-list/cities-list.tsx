import { City } from '../../const';
import {memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeCity } from '../../store/action';
import {getCity} from '../../store/main-data/selectors';


// type CitiesType = {
//   activeCity: string,
//   onChangeCity: (city: string) => void,
// }

function CitiesList(): JSX.Element {
  const activeCity = useSelector(getCity);
  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Object.values(City).map((city) => (
        <li className="locations__item" key={city}>
          <a className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeCity(city));
            }}
          >
            <span>{city}</span>
          </a>
        </li>),
      )}
    </ul>
  );
}

export default memo(CitiesList);
