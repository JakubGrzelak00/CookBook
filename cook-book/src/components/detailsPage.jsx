import React from "react";
import { getByID } from "../scripts/GetData";
import StepBox from "./common/stepBox";

class RecepiePage extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const data = await getByID(this.props.match.params.id);
    this.setState({ data });
    console.log(this.state.data);
  }
  render() {
    return (
      <div>
        <StepBox></StepBox>
        <StepBox></StepBox>
        <StepBox></StepBox>
      </div>
    );
  }
}

export default RecepiePage;
