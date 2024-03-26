
import "./Recipes.css";

export default function Recipes() {
  return (
    <div className="my-5">
      <div
        className="text-group mx-auto"
      >
        <p className="recipes-text senFont800 fontSize144">Recipes</p>
      </div>
      <div
        className="my-4 mx-auto d-flex justify-content-between"
        style={{ width: "1199px", height: "504px" }}
      >
        <div
          className="image-1 bg-white"
          style={{ width: "385px", height: "504px" }}
        >
          <div style={{ width: "383px", height: "285px" }}>
            <img src='../../../public/wha-img3.png' className="w-100" alt="" />
          </div>
          <div
            className="mx-auto mt-4 mb-1"
            style={{ width: "325px", height: "24px" }}
          >
            <p className="ser-sm-lo">Lorem Ipsum</p>
          </div>
          <div className="mx-auto" style={{ width: "325px", height: "120px" }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
        <div
          className="image-2 bg-white"
          style={{ width: "385px", height: "504px" }}
        >
          <div style={{ width: "383px", height: "285px" }}>
            <img src='../../../public/what-img1.png' className="w-100" alt="" />
          </div>
          <div
            className="mx-auto mt-4 mb-1"
            style={{ width: "325px", height: "24px" }}
          >
            <p className="ser-sm-lo">Lorem Ipsum</p>
          </div>
          <div className="mx-auto" style={{ width: "325px", height: "120px" }}>
            <p className="ser-lg-lo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
        <div
          className="image-3 bg-white"
          style={{ width: "385px", height: "504px" }}
        >
          <div style={{ width: "383px", height: "285px" }}>
            <img src='../../../public/wha-img2.png' className=" w-100 ser-image" alt="" />
          </div>
          <div
            className="mx-auto mt-4 mb-1"
            style={{ width: "325px", height: "24px" }}
          >
            <p className="ser-sm-lo">Lorem Ipsum</p>
          </div>
          <div className="mx-auto" style={{ width: "325px", height: "120px" }}>
            <p className="ser-lg-lo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
      </div>
      <div
        className="ser-help my-4 bg-color text-white mx-auto  d-flex justify-content-center align-items-center"
        style={{ width: "195px", height: "60px" }}
      >
        <p className="m-0">Contact Us</p>
      </div>
    </div>
  );
}
