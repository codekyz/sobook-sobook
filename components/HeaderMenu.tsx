import Link from "next/link";
import styled from "styled-components";
import LogInMenu from "./LogInMenu";
import SearchBar from "./SearchBar";
import Title from "./Title";

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: auto;
  margin: 10px;
  border: 1px solid ${(props) => props.theme.fontColor};
  a {
    place-self: center;
  }
`;

export default function HeaderMenu() {
  return (
    <Header>
      <Link href="/signup">
        <a>
          <LogInMenu />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Title />
        </a>
      </Link>
      <SearchBar />
    </Header>
  );
}
