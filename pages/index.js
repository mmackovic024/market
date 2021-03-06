import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getProducts, getCategories } from '../redux/actions';
import Products from '../components/Products';
import Form from '../components/Form';

const Home = () => {
  return (
    <>
      <Head>
        <title>Market - Home Page</title>
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
        <div>
          <Form />
        </div>

        <div>
          <Products />
        </div>
      </div>
      <div className="link">
        <Link href="/products">
          <a>PRODUCTS PAGE</a>
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
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          border: 2px solid black;
        }

        .main > div {
          height: 500px;
          background-color: #fff;
          border: 1px solid grey;
        }

        .main > div:first-child {
          width: 34%;
        }

        .main > div:last-child {
          width: 64%;
        }

        .link {
          margin: 2rem auto;
          text-align: center;
          font-weight: 600;
        }

        @media (max-width: 1000px) {
          .main {
            flex-direction: column;
          }

          .main > div {
            height: auto;
          }

          .main > div:first-child {
            margin-bottom: 0.5rem;
          }

          .main > div:first-child,
          .main > div:last-child {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};
Home.getInitialProps = ({ reduxStore }) => {
  reduxStore.dispatch(getProducts());
  reduxStore.dispatch(getCategories());

  return {};
};

export default Home;
