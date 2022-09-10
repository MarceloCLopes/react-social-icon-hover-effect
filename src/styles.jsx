import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export const Menu = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  width: 75px;
  height: 75px;
  margin: 0 10px;
  cursor: pointer;
  line-height: 75px;
  text-align: center;
  border-radius: 50%;
  border: 5px solid #fff;
  float: left;
  transition: all 0.5s ease;

  svg {
    color: #fff;
    font-size: 25px;
    transition: all 0.5s ease;
  }

  &:hover:nth-child(1) {
    border: 5px solid #3b5998;
    box-shadow: 0 0 15px #3b5998;
    transition: all 0.5s ease;

    &:hover {
      .facebook {
        color: #3b5998;
        box-shadow: 0 0 15px #3b5998;
      }
    }
  }

  &:hover:nth-child(2) {
    border: 5px solid #00aced;
    box-shadow: 0 0 15px #00aced;
    transition: all 0.5s ease;

    &:hover {
      .twitter {
        color: #00aced;
        box-shadow: 0 0 15px #00aced;
      }
    }
  }

  &:hover:nth-child(3) {
    border: 5px solid #bc2a8d;
    box-shadow: 0 0 15px #bc2a8d;
    transition: all 0.5s ease;

    &:hover {
      .instagram {
        color: #bc2a8d;
        box-shadow: 0 0 15px #bc2a8d;
      }
    }
  }

  &:hover:nth-child(4) {
    border: 5px solid #dd4b39;
    box-shadow: 0 0 15px #dd4b39;
    transition: all 0.5s ease;

    &:hover {
      .google {
        color: #dd4b39;
        box-shadow: 0 0 15px #dd4b39;
      }
    }
  }

  &:hover:nth-child(5) {
    border: 5px solid #4dc247;
    box-shadow: 0 0 15px #4dc247;
    transition: all 0.5s ease;

    &:hover {
      .whatsapp {
        color: #4dc247;
        box-shadow: 0 0 15px #4dc247;
      }
    }
  }
`;
