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
  return (
    <div>
      <Card task={task} />
    </div>
  );
}

export default App;
