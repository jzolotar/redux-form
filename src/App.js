import showResult from './components/form/showResult';
import UserForm from './components/form/UserForm';

function App() {
  return <UserForm onSubmit={showResult} />;
}

export default App;
