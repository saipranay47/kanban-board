import Board from "./components/board/Board";
import "./styles/App.css";
import { UsersProvider } from "./utils/UsersContext";
function App() {
  return (
    <div>
      <UsersProvider>
        <Board />
      </UsersProvider>
    </div>
  );
}

export default App;
