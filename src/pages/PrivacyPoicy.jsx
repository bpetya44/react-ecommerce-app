import React from "react";
import Container from "../components/Container";
import { BreadCrumb, Meta } from "../components/index";

const PrivacyPoicy = () => {
  return (
    <>
      <Meta title={"Priavacy Policy"} />
      <BreadCrumb title="Priavacy Policy" />

      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPoicy;
