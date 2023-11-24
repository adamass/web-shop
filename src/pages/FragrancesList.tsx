import { Col, Row } from "react-bootstrap";
import useFragnaces from "../hooks/useFragnances";
import StoreItem from "../components/StoreItem/StoreItem";

const FragrancesList = () => {
  const { data, isLoading, error } = useFragnaces();

  return (
    <>
      <h1 className="d-flex justify-content-center">Fragnances</h1>
      <br />
      {error && (
        <p className="text-danger d-flex justify-content-center">{error}</p>
      )}
      {isLoading && <div className="spinner-border"></div>}
      <Row md={2} xs={1} lg={3} className="g-3">
        {data.map((product) => (
          <Col key={product.id}>{<StoreItem {...product} />}</Col>
        ))}
      </Row>
    </>
  );
};

export default FragrancesList;
