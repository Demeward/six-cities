import MainPage from '../main-page/main-page';

type AppOffersCount = {
  offersCount: number;
}

function App({offersCount}: AppOffersCount): JSX.Element {
  return <MainPage offersCount={offersCount} />;
}

export default App;
