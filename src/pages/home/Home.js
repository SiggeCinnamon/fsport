import Navbar from "../../componets/navbar";
import style from "./Home.module.scss";
import { Jumbotron, Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Jumbotron>
         <p> npm start</p>
         <p>npm run serve</p>
        </Jumbotron>
      </Container>
    </>
  );
};

export default Home;
