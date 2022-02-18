import Logo from '../logo/logo';
import {Link} from 'react-router-dom';

function NoPage(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <section className="page__not-found">
        <h1>404. Page not found</h1>
        <Link className="page__not-found-link" to="/">Вернуться на главную</Link>
      </section>
    </>
  );
}

export default NoPage;
