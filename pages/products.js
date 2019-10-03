import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Products from '../components/Products';
import { getProducts, getCategories } from '../redux/actions';

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>Market - Products Page</title>
        <link rel="icon" href="/static/favicon.ico" importance="low" />
      </Head>

      <div className="hero">
        <h1>Market</h1>
        <p>
          by{' '}
          <a href="https://github.com/mmackovic024" target="_blank" rel="noopener, nporeferrer">
            mmackovic024
          </a>
        </p>
      </div>

      <div className="main">
        <Products />
      </div>
      <div className="link">
        <Link href="/">
          <a>HOME PAGE</a>
        </Link>
      </div>
      <style jsx>{`
        :global(*) {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }

        .hero {
          width: 80%;
          margin: 1rem auto;
          padding: 1rem 0.5rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          text-align: center;
        }

        .main {
          width: 80%;
          margin: 0 auto;
          padding: 0.5rem;
          border: 2px solid black;
        }

        .link {
          margin: 2rem auto;
          text-align: center;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

ProductsPage.getInitialProps = ({ reduxStore }) => {
  reduxStore.dispatch(getProducts());
  reduxStore.dispatch(getCategories());

  return {};
};

export default ProductsPage;
