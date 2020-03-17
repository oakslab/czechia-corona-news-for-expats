import styled from "styled-components"
import { Tabs } from "antd"

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav-container {
    background: rgba(33, 33, 33, 1);
    display: flex;
    justify-content: center;
    .ant-tabs-tab {
      color: rgba(33, 255, 255, 0.4);
      padding: 10px 20px;
      margin: 0 20px;
    }
    .ant-tabs-nav .ant-tabs-tab-active {
      color: #fff;
    }
    .ant-tabs-ink-bar {
      background-color: #fff;
    }
  }
  .ant-tabs-tab-prev-icon,
  .ant-tabs-tab-next-icon {
    color: #fff;
  }
`

export const Icon = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 10px;
  .anticon {
    font-size: 20px;
  }
`
