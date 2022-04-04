import styled from "styled-components";

const SearchForm = styled.form`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

export default function SearchBar() {
  return (
    <SearchForm>
      <Input type="text" placeholder="도서를 검색하세요" />
    </SearchForm>
  );
}
