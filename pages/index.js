import React from 'react';
import Head from 'next/head';

const Home = () => (
  <>
    <div>
      <Head>
        <title>Market</title>
        <link rel="icon" href="/static/favicon.ico" importance="low" />
      </Head>

      <div className="hero">
        <h1>Market</h1>
        <p>
          by{' '}
          <a href="https://github.com/mmackovic024" target="_blank" rel="noopener, nporeferrer">
            https://github.com/mmackovic024
          </a>
        </p>
      </div>

      <div className="main">
        <div></div>
        <div></div>
      </div>
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
        background-color: #ddd;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .main > div {
        width: 48%;
        height: 500px;
        background-color: #fff;
        border: 2px solid black;
      }
    `}</style>
  </>
);

export default Home;
