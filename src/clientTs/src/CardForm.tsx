import React, { useState } from "react";

interface FormObject {
  OnSubmit(order: { name: string; cups: number }): void;
}

export const CardForm = ({ OnSubmit }: FormObject) => {
  const [name, setName] = useState<string>("coffee");
  const [cups, setCups] = useState<number>(0);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    OnSubmit({ name, cups });
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
      <label>Cups</label>
      <input
        type="text"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCups(Number(e.target.value));
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
};
