import UserForm from './components/form/UserForm';

function App() {
  return <UserForm onSubmit={() => console.log('click')} />;
}

export default App;
