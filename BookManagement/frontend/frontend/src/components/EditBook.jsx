import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetBooks, UpdateBook } from '../services/service';

function EditBook({ onEdit }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    Name: '',
    Author: '',
    Description: '',
    Price: ''
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await GetBooks(); // Or backend API to get single book
        const selected = res.data.find(b => b.id === parseInt(id));
        if (selected) setBook(selected);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UpdateBook(id, book); // call backend PUT API
      onEdit(); // refresh book list in parent
      navigate('/'); // go back to home page
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="Name" placeholder='book Name' value={book.Name} onChange={handleChange} />
      <input type="text" name="Author" placeholder='Author' value={book.Author || ''} onChange={handleChange} />
      <input type="text" name="Description" placeholder='Description' value={book.Description || ''} onChange={handleChange} />
      <input type="number" name="Price" placeholder='Price' value={book.Price} onChange={handleChange} />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditBook;
