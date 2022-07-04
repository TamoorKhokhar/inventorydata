import StoreForm from "../src/StoreForm/StoreForm";
import AddProductForm from "../src/AddProductForm/AddProductForm";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/product" element={<AddProductForm />} />
        <Route path="/" element={<StoreForm />} />
      </Routes>
    </>
  );
}

export default App;
