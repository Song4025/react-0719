import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Select, Button } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice}</div>
          <Form.Select
            aria-label="Default select example"
            className="size-choice"
          >
            <option>사이즈 선택</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
          </Form.Select>
          <Button variant="dark" className="add-btn">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
