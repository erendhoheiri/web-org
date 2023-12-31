import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: inline-block;
  border-radius: 12px;
  .img {
    height: 250px;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    filter: grayscale(100%);
    width: 100%;
    [data-main-image] {
      transition: 0.3s ease-in-out transform;
    }
  }
  .title {
    margin-bottom: 0.5rem;
  }
  .publishedAt {
    margin-bottom: 0.3rem;
  }
  &:hover {
    .img [data-main-image] {
      transform: scale(1.05);
    }
    .title {
      color: var(--primary);
    }
  }
  .categoriesText {
    a {
      color: var(--primary);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      margin-bottom: 0.5rem;
    }
  }
`;
