import logo from "./logo.svg";
import "./App.css";
import LeftPanelFilter from "./components/leftPanel";
import MainContent from "./components/mainContent";

function App() {
  return (
    <div>
      <div className="AppContent">
        <LeftPanelFilter />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
