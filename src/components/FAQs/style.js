import styled from "styled-components"
import { Collapse } from "antd"
import responsive from "../../utils/responsive"

export const Main = styled.div`
  padding: 30px 0;
`

export const StyledCollapse = styled(Collapse)`
  background: transparent !important;
  border-radius: 15px;
  overflow: hidden;
  border: 0;
  padding: 0;
  margin: 0;
  background: #fff;
  .ant-collapse-item:not(:last) {
    margin: ${responsive(15, 20)} 0 ${responsive(15, 20)};
  }
  .ant-collapse-content,
  .ant-collapse-item,
  .ant-collapse-item-active {
    border-color: rgba(0, 0, 0, 0.05);
  }
  .ant-collapse-item {
    background: rgba(255, 255, 255, 0.95);
    transition: background 0.5s linear;
    .ant-collapse-header {
      font-size: ${responsive(15, 20)};
      font-weight: bold;
      padding: ${responsive(15, 30)};
    }
  }
  .ant-collapse-item:hover {
    background: rgba(255, 255, 255, 1);
  }
`
export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .title {
    z-index: 9999;
    margin-left: ${responsive(2, 10)};
    padding: 10px 20px;
  }
`

export const Icon = styled.div`
  z-index: 999;
  font-size: 40px;
`

export const Answer = styled.div`
  font-size: ${responsive(15, 20)};
`
