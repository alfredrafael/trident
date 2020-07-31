import React, { useEffect, useState, Fragment } from "react";
import '../../App.css';
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardHeader,
  Button,
  Row,
} from "reactstrap";
import Fade from "react-reveal/Fade";
import menuData from "../../menuData.json";

const alcoholMenu = menuData[0].menu.alcoholDrinks;

const AlcoholDrinks = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(alcoholMenu);
  }, []);

  const renderItems = state.map((item, i) => {
    return (
      <div key={i} className="col-md-6 col-sm-12">
        <a href={item.url} style={{ textDecoration: "none", color: "inherit" }}>
          <Card
            key={i}
            className="highlight-on-hover"
            style={{ margin: "2% 1%", borderRadius: "15px" }}
          >
            <CardHeader
              style={{
                background: "#7a1f1f",
                color: "white",
                height: "20%",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              <h4 style={{ margin: "-1% 0" }}>{item.name}</h4>
            </CardHeader>

            <CardBody>
              <CardText style={{ textDecoration: "none", color: "inherit" }}>
                {item.description}
              </CardText>
            </CardBody>
          </Card>
        </a>
      </div>
    );
  });

  return (
    <React.Fragment>
        <div style={{ paddingTop: "3%", width: '100%'}} id="drinks">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2
              style={{
                fontWeight: "bolder",
                marginBottom: "1%",
              }}
            >
              Alcohol Drinks
            </h2>

            <div class="float-margin" style={{ display: "inline" }}>
              &nbsp;
              <i class="arrow left" style={{ marginBottom: ".5%" }}></i>
              &nbsp;
              <Button
                className="back-button-outlined"
                outline
                style={{ border: "1px solid #7a1f1f", color: "#7a1f1f" }}
                href="/"
                bsClass="custom-hover"
                size="sm"
              >
                <span>BACK TO MENU</span>
              </Button>
            </div>
          </div>

          <div className="row">
            <br />
            {renderItems}
          </div>
        </div>
    </React.Fragment>
  );
};

export default AlcoholDrinks;
