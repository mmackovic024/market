import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const { products } = useSelector(store => store);
  const columns = Object.keys(products[0]);
  columns.splice(columns.indexOf('price') + 1, 0, 'pricePDV');

  return (
    <>
      <div>
        <h2>Products</h2>
        <table>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={`col_${i}`}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((prod, i) => (
              <tr key={`row_${i}`}>
                <td>{prod.name}</td>
                <td>{prod.type}</td>
                <td>{prod.price}</td>
                <td>{prod.price * 1.2}</td>
                <td>{prod.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        h2 {
          text-align: center;
        }

        table {
          width: 95%;
          margin: 0.5rem auto;
          border: 1px solid lightgrey;
          border-collapse: collapse;
        }

        th {
          font-weight: 600;
          text-transform: capitalize;
        }

        th,
        td {
          padding: 0.125rem;
          border: 1px solid lightgrey;
        }
      `}</style>
    </>
  );
};

export default Products;
