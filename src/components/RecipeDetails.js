import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRecipeDetailsQuery } from '../redux/apiSlice';
import { Container, Card, Alert, Spinner } from 'react-bootstrap';

const RecipeDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetRecipeDetailsQuery(id);

  if (isLoading) return <Spinner animation="border" variant="primary" />;
  if (error) return <Alert variant="danger">Error: {error.message}</Alert>;

  return (
    <Container className="mt-5 mb-5">
      {data && (
        <Card className="custom-card-margin">
          <Card.Img variant="top" src={data.image} alt={data.title} />
          <Card.Body>
            <Card.Title className="text-center">{data.title}</Card.Title> {/* Center title text */}
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: data.instructions }} />
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default RecipeDetails;
