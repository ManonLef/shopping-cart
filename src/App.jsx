import { Header } from "./Header";
import HomePage from "./Homepage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header  />
      <HomePage />
      <Header />
    </div>
  );
}

export default App;
