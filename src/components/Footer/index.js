import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMenus } from '../../context/MenuProvider'

const StyledContainer = styled.div`
  background: #000;
  color: #fff;
  padding: 3rem 0;

  .footer-menu-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .footer-menu-col {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-bottom: 2rem;
  }

  .footer-menu-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .footer-menu-item {
    margin-bottom: 0.8rem;
    color: #aaa;
  }
  .footer-menu-item.apply {
    width: 120px;
    background: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
  }
  .copy-right {
    text-align: center;
    color: #aaa;
  }
  .divider {
    border-top: 1px solid #aaa;
    margin: 2rem 0;
  }

  @media screen and (max-width: 992px) {
    .footer-menu-col {
      width: 50%;
    }
  }
  @media screen and (max-width: 468px) {
    .footer-menu-col {
      width: 100%;
    }
  }
`;

function Footer() {
  const {handleClickMenu, onClickApply} = useMenus;
  return (
    <StyledContainer>
      <Container>
        <div className="footer-menu-group">
          <div className="footer-menu-col">
            <span className="footer-menu-title">Our Payload Loans</span>
            <Link onClick={onClickApply} to='/apply' className="footer-menu-item apply">Apply Now</Link>
          </div>
          <div className="footer-menu-col">
            <span className="footer-menu-title">Stuff to Read</span>
            <Link onClick={handleClickMenu} to='/how-it-works' className="footer-menu-item">How it Works</Link>
            <Link onClick={handleClickMenu} to='/contact' className="footer-menu-item">About Us</Link>
            <Link onClick={handleClickMenu} to='/faqs' className="footer-menu-item">FAQs</Link>
            <Link onClick={handleClickMenu} to='/contact' className="footer-menu-item">Contact Us</Link>
          </div>

          <div className="footer-menu-col">
            <span className="footer-menu-title">Legal Stuff</span>
            <Link to='/privacy-rights' className="footer-menu-item">Privacy Statement</Link>
            <Link to='/terms' className="footer-menu-item">Terms and Conditions</Link>
            <Link to='/how-it-works' className="footer-menu-item">Disclaimer</Link>
          </div>
          <div className="footer-menu-col">
            <span className="footer-menu-title">About Us</span>
            <p className="footer-menu-item text">
              Gotloaned.com will lend up to $1000 to $5000 to new customers. But
              this amount may not be available for everyone. Applying for a loan
              via the application form does not guarantee that we will approve a
              loan. The time between loan approval and transfer of funds may
              vary depending on security checks.
            </p>
          </div>
        </div>
        <div className="copy-right">
          &copy; Copyright 2020 Gotloaned.com | All rights reserved
        </div>
        <div className="divider"></div>
        <div className="footer-menu-item text">
          Short-term loans are not intended to be long-term financial solutions.
          Customers with credit difficulties should seek credit counseling. A
          single payday advance is typically for two to four weeks. However,
          borrowers often use these loans over a period of months, which can be
          expensive. This website does not make loan offers. This website
          connects users with lenders. The operator of this website is not a
          lender, does not make credit decisions or broker loans. The operator
          of this website does not charge you fees for its service and does not
          represent or endorse any participating shorter-duration loan lender.
          Submitting a loan request allows us to connect you to third-party
          lenders and does not guarantee an offer for a loan This website does
          not guarantee the approval for a shorter-duration loan Credit checks
          may be performed by lenders from credit bureaus or other providers of
          credit information. Consumer reports or credit checks may be made by
          the lender through Equifax, Experian, TransUnion, or alternative
          providers. You are not obligated to use this site and are not
          obligated to contract with any third-party lender or service provider.
          These disclosures are for informational purposes only and should not
          be considered legal advice. NOT A LENDER NOTICE The operator of this
          website is NOT a lender, does not make offers for loans, and does not
          broker online loans to lenders. This website is not a representative
          or agent of any lender and does not make credit decisions. Submission
          of a loan request to this website does not guarantee an offer or an
          approval for a loan Some lenders may require faxing of information. In
          some instances you may have to visit a physical store/branch location
          to complete your loan request process. Please contact your lender
          directly with questions or issues regarding your loan.
        </div>
      </Container>
    </StyledContainer>
  );
}

export default Footer;
