import React from "react"
import { StickyContainer, Sticky } from "react-sticky"
import { StyledTabs, Icon } from "./style"
import News from "../News"
import Stats from "../Stats"
import Container from "../Container"
import FAQs from "../FAQs"
import {
  QuestionCircleFilled,
  AlertFilled,
  SignalFilled,
} from "@ant-design/icons"

const { TabPane } = StyledTabs

const tabList = [
  { name: "FAQs", component: <FAQs />, icon: <QuestionCircleFilled /> },
  { name: "Outbreak Stats", component: <Stats />, icon: <SignalFilled /> },
  { name: "News", component: <News />, icon: <AlertFilled /> },
]

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 999999 }} />
    )}
  </Sticky>
)

const Tabs = () => (
  <StickyContainer>
    <StyledTabs
      defaultActiveKey="0"
      onChange={() => {}}
      renderTabBar={renderTabBar}
    >
      {tabList.map((tab, i) => (
        <TabPane
          tab={
            <>
              <Icon>{tab.icon}</Icon>
              {tab.name}
            </>
          }
          key={i}
        >
          <Container>{tab.component}</Container>
        </TabPane>
      ))}
    </StyledTabs>
  </StickyContainer>
)

export default Tabs
