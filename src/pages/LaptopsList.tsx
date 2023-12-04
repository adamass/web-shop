import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem/StoreItem";
import useLaptops from "../hooks/useLaptops";

const LaptopsList = () => {
  const { data, isLoading, error } = useLaptops();
  return (
    <>
      <h1 className="d-flex justify-content-center">Laptops</h1>
      <br />
      {error && (
        <p className="text-danger d-flex justify-content-center">{error}</p>
      )}
      {isLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "600px" }}
        >
          <div className="spinner-border"></div>
        </div>
      )}
      <Row md={2} xs={1} lg={3} className="g-3">
        {data.map((product) => (
          <Col key={product.id} className="my-5">
            {<StoreItem {...product} />}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default LaptopsList;
