import styled from "styled-components"
import responsive from "../../utils/responsive"

export const StyledHeading = styled.div`
  padding: ${responsive(10, 50)} ${responsive(10, 0)};
  background: red;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(0deg, rgba(33, 33, 33, 1), rgba(33, 33, 33, 0.8)),
    url("/images/prague.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  h1 {
    font-size: ${responsive(20, 36)};
    font-weight: 700;
    color: #fff;
  }
  p {
    margin: 20px 0;
    padding: 0 30px;
    max-width: 600px;
    color: #fff;
  }
  .ooo {
    font-size: 20px;
  }
`
