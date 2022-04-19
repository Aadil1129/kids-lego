import Header from "./component/header";
import LegoProduct from "./component/home/legoproduct/index.jsx";
import LegoCity from "./component/home/legocity/legocity.jsx";
import LegoStore from "./component/home/legocity/legostore.jsx";
import SimilarGifts from "./component/home/similarproduct/index.jsx";
import Footer from "./component//footer";

function App() {
  return (
    <div className="App">
      <Header />
      <LegoProduct />
      <LegoCity />
      <LegoStore />
      <SimilarGifts />
      <Footer />
    </div>
  );
}

export default App;
