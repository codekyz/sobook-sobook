import styled from "styled-components";

const LogInButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.pointColor};
    }
  }
`;

export default function LogInMenu() {
  return (
    <LogInButton>
      <span>로그인/회원가입</span>
    </LogInButton>
  );
}
