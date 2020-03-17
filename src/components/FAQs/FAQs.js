import React from "react"
import { StyledCollapse, Icon, Header, Answer, Main } from "./style"
import Emoji from "react-emoji-render"
import { MinusOutlined, PlusOutlined } from "@ant-design/icons"

const { Panel } = StyledCollapse

const faqList = [
  {
    question: "Are we under quarantine?",
    answer: (
      <>
        Yes, until <b>24.03.2020</b>
      </>
    ),
    icon: "🏠",
  },
  {
    question: "What to do when I feel unwell?",
    answer: (
      <>
        <h1>
          <Emoji text="☎️" />
          &nbsp; Call 1212
        </h1>
        <p>New infoline created to handle virus-related queries</p>
      </>
    ),
    icon: "🤧",
  },
  {
    question: "Do I need a proof that I'm going shopping or to work?",
    answer:
      "No, the government says that there will be no checks at this moment.",
    icon: "💼",
  },
  {
    question: "I have a doctor/dentist visit planned, can I go?",
    answer:
      "Check with the doctor. A lot of doctor/dentist offices closed because of shortage of respirators.",
    icon: "👨‍⚕️",
  },
  {
    question: "Can I use a taxi?",
    answer: (
      <>
        <p>
          Yes, official taxi service is operational, however alternative taxi
          services (uber, taxify) are banned.
        </p>
        <p>
          Note that Liftago is operational as they use licenced taxi drivers
          only.
        </p>
      </>
    ),
    icon: "🚖",
  },
  {
    question: "Can I use a public transport?",
    answer:
      "Yes, but it's compulsory to cover your mouth and nose. Use face mask, scarf, etc.",
    icon: "🚉",
  },
]

const FAQs = () => (
  <Main>
    <StyledCollapse
      expandIcon={({ isActive }) =>
        isActive ? <MinusOutlined /> : <PlusOutlined />
      }
      expandIconPosition="right"
      // defaultActiveKey={faqList.map((_, index) => index)}
      accordion
      onChange={() => {}}
    >
      {faqList.map((faq, i) => (
        <Panel
          header={
            <>
              <Header>
                <Icon>
                  <Emoji text={faq.icon} />
                </Icon>
                <span className="title">{faq.question}</span>
              </Header>
            </>
          }
          key={i}
        >
          <Answer>{faq.answer}</Answer>
        </Panel>
      ))}
    </StyledCollapse>
  </Main>
)
export default FAQs
