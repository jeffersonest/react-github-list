import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  componentDidMount() {
    this.loadProducts();
  }

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  };

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  };
  render() {
    const { products, page, productInfo } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a>Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Retornar</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Avançar</button>
        </div>
      </div>
    );
  }
}

export default Main;