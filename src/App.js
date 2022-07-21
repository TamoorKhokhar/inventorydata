import StoreForm from "../src/StoreForm/StoreForm";
import AddProductForm from "../src/addProductForm/addProductForm";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import AllStoresData from "./allStoresData/allStoresData";
import AllProductData from "./allproductData/allProductData";
import SelectedStoresProduct from "./selectedStoresProduct/selectedStoresProduct";
import LandingPage from "./landingPage/landigPage";
import ErrorBoundary from "./errorBoundary/errorBoundary";

function App() {
  console.log("jjjjj");

  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createstores" element={<StoreForm />} />
        <Route path="/allstores" element={<AllStoresData />} />
        <Route path="/allProducts" element={<AllProductData />} />
        <Route path="/allproductdata" element={<AllProductData />} />
        <Route path="/product/:id" element={<AddProductForm />} />
        <Route path="/selectedstores/:id" element={<SelectedStoresProduct />} />
      </Routes>
    </>
  );
}

export default App;
