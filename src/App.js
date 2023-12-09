import Board from "./components/board/Board";
import Card from "./components/board/Card";
import "./styles/App.css";
function App() {
  const task = {
    id: "CAM-4",
    title: "Implement Email Notification System",
    tag: ["Feature Request"],
    userId: "usr-1",
    status: "In progress",
    priority: 3,
  };
  localStorage.setItem("hello", "hi");

  return (
    <div>
      {/* <Card task={task} /> */}
      <Board />
    </div>
  );
}

export default App;
