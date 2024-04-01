import { Col, Container, Row } from "react-bootstrap";
import "./Recipes.css";
import axios from "axios";
import { useQuery } from "react-query";

export default function Recipes() {
  async function getRecipes() {
    return await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
    );
  }

  let { data } = useQuery("Recipes", getRecipes);
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="text-center mt-5">
            <p className="recipes-text senFont800 fontSize144">RECIPES</p>
          </Col>
        </Row>
      </Container>
      <div className="my-5">
        <div
          className="my-4 mx-auto d-flex justify-content-between"
          style={{ width: "1199px", height: "504px" }}
        >
          <div
            className="recipes-image rounded-5 bg-white"
            style={{ width: "385px", height: "504px" }}
          >
            <div
              style={{ width: "383px", height: "285px" }}
              className=" d-flex rounded-5 justify-content-center  align-items-center  overflow-hidden "
            >
              <img
                src={data?.data.meals[5].strMealThumb}
                className="w-100"
                alt=""
              />
            </div>
            <div
              className="mx-auto mt-4 mb-1"
              style={{ width: "325px", height: "24px" }}
            >
              <p className="recipes-rendered-data">{data?.data.meals[0].strMeal}</p>
            </div>
            <div
              className="mx-auto"
              style={{ width: "325px", height: "120px" }}
            >
              <p className="recipes-content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled
              </p>
            </div>
          </div>
          <div
            className="recipes-image rounded-5 bg-white"
            style={{ width: "385px", height: "504px" }}
          >
            <div
              style={{ width: "383px", height: "285px" }}
              className=" d-flex rounded-5 justify-content-center  align-items-center  overflow-hidden "
            >
              <img
                src={data?.data.meals[1].strMealThumb}
                className="w-100"
                alt=""
              />
            </div>
            <div
              className="mx-auto mt-4 mb-1"
              style={{ width: "325px", height: "24px" }}
            >
              <p className="recipes-rendered-data">{data?.data.meals[1].strMeal}</p>
            </div>
            <div
              className="mx-auto"
              style={{ width: "325px", height: "120px" }}
            >
              <p className="recipes-content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled
              </p>
            </div>
          </div>
          <div
            className="recipes-image rounded-5 bg-white"
            style={{ width: "385px", height: "504px" }}
          >
            <div
              style={{ width: "383px", height: "285px" }}
              className=" d-flex rounded-5 justify-content-center  align-items-center  overflow-hidden "
            >
              <img
                src={data?.data.meals[0].strMealThumb}
                className=" w-100"
                alt=""
              />
            </div>
            <div
              className="mx-auto mt-4 mb-1"
              style={{ width: "325px", height: "24px" }}
            >
              <p className="recipes-rendered-data">{data?.data.meals[5].strMeal}</p>
            </div>
            <div
              className="mx-auto"
              style={{ width: "325px", height: "120px" }}
            >
              <p className="recipes-content-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="btnAboutStyle position-relative start-50 translate-middle-x ">
        CONTACT US
      </button>
    </>
  );
}
