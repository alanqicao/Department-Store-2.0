import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class ItemForm extends Component {
  state = { items:[], name: "", price:""};

  componentDidMount() {
    const { itemId } = this.props;
    axios.get(`/api/departments/${itemId}/items`).then(res => {
      console.log(res);
      this.setState({
        items: res.data
      });
    });
  }

  deleteItem(id) {
    const { departmentId } = this.props;
    axios.delete(`/api/departments/${departmentId}/items/${id}`).then(()=>{
      const newItems = this.state.items.filter( item => item.id != id)
      this.setState({
        items:newItems
      })
    })

  }


  handleChange =(e)=>{
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
  handleSubmit=(e)=>{
    const { departmentId } = this.props;
    axios.post(`/api/departments/${departmentId}/items`,{
      name: this.state.name,
      price:this.state.price
    }).then((res)=>{
      this.setState({
        items:[res.data, ...this.state.items]
      })
    }).catch(err=>{

    })
    // this.setState({
    //   [name]: value
    // })
  }
  render() {
    const { name,  price} = this.state
    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="name"
              name="name"
              placeholder="name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Add item"
              name="price"
              placeholder="item"
              value={price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
        <Header as="h1">items 2nd example</Header>
        {this.state.items.map(item => (
          <Segment key={`item=${item.id}`}>
            <Header as="h3">{item.name}</Header>
            <p>{item.price}</p>
            <Button onClick={() => this.deleteItem(item.id)} color='red'>delete</Button>
          </Segment>
        ))}
      </Segment>
    );
  }
}

export default ItemForm;