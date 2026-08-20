import { CardElement } from "./Card";
import type { CardElementType } from "./Card";

interface CardElementTypeList {
  elements: CardElementType[];
}

export const CardList = ({ elements }: CardElementTypeList) => {
  return (
    <>
      {elements.map((ele) => (
        <CardElement
          key={ele.prodName}
          prodName={`${ele.prodName}`}
          prodPrice={ele.prodPrice}
          isSpecial={ele.isSpecial}
        />
      ))}
    </>
  );
};
