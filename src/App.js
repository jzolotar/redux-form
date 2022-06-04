import { Fragment } from 'react';
import UserForm from './components/form/UserForm';
import GlobalStyle from './global/GlobalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <UserForm />
    </Fragment>
  );
}

export default App;
