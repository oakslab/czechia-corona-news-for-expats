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
        Yes, until{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.lidovky.cz/domov/v-cesku-je-214-potvrzenych-pripadu-nakazy-novym-koronavirem.A200315_070607_ln_domov_vag"
        >
          24.03.2020
        </a>
      </>
    ),
    icon: "🏠",
  },
  {
    question: "What to do when I feel unwell?",
    answer: (
      <>
        <p>
          <Emoji text="☎️" />{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.novinky.cz/zahranicni/koronavirus/clanek/ke-koronaviru-bude-fungovat-nova-infolinka-1212-40316770"
          >
            Call 1212
          </a>{" "}
          - New infoline created to handle virus-related queries
        </p>
        <p>
          <Emoji text="💬" />{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.itbiz.cz/tiskove-zpravy/studenti-cvut-vytvorili-chatbot-odpovidajici-na-otazky-ke-koronaviru"
          >
            {" "}
            Chatbot at koronavirus24.cz
          </a>
          - When the phone line is overloaded you can try the chatbot created by
          students of CTU for quick automated Q&A
        </p>
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
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.lidovky.cz/byznys/firmy-a-trhy/zakaz-neni-pro-vsechny-ridice-uberu-a-boltu-s-licenci-jezdit-smi.A200316_133007_firmy-trhy_ele"
          >
            There is no ban for any taxi service,
          </a>{" "}
          but there is for drivers without taxi licence
        </p>
        <p>
          Note that Liftago is fully operational as they only use licenced taxi
          drivers only.
        </p>
      </>
    ),
    icon: "🚖",
  },
  {
    question: "Can I use a public transport?",
    answer: (
      <>
        <p>
          Yes,{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="    https://moravskoslezsky.denik.cz/zpravy_region/hejtman-rozhodl-o-povinnem-uzivani-rousek-v-hromadne-doprave-20200317.html
            "
          >
            but it's compulsory to cover your mouth and nose.
          </a>{" "}
          Use face mask, scarf, etc.
        </p>
      </>
    ),

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
