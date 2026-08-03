// Type narrowing or type guarding or guardralings.

export const serveIntStr = (req: string | number) => {
  if (typeof req === "string") {
    return `requested a string`;
  }
  return `requested the number: ${req}`;
};

export const serveMsg = (msg?: string) => {
  if (msg) {
    return `${msg}`;
  }
  return `Default msg, since no msg was passed`;
};

export class Pizza {
  serve = () => {
    return `serving pizza`;
  };
}

export class Burger {
  serve = () => {
    return `serving burger`;
  };
}

export const serveItem = (obj: Pizza | Burger | string) => {
  if (typeof obj === "object") {
    if (obj instanceof Pizza) {
      const serving = obj.serve();
      return serving;
    } else if (obj instanceof Burger) {
      const serving = obj.serve();
      return serving;
    }
  } else {
    return `unknown item`;
  }
};
