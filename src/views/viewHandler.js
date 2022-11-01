import Page404 from '../views/Page404';
import HomeView from '../views/HomeView';
import BlockchainView from '../views/BlockchainView';

const viewHandler = element => {
  switch (element) {
    case 'Home':
      return <HomeView />;

    case 'Blockchain':
      return <BlockchainView />;

    default:
      return <Page404 />;
  }
};

export default viewHandler;
