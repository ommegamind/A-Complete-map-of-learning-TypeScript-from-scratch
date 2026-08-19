// Link : https://jsonplaceholder.typicode.com/todos/1

/* Data: {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

import axios from "axios";
import type { AxiosResponse } from "axios";

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getDataViaAxios = async () => {
  try {
    const response: AxiosResponse<Data> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(`Response: ${Object.values(response.data)}`);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      if (error.response) {
        console.log(`error response: ${error.response}`);
      }
    }
  }
};
