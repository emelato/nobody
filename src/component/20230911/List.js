import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: orange;
`;

const TitleBlue = styled(Title)`
  color: blue;
`;

const Border = styled.img`
  border-radius: 50%;
`;

export function List() {
  const products = [
    { title: "Banana" },
    { title: "Apple" },
    { title: "Grape" },
  ];
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/fbPFOeHb.jpg",
    imageSize: 90,
  };
  return (
    <>
      <h1>List Component</h1>
      <p>리액트 연습 코드</p>
      <ul>
        {products.map((p) => {
          return <li>{p.title}</li>;
        })}
        ;
      </ul>
      <Container>
        <Title>
          <h3>{user.name}</h3>
        </Title>

        <Border src={user.imageUrl} />
      </Container>
    </>
  );
}
