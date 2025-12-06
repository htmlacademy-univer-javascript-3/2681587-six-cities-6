import MainPage from './MainPage';

type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps): JSX.Element {
  // Только MainPage, другие страницы НЕ подключаем
  return <MainPage offersCount={offersCount} />;
}

export default App;
