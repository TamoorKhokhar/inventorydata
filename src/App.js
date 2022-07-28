import StoreForm from "./storeForm/storeForm";
import { Route, Routes } from "react-router-dom";
import Header from "./header/header";
import AllStoresData from "./allStoresData/allStoresData";
import AllProductData from "./allproductData/allProductData";
import SelectedStoresProduct from "./selectedStoresProduct/selectedStoresProduct";
import LandingPage from "./landingPage/landigPage";
import ErrorBoundary from "./errorBoundary/errorBoundary";
import AddProductForm from "./addProductForm/addProductForm";
import Table from "./table/table";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/stores" element={<Table />} />
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
