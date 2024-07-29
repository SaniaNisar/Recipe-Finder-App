import React, { useState } from 'react';
import { useSearchRecipesQuery } from '../redux/apiSlice';
import { Link } from 'react-router-dom';
import { Container, Form, Button, ListGroup, Alert, Spinner } from 'react-bootstrap';

const Search = () => {
  const [query, setQuery] = useState('');
  const { data, error, isLoading } = useSearchRecipesQuery(query);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
  };

  return (
    <Container className="mt-4">
      <h1>Recipe Finder App</h1>
      <Form onSubmit={handleSearch} className="mb-4 d-flex">
        <Form.Group controlId="searchQuery" className="flex-grow-1 me-2">
          <Form.Control type="text" name="query" placeholder="Search for recipes" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      {isLoading && (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {error && <Alert variant="danger">Error: {error.message}</Alert>}
      {data && (
        <ListGroup>
          {data.results.map((recipe) => (
            <ListGroup.Item key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Search;
