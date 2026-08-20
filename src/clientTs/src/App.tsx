import "./App.css";
// import { CardElement } from "./Card";
import { CardList } from "./CardList.tsx";
import type { CardElementType } from "./Card";

const listOfItems: CardElementType[] = [
  { prodName: "coffee", prodPrice: 100, isSpecial: true },
  { prodName: "tea", prodPrice: 10, isSpecial: false },
];

function App() {
  return (
    <>
      <h1>Hello omie</h1>
      {/* <CardElement prodName={"coffee"} prodPrice={100} /> */}
      <CardList elements={listOfItems} />
    </>
  );
}

export default App;
