import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

import { CartContext } from '../contexts/CartProvider';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/products').then((res) => {
      this.setState({
        products: [...res.data]
      })
    });
  }

  render() {
    const { products } = this.state;

    return (
      <Container> 
        <Row>
          {
            products.map(product => {
              return (
                <Col lg="4" sm="6" key={product.id} style={{marginBottom: "20px" }}>
                  <Card> 
                    <CardImg top width="100%" height="200px" src={product.imgUrl} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{product.name}</CardTitle>
                      <CardText>{product.description}</CardText>
                      <CartContext.Consumer>
                        {
                          ({ addToCart }) => 
                          <Button onClick={() => addToCart(product)} 
                          className="mx-auto">Add To Cart</Button>
                        }
                      </CartContext.Consumer>
                    </CardBody>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    );
  }
}

export default Products;
