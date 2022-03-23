
import { useState } from 'react';
import { Sorting } from '../../const';


type SortingProps = {
  activeSorting: string,
  onChangeSorting: (sorting: string) => void,
}

function SortingList(props: SortingProps): JSX.Element {
  const { activeSorting, onChangeSorting } = props;
  const [isActive, changeActive] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => { changeActive(!isActive); }}>
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isActive ? 'places__options--opened' : ''}`}>
        {Object.values(Sorting).map((sort) => (
          <li className={`places__option ${activeSorting === sort ? 'places__option--active' : ''}`} tabIndex={0} key={sort} onClick={() => { onChangeSorting(sort); }}>{sort}</li>
        ),
        )}
      </ul>
    </form>
  );
}

export default SortingList;
