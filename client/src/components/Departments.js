import React from "react";
import { Card, Header, Button, Checkbox } from "semantic-ui-react";
import { Link, } from "react-router-dom"
import axios from "axios"

class Departments extends React.Component {
  state = { departments: [],
   };

  componentDidMount() {
    axios
      .get("api/departments")
      .then(res => {
        this.setState({ departments: res.data, })
      });
  }


  updateDepartments = (id) => {
    console.log("update")
    console.log(id)

    axios.put(`/api/departments/${id}`)
      .then(res => {
        const departments = this.state.departments.map(t => {
          if (t.id === id)
            return res.data;
          return t;
        });
        this.setState({ departments, });
      })
  }

  deleteDepartment = (id) => {
    console.log("delete!!!!!")
    console.log(id)

    axios.delete(`/api/departments/${id}`)
      .then(res => {
        const { departments, } = this.state;
        this.setState({ departments: departments.filter(d => d.id !== id), })
      })
  }

  renderDepartments = () => {
    const { departments } = this.state;

    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map(department => (
      <Card key = {`department-${department.id}`}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${department.id}`} color='blue'>
            View
          </Button>
          <Button

            onClick={() => this.deleteDepartment(department.id)}
            color='blue'>
            Delete
          </Button>
          <div style={styles.flex}>
    
          <Checkbox
            defaultChecked={department.complete}
            onClick={() => this.updateDepartments(department.id)}
          />
          <div style={department.complete ? styles.complete : {}} className="center">
          </div>
          </div>
        </Card.Content>
      </Card>
    ))
  };

 

  render() {
    return (
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Button as={Link} color="blue" to="/departments/new">
          Add Departments
        </Button>
        <br />
        <br />
        <Card.Group>
          {this.renderDepartments()}
        </Card.Group>
      </div>
    )
  }
}

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Departments;


