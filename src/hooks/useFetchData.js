import { useState, useEffect } from "react";
import { getAllMessages } from "../services/messages";

const useFetchData = (id) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fData = await getAllMessages().then((data) => {
        setData(data);
      });
    };
    fetchData();

  }, []);

  return [data, setData];
};
export default useFetchData;
