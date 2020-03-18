import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class ItemForm extends Component {
  state = { name: "" };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name, price } = this.state;
    const { menuId } = this.props;
    this.props.addItem(menuId, name, price);
    this.setState({ name: "", price: "" });
  };

  render() {
    const { name, price } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="Item Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            placeholder="Item Price"
            name="price"
            type="number"
            value={price}
            onChange={this.handleChange}
          />
          <Form.Button content="Submit" />
        </Form.Group>
      </Form>
    );
  }
}

export default ItemForm;