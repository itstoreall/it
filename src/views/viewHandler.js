import HomeView from '../views/HomeView';
import BlockchainView from '../views/BlockchainView';

const viewHandler = element => {
  console.log('element', element);

  switch (element) {
    case 'Home':
      return <HomeView />;
    case 'Blockchain':
      return <BlockchainView />;
    default:
      return <HomeView />;
  }
};

export default viewHandler;
