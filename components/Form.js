import React from 'react';
import { useDispatch } from 'react-redux';
import { saveProduct } from '../redux/actions';

const Form = () => {
  const INITIAL_DATA = {
    name: '',
    type: '',
    price: '',
    description: ''
  };
  const [data, setData] = React.useState(INITIAL_DATA);
  const dispatch = useDispatch();

  const handleInput = e => {
    e.persist();
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(saveProduct(data));
    setData(INITIAL_DATA);
  };

  return (
    <>
      <div>
        <h2>Enter new Product</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={data.name} onChange={handleInput} />
          <label htmlFor="type">Type:</label>
          <input type="text" name="type" value={data.type} onChange={handleInput} />
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" value={data.price} onChange={handleInput} />
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" value={data.description} onChange={handleInput} />
          <input type="submit" name="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </div>
      <style jsx>{`
        div {
          width: 100%;
        }

        h2 {
          text-align: center;
        }

        form {
          width: 90%;
          margin: 0.5rem auto;
          padding: 0.5rem;
          border: 1px solid lightgrey;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        input {
          margin: 0.25rem 0;
        }

        input:last-child {
          width: 50%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Form;
