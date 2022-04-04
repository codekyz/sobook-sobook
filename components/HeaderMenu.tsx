import styled from "styled-components";
import LogInMenu from "./LogInMenu";
import SearchBar from "./SearchBar";
import Title from "./Title";

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: auto;
  margin: 10px;
  gap: 1px;
  border: 1px solid ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.fontColor};
  * {
    background-color: ${(props) => props.theme.backColor};
    display: flex;
  }
`;

export default function HeaderMenu() {
  return (
    <>
      <Header>
        <LogInMenu />
        <Title />
        <SearchBar />
      </Header>
    </>
  );
}
