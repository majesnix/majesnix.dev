import styled from "styled-components";

const Style = styled.div`
  color: #999;
  margin: 1.071rem auto 0;
  max-width: 600px;
  text-align: center !important;
`;

const Description: React.FC = (props) => <Style>{props.children}</Style>;

export default Description;
