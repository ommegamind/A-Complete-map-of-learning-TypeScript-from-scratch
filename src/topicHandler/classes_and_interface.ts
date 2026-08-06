// type beans = "roasted" | "natural";

// type beans = { type: "roasted" } | { type: "natural" };

// neither of the above 2 ways are feasable for classes
// to use type implementation, thus while working with
// class implementation, we should rather use interfaces!

interface beans {
  beanType: "roasted" | "natural";
}

class coffee implements beans {
  beanType: "roasted" | "natural" = "roasted";
}
