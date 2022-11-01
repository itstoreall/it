import Page404 from '../views/Page404';
import HomeView from '../views/HomeView';
import BlockchainView from '../views/BlockchainView';
import View from '../views/View'; // Copy this

const viewHandler = (element, view) => {
  switch (element) {
    case 'Home':
      return <HomeView view={view} />;

    case 'Blockchain':
      return <BlockchainView view={view} />;

    case 'Content':
      return <View view={view} />; // Copy this

    default:
      return <Page404 view={view} />;
  }
};

export default viewHandler;
