type Flavour = "chocolate" | "caramel" | "butterscotch";

//these are called literal types

const addFlavour = (flavour: Flavour) => {
  if (flavour === "butterscotch") {
    console.log("u want a scotch with it??");
  }
  // and so on
};

//here ABOVE: the type can be only from the above "literally" defined flavour

type BaseCoffee = { item: string };
type AddFlavor = { flavour: string };

type ChocolateCoffee = BaseCoffee & AddFlavor;

const chocoCoffeeOrder: ChocolateCoffee = {
  item: "coffee",
  flavour: "chocolate",
};
// here ABOVE: we are combining 2 types where values from both are accessible.

type User = {
  id: string;
  blog?: string;
};

const userOne: User = {
  id: "23",
};

const userTwo: User = {
  id: "34",
  blog: "hie my name is userTwo for some reason",
};

// as we can see ABOVE both are valid for the type User as- blog is an optional
// property

type CampusId = {
  readonly id: string;
  currentDate: string;
};

// now any object created from the ABOVE type will only be able to define the
// property only once, after which no changing of the readonly property is possible.
// eg:

const personOne: CampusId = {
  id: "53",
  currentDate: "23,1,23",
};

personOne.currentDate = "12,2,23"; //this is allowed
//BUT
// personOne.id = "23"; //this isn't, shown by the red squigly line under id

//the ABOVE explains  creation and properties of readonly types
