import NavBar from "../../componets/navbar/Navbar";
import style from "./Lobby.module.scss";
import { Jumbotron, Container } from "react-bootstrap";
const Lobby = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Jumbotron>lobby</Jumbotron>
      </Container>
    </>
  );
};
export default Lobby;
