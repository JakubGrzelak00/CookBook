import React from "react";
import { getData } from "../scripts/GetData";
import Card from "./common/card";
import "../styles/recepiesPage.css";

class RecepiesPage extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const data = await getData(this.props.match.params.category);
    this.setState({ data });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="recepies-box">
        {data.map((position) => (
          <Card
            imageID={position.id}
            title={position.title}
            linkTo={"Recepie/" + position.id}
          ></Card>
        ))}
      </div>
    );
  }
}

export default RecepiesPage;
