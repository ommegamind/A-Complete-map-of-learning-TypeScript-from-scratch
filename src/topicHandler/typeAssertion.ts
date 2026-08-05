let value: any;
value = "42";
export const number: number = (value as string).length;

type Book = {
  name: string;
};
const apiData = `{"name" : "The Final Empire"}`;

export const recievedData = JSON.parse(apiData);
export const recievedDataTypeAssertion = JSON.parse(apiData) as Book;
