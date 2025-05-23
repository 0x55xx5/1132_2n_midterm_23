import styled from 'styled-components';

const Wrapper = styled.div`
  main {
    width: 90vw;
    max-width: 620px;
    margin: 5rem auto;
  }
  .loading {
    text-align: center;
  }
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: hsl(205, 78%, 60%);
    margin-left: auto;
    margin-right: auto;
  }

  .single-tour {
    background: #fff;
    border-radius: 0.25rem;
    margin: 2rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
  }
  .single-tour:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  .single-tour img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }
  .tour-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .tour-info h4 {
    margin-bottom: 0;
  }
  .single-tour button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: hsl(205, 78%, 60%);
    font-size: 1rem;
    cursor: pointer;
    padding-left: 0.25rem;
  }
  .tour-price {
    color: hsl(205, 78%, 60%);
    background: hsl(205, 100%, 96%);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  .single-tour footer {
    padding: 1.5rem 2rem;
  }
  .single-tour .delete-btn {
    display: block;
    width: 200px;
    margin: 1rem auto 0 auto;
    color: hsl(360, 67%, 44%);
    letter-spacing: 0.1rem;
    background: transparent;
    border: 1px solid hsl(360, 67%, 44%);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
`;

export default Wrapper;
