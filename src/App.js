import AddPanel from "./components/AddPanel";
import AppProvider from "./components/AppContext";
import List from "./components/List";

import "./App.css";

function App() {
  return (
    <div className="app">
      <AppProvider>
        <AddPanel />
        <List />
      </AppProvider>
    </div>
  );
}

export default App;
