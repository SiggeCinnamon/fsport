import { Card, Collapse, Row, Col, Alert, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import style from "./MessageCard.css";

const MessageCard = (data) => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [test, setTest] = useState(data);
  console.log(test);
  let date = new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(data.timestamp);

  useEffect(() => {
    if (data.state === 1) {
      setShow(false);
    }
  }, []);

  const textLength = () => {
    if (data.body.length <= 250) {
      console.log("open", data);
      return data.body;
    }
    if (data.body.length > 200 && show) {
      console.log("closed", data);
      return (
        <>
          <p>{data.body}</p>
          <div className="showMore" onClick={() => setShow(false)}>
            Show less
          </div>
        </>
      );
    }
    if (data.body.length > 200) {
      console.log(data);
      return (
        <>
          <p>{data.body.slice(0, 200)}</p>
          <div className="showMore" onClick={() => setShow(true)}>
            Show more
          </div>
        </>
      );
    }
  };

  return (
    <>
      {data && (
        <Card id={data.id} className="cardMain">
          <Card.Header className="cardHeader">
            <Row>
              <Col className="cardTitle">
                <Card.Title>
                  <h4>{data.title}</h4>
                </Card.Title>
              </Col>
              <Col xs lg="3" className="fancyBox">
                <div
                  className={style.markAsRead}
                  onClick={() => setShow(false)}
                >
                  <Alert variant={"primary"} className="alertText">
                    Mark as read
                  </Alert>
                </div>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="cardBody">
            <Card.Text className="cardText">{textLength()}</Card.Text>
            <Row
              style={{
                position: "absolute",
                bottom: "0px",
                right: "0px",
              }}
            >
              <Col>
                <Card.Footer className="cardFooter">{date}</Card.Footer>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default MessageCard;
