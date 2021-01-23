import styled from "styled-components";

const HeaderComp = styled.div`
  position: absolute;
  top: 32px;
  left: 80px;
  color: #fbfbfb;
  fontsize: 18px;
  fontfamily: 'Roboto", "Helvetica", "Arial", sans-serif';
  fontweight: 300;
  lineheight: 30px;

  @media (max-width: 768px) {
    top: 32px;
    left: 40px;
  }
`;

const Header = () => <HeaderComp>{process.env.REACT_APP_NAME}</HeaderComp>;

export default Header;
