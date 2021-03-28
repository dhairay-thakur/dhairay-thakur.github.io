import styled from "styled-components";

export const Intro = styled.div`
  min-height: 92vh;
  display: flex;
  flex-wrap: wrap-reverse;
  padding: 5rem 10rem;
  color: white;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 800px) {
    padding: 0;
    button {
      margin: 1rem 2rem 5rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 30vw;
    height: 30vw;
    object-fit: cover;
    border-radius: 30vw;
  }
  @media (max-width: 800px) {
    img {
      width: 50vw;
      height: 50vw;
      border-radius: 50vw;
      object-fit: cover;
    }
  }
`;

export const Text = styled.div`
  overflow: hidden;
`;
