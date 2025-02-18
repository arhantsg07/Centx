import { BrowserRouter, Route, Routes } from "react-router-dom";
// import StockData from "./components/Market.jsx";
import Layer from "./Layout.jsx";
import Navigation from "./components/Navigation.jsx";
import StockLogo from "./components/Market2.jsx";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layer />}/>
        <Route path="/market" element={<><StockLogo /></>}/>
      </Routes> 
      </BrowserRouter>
    </div>
  );
}