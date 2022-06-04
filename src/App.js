import { Fragment, useState } from 'react';
import UserForm from './components/form/UserForm';
import GlobalStyle from './global/GlobalStyle';

function App() {
  const [showSubmitInfo, setShowSubmitInfo] = useState(false);

  return (
    <Fragment>
      <GlobalStyle />
      <UserForm
        showSubmitInfo={showSubmitInfo}
        setShowSubmitInfo={setShowSubmitInfo}
      />
    </Fragment>
  );
}

export default App;
