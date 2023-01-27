import React from "react";
import { BreadCrumb, Meta } from "../components/index";
import Container from "../components/Container";

const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms and Conditions"} />
      <BreadCrumb title="Terms and Conditions" />

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

export default TermsAndConditions;
