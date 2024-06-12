import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          eCommerce or electronic commerce is when a transaction occurs using the internet. An example is when a 
          customer (the buyer) purchases one or more products or services online from a virtual storefront (the seller). 
          eCommerce applications or e-commerce apps are design patterns of functionality needed to 
          list items for purchase, facilitate a transaction by accepting payment methods, and initiate fulfillment of those purchases. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
