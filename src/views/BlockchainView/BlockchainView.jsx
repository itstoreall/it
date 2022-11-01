import { ViewWrap } from '../View.style';
import Blockchain from '../../components/Blockchain/Blockchain';

const BlockchainView = ({ view }) => {
  return (
    <ViewWrap>
      <Blockchain view={view} />
    </ViewWrap>
  );
};

export default BlockchainView;
