import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function App() {
  console.log("rendering App");
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
