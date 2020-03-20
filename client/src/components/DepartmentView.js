import React from "react";
import axios from "axios";
import { Button, Header, Segment } from "semantic-ui-react";

class DepartmentReview extends React.Component {
  state = { department: [], items: [] };

  componentDidMount() {
    const department_id = this.props.match.params.id;
    axios
      .get(`/api/departments/${department_id}`)
      .then(res => {
        const departmentData = res.data;
        axios
          .get(`/api/departments/${department_id}/items`)
          .then(res => {
            this.setState({ 
              department: departmentData, 
              items: res.data 
            });

          })
      })

  }


  render() {
    const { name } = this.state.department;

    return (
      <div>
        <Segment>
          <Header as="h1">{name}</Header>
        </Segment>
        <Segment>
          <Header as="h1">Comments 1st example</Header>
          {this.state.items.map(item => (
            <Segment>
              <Header as="h3">{item.name}</Header>
              <p>{item.text}</p>
            </Segment>
          ))}
        </Segment>
        <br />
        <br />
        <Button
          color="black"
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}

export default DepartmentReview;