import * as React from "react"
import Layout from "../components/layout"
import Category from "../components/category"

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
          <Category>
            <h2>Education</h2>
            <section>
              <h3>BEng, Mechanical Engineering - GPA: 10.0/12.0</h3>
              <h3>June 2019</h3>
            </section>
            <section>
              <p>McMaster University</p>
              <p>Hamilton, ON</p>
            </section>
        </Category>
        <Category>
          <h2>Experience</h2>
          <section>
            <h3>Technical Support Engineer</h3>
            <h3>June 2021 - Present</h3>
          </section>
          <section>
            <p>Guidewire Software</p>
            <p>Mississagua, ON</p>
          </section>
          <ul>
            <li>Researched, responded to, and accurately resolved cases of moderate complexity using Salesforce</li>
            <li>Investigated application and infrastructure error logs to resolve cases and alerts from AWS hosted customers using SumoLogic, DataDog and Sentry</li>
            <li>Handled time-sensitive alerts and escalations during on-call shifts for production environments</li>
            <li>Guidewire Certified Professional - PolicyCenter 10 Product Support Engineer</li>
          </ul>
          <section>
            <h3>Project Engineering (Co-op Student)</h3>
            <h3>May 2017 - May 2018</h3>
          </section>
          <section>
            <p>ABC Technologies</p>
            <p>Toronto, ON</p>
          </section>
          <ul>
            <li>Designed, prototyped, and tested improvements to the mounting locations of an airbox to counteract product warpage from cooling and avoid expensive changes to the injection mold</li>
            <li>Tested, and analyzed parts from prototype tooling by leak testing to customer specifications, observing the cross section to view leak paths and informing the tool technician on areas of failure</li>
            <li>Identified the root cause of a stripped screw by dissecting the part at the failure and designed an improvement to the thread to meet torque requirements</li>
          </ul>
        </Category>
    </Layout>
  )
}

export default IndexPage
