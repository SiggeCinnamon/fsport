import Navbar from "../../componets/navbar";
import style from "./Home.module.scss";
import { Jumbotron, Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Jumbotron>Hello</Jumbotron>
      </Container>
    </>
  );
};

export default Home;
