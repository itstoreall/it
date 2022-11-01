import { ContentSection } from './Content.style.js';

// Copy this
const Content = ({ view }) => {
  console.log('Content');

  return (
    <ContentSection>
      <h1>{view.title}</h1>
      <div>Content section</div>
    </ContentSection>
  );
};

export default Content;
