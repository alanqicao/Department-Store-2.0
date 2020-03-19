import React from "react";
import { Card, Header, Button, Checkbox } from "semantic-ui-react";
import { Link, } from "react-router-dom"
import axios from "axios"
import styled from 'styled-components';
import StyledHeader from './StyledHeader'

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
      <StyledCard key = {`department-${department.id}`}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
        <Card.Content as='div' extra>
          <StyledButton as={Link} to={`/departments/${department.id}`}>
            View
          </StyledButton>
          <StyledButton
            onClick={() => this.deleteDepartment(department.id)}>
            Delete
          </StyledButton>
          <CheckboxContainer>
            <Checkbox
              defaultChecked={department.complete}
              onClick={() => this.updateDepartments(department.id)}
            />
          </CheckboxContainer>
        </Card.Content>
      </StyledCard>
    ))
  };

 

  render() {
    return (
      <div>
        <StyledHeader as="h1">Departments</StyledHeader>
        <br />
        <NewButton as={Link} to="/departments/new">
          Add Departments
        </NewButton>
        <br />
        <br />
        <Card.Group>
          {this.renderDepartments()}
        </Card.Group>
      </div>
    )
  }
}

const CheckboxContainer = styled.div`
  float: right;
  margin: 15px;
`

const StyledCard = styled(Card)`
  height: fit-content !important;
  box-shadow: 2px 2px !important;
  background-color: #ebeef0 !important;
`
const NewButton = styled(Button)`
  border-radius: 10px;
  color: grey;
  padding: 5px 5px;
  background-color: #bbe4fa;
  width: fit-content;
  box-shadow: 1px 1px;
`

const StyledButton = styled.div`
  border-radius: 10px;
  margin: 10px 30px;
  color: grey;
  padding: 5px 5px;
  background-color: #bbe4fa;
  width: fit-content;
  float: right;
  box-shadow: 1px 1px;

  transition: background 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: white;
    transition: background 0.2s ease;
  }
`

export default Departments;


