import Navbar from "../../componets/navbar/Navbar";
import MessageCard from "../../componets/messageCard";
import { Jumbotron, Container, CardDeck, Dropdown } from "react-bootstrap";
import useFetchData from "../../hooks/useFetchData";
import style from "./Message.css";
import { useState } from "react";

const Messages = () => {
  const [data, setData] = useFetchData();

  return (
    <>
      <Navbar />
      <Container fluid>
        <Jumbotron>
          <CardDeck className="cardDeck">
            {data &&
              data.map((item) => (
                <MessageCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  body={item.body}
                  timestamp={item.timestamp}
                  state={item.state}
                />
              ))}
          </CardDeck>
        </Jumbotron>
      </Container>
    </>
  );
};
export default Messages;
