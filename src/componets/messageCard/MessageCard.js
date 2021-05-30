import { Card, Row, Col, Alert, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import style from "./MessageCard.css";

const MessageCard = (data) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState(data.state);
  const [checked, setChecked] = useState({ id: data.id, state: data.state });

  let date = new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(data.timestamp);

  const textLength = () => {
    if (data.body.length <= 200) {
      return data.body;
    }
    if (data.body.length > 200 && show) {
      return (
        <>
          <p>{data.body}</p>
          <div
            className="showMore"
            onClick={() => {
              setShow(false);
            }}
          >
            Show less
          </div>
        </>
      );
    }
    if (data.body.length > 200) {
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
                  onClick={() => setState(true)}
                >
                  {data && data.state === 1 ? (
                    <Alert variant={"primary"} className="alertText">
                      Mark as read
                    </Alert>
                  ) : (
                    <Alert variant={"success"} className="alertText">
                      Mark as unread
                    </Alert>
                  )}
                </div>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="cardBody">
            <Card.Text className="cardText">{textLength()}</Card.Text>
            <Card.Text className="cardFooter">{date}</Card.Text>
            <Card.Text className="cardFooter">
              <Form.Check
                aria-label="option 1"
                label="Mark"
                value={checked.state}
                onChange={() =>
                  setChecked({ id: data.id, state: Number(checked.state) })
                }
              />
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default MessageCard;
