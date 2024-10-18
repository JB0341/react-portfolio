import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <main className=" bg-info flex-fill">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
