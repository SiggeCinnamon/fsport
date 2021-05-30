import { useState, useEffect } from "react";
import { setMessageAsRead } from "../services/messages";

const useFetchData = (id, state) => {
  const [msgRead, setMsgRead] = useState();

  useEffect((id, state) => {
    setMessageAsRead(id, state).then((result) => {
      setMsgRead(result);
    });
  }, []);
  console.log(msgRead);
  return [msgRead, setMsgRead];
};
export default useFetchData;
