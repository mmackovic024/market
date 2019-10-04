import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const PDV = 0.2;
  const { products, categories } = useSelector(store => store);
  const columns = Object.keys(products[0]);
  const priceColumnIndex = columns.indexOf('price');
  columns.splice(priceColumnIndex + 1, 0, 'pricePDV');
  const rows = products.map(prod => Object.values(prod));
  rows.forEach(row => {
    row.splice(priceColumnIndex + 1, 0, row[priceColumnIndex] * (1 + PDV));
  });

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
            {rows.map((row, i) => (
              <tr key={`row_${i}`}>
                {row.map((td, i) => (
                  <td key={`td_${i}`}>{td}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        div {
          overflow-x: auto;
        }

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
