import { ViewWrap } from '../View.style';
import Content from '../../components/Content';

// Copy this
const View = ({ view }) => {
  return (
    <ViewWrap>
      <Content view={view} />
    </ViewWrap>
  );
};

export default View;
