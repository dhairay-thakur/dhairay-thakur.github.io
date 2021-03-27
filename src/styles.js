import styled from "styled-components";

export const Intro = styled.div`
  min-height: 92vh;
  display: flex;
  flex-wrap: wrap-reverse;
  padding: 5rem 10rem;
  color: white;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 60vh;
    height: 60vh;
    object-fit: cover;
    border-radius: 60vh;
  }
`;

export const Text = styled.div`
  overflow: hidden;
`;
