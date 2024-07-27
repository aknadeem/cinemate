import {AllRoutes} from "./routes/AllRoutes";
import {Header, Footer } from "./components";
import './App.css';

export default function App() {
  return (
    <div className="App">
        <Header />
        <AllRoutes />
        <Footer />
    </div>
  );
}
