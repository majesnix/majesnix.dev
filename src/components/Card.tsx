import styled from "styled-components";

const CardComp = styled.div`
  height: calc(100% - 35px);
  width: calc(100% - 64px);
  color: #999;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 32px rgba(90, 90, 90, 0.2);
  position: relative;
  margin-left: 32px;
  margin-top: -40px;
  background-color: #121212;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    width: calc(100% - 96px);
    margin-top: -80px;
    margin-left: 32px;
    margin-right: 32px;
    padding: 16px;
  }
`;

const Card: React.FC = (props) => {
  return <CardComp>{props.children}</CardComp>;
};

export default Card;
