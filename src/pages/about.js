import * as React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
        <Seo title="Page two"/>
        <h1>Hi from the about page</h1>
        <p>Welcome to about page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default AboutPage
