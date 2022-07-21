
// import Backdrop from "./Components/Backdrop";
// import Modal from "./Components/Modal";
import Todo from "./Components/Todo";

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Explore React' />

      {/* Agregar los componentes creados */}
      {/* <Modal />
      <Backdrop /> */}
    </div>

  );
}

export default App;
