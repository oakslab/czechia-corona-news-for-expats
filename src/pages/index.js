import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div class="flex mb-4">
        <div class="w-1/2 h-12">
          <div class="max-w-sm rounded overflow-hidden shadow-lg justify-center">
            <div class="px-6 py-4">
              <h1 class="font-bold text-xl mb-2 text-center">
                Are we under quarantine?
              </h1>
              <p class="text-red-600 center text-6xl text-center">YES</p>
            </div>
            <div class="px-6 py-4 text-center">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Until 24.03.2020
              </span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg justify-center">
            <div class="px-6 py-4">
              <h1 class="font-bold text-xl mb-2 text-center">
                What to do when I feel unwell?
              </h1>
              <p class="text-red-600 center text-4xl text-center">Call 1212</p>
              <p class="center text-center">
                New infoline created to handle virus-related queries (Not sure
                if they are english-speaking)
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg justify-center">
            <div class="px-6 py-4">
              <h1 class="font-bold text-l mb-2 text-center">
                Do I need a proof that I'm going shopping/to work?
              </h1>
              <p class="text-green-600 center text-l text-center">
                No, the government says that there will be no checks at this
                moment.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg justify-center">
            <div class="px-6 py-4">
              <h1 class="font-bold text-xl mb-2 text-center">
                I have a doctor/dentist visit planned, can I go
              </h1>
              <p class="text-red-800 center text-l text-center">
                Check with the doctor. A lot of doctor/dentist offices closed
                because of shortage of respirators.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg justify-center">
            <div class="px-6 py-4">
              <h1 class="font-bold text-xl mb-2 text-center">
                Can I use a taxi?
              </h1>
              <p class="text-green-800 center text-l text-center">
                Yes, official taxi service is operational, however alternative
                taxi services (uber, taxify, liftago) are banned.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg justify-center">
            <div class="px-6 py-4">
              <h1 class="font-bold text-xl mb-2 text-center">
                Can I use a public transport?
              </h1>
              <p class="text-green-800 center text-l text-center">
                Yes, but it's compulsory to cover your mouth and nose. Use face
                mask, scarf, etc.
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-12">
          <h2 class="font-bold">
            All free movement is forbidden, apart from these exceptions
          </h2>

          <ul class="list-disc list-inside">
            <li>travel to work and business</li>
            <li>necessary trips to family or loved ones</li>
            <li>travel to the doctor</li>
            <li>
              the purchase of food, drugstores, medicines, medical devices or
              animal feed
            </li>
            <li>use of necessary financial and postal services, fuel</li>
            <li>
              provision of services for another person, eg neighborhood
              assistance or volunteering
            </li>
            <li>necessary escort of relatives</li>
            <li>urgent official matter</li>
            <li>
              the pursuit of a profession, such as police, paramedics or social
              care
            </li>
            <li>individual spiritual care and services</li>
            <li>supply and distribution services</li>
            <li>veterinary care</li>
            <li>stays in nature, parks</li>
            <li>funerals</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
