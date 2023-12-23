import React from 'react'
import "./Home.css"
import {
    Button,
    List,
    ContextSwitch
} from '../../components/componentRegistry';

const Home = () => {
    return (<>
        <div className="home first-section">
            <div className="header">
                <div className="brand">
                    <img src="./site-logo.png" alt="logo" />
                </div>

                <Button>Get a Free Trial</Button>
            </div>
            {/* <hr style={{borderTop:"1px solid #163a59"}}/> */}
                <h1 className="main-heading"><span className="emphasis">#1 Alternative</span> to <span style={{color:"#c4aa46", backgroundColor:"transparent"}}>Social Studio.</span> Seamlessly Integrate with Salesforce</h1>
                <h3 className="sub-heading"><b>Introducing Konnect Insights</b>, an <b>ALL-IN-ONE platform</b> for <b>Social Listening, Social Care, Social Analytics, Social Publishing</b> and much more!</h3>

                <div className="request-trial-form">

                </div>

                <div className="brand-partners">
                    <h4 className='brand-partners heading'> TRUSTED BY 1000+ GLOBAL BRANDS</h4>
                    <div className="brand-partners logo">
                        <div className="logo-array">
                            <img src="./siteLogos/mcdonald.png" alt="" />
                            <img src="./siteLogos/oppo.png" alt="" />
                            <img src="./siteLogos/airindia.png" alt="" />
                            <img src="./siteLogos/ooredoo.png" alt="" />
                            <img src="./siteLogos/volkswagen.png" alt="" />
                            <img src="./siteLogos/zomato.png" alt="" />
                            <img src="./siteLogos/honda.png" alt="" />
                            <img src="./siteLogos/decathlon.png" alt="" />
                        </div>
                        <div className="logo-array">
                            <img src="./siteLogos/mcdonald.png" alt="" />
                            <img src="./siteLogos/oppo.png" alt="" />
                            <img src="./siteLogos/airindia.png" alt="" />
                            <img src="./siteLogos/ooredoo.png" alt="" />
                            <img src="./siteLogos/volkswagen.png" alt="" />
                            <img src="./siteLogos/zomato.png" alt="" />
                            <img src="./siteLogos/honda.png" alt="" />
                            <img src="./siteLogos/decathlon.png" alt="" />
                        </div>
                    </div>
                </div>


            
        </div>
        {/* <List listId="brand-partners">
        <div className="feature-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""></img>
                    <p>Send social media tickets & contacts to Salesforce</p>
        </div>
        <div className="feature-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""></img>
                    <p>Send social media tickets & contacts to Salesforce</p>
        </div>
        <div className="feature-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""></img>
                    <p>Send social media tickets & contacts to Salesforce</p>
        </div>
        </List> */}

        <div className="home second-section">
                <h2 className="features-heading">
                    Why Konnect Insights is the <span className="emphasis">Best Social Studio Alternative?</span>
                </h2>

                <div className="features-container">
                    <div className="feature-box">
                        <img src="./featuresPng/1.png" alt="" />
                        <p>Create rules to automate pushing tickets</p>
                    </div>
                    <div className="feature-box">
                        <img src="./featuresPng/2.png" alt="" />
                        <p>Seamlessly sync status in both systems</p>
                    </div>
                    <div className="feature-box">
                        <img src="./featuresPng/3.png" alt="" />
                        <p>Achieve field/object mapping</p>
                    </div>
                    <div className="feature-box">
                        <img src="./featuresPng/4.png" alt="" />
                        <p>Respond to social media tickets from salesforce</p>
                    </div>
                    <div className="feature-box">
                        <img src="./featuresPng/5.png" alt="" />
                        <p>Send social media tickets & contacts to Salesforce</p>
                    </div>
                </div>
            

                <Button>Get a Free Trial</Button>
                <p className='cc-info-p'>NO CC REQUIRED</p>

            <div className="integration-tools">
                <h4>3000+ INTEGRATIONS & 100% DATA COVERAGE ACROSS THE INTERNET!</h4>
                {/* <div className="integration-tool-logo">

                </div> */}
                <img src="./integration-app-logos.png" alt="" />
            </div>

            <h2>Benefits of the Integration</h2>

            <div className="benefits-container">
                <div className="benefits-box">
                    <img src="./integrationBenefits/1.png" alt="" />
                    <p>One-View of the customer in Salesforce</p>
                </div>
                <div className="benefits-box">
                    <img src="./integrationBenefits/2.png" alt="" />
                    <p>Empowers agents with real-time access to social media conversations</p>
                </div>
                <div className="benefits-box">
                    <img src="./integrationBenefits/3.png" alt="" />
                    <p>Lead generation from social media created as opportunities in SFDC</p>
                </div>
            </div>

            <Button>Get a Free Trial</Button>
            <p className='cc-info-p'>NO CC REQUIRED</p>

            <div className="contextSwtich" data-bs="fukc you">
                <h2><span className="emphasis">Unify</span> your <span className="emphasis">Customer Care</span> and <span className="emphasis">Marketing Insights</span></h2>
                <p>Stop spending on 10+ tools and save up to 91% of your SaaS spend.</p>

                <ContextSwitch></ContextSwitch>
            </div>

        </div>

        <div className="home third-section">


            <div className="uses-container">
            <h2 id='heading-users'><span className="emphasis">Why Teams Prefer Konnect Insights?</span></h2>
                <div className="use-box">
                    <img src="./demoUsers/user1.png" alt="" />
                    <h4>Customer Service</h4>
                    <p>
                        Enhance customer satisfaction with our unified platform, empowering customer care agents, supervisors, and stakeholders to engage, provide tailored solutions, and create happier customers. 
                    </p>
                </div>
                <div className="use-box">
                    <img src="./demoUsers/user2.png" alt="" />
                    <h4>Marketing</h4>
                    <p>
                    Gain brand clarity with our unified tool. Unlock valuable intelligence on customers, competitors, and your target segment. Meaningfully engage with your customers for enhanced satisfaction. 
                    </p>
                </div>
                <div className="use-box">
                    <img src="./demoUsers/user3.png" alt="" />
                    <h4>Agencies</h4>
                    <p>
                    Save time and effort on Social Listening, ORM, and Turnaround Time reports with Konnect Insights dashboard templates. Easily customize them to match your brand's themes and colors, earning even more brand love. 
                    </p>
                </div>
                <div className="use-box">
                    <img src="./demoUsers/user4.png" alt="" />
                    <h4>Analysts</h4>
                    <p>
                    Unlock valuable insights from the social media goldmine! Discover what users are saying about your brand, competition, and segment. Make sense of the noise with intuitive dashboards. 
                    </p>
                </div>
                <div className="use-box">
                    <img src="./demoUsers/user5.png" alt="" />
                    <h4>The PR Team</h4>
                    <p>
                    Stay ahead of crises with real-time alerts. Our mobile app and email notifications ensure you're promptly informed of potential issues before they escalate. Our system monitors social media and the entire web, providing you with immediate signals
                    </p>
                </div>
            </div>

            <Button style={{
                        backgroundColor:"#edcd54", 
                        color:"white",
                        borderRadius: "40%",
            }}>Get a Free Trial</Button>
            <p className='cc-info-p'>NO CC REQUIRED</p>
            
            <div className="testimonials-container">

                <h2>What <span className="emphasis">Customers are Saying</span> about Konnect Insights</h2>

                <div className="testimonial">
                    <p className="comment">
                    We have a seamless integration between Konnect Insights and Freshdesk. This gives us the ability to provide excellent coverage to our clients when it comes to social data. The queries coming on social media and web can be easily pushed into Freshdesk thus giving us a single view of the customer across the systemns 
                    </p>
                    <div className="product-user">
                        <div className="user-img">
                            <img src="./productUsers/1.png" alt="" />
                        </div>
                        <div className="user-detail">
                            <h4>Eric Bohren's</h4>
                            <p>Freshworks - Sr Director, Global Technology Partners and Marketplace</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p className="comment">
                    Konnect Insights is proving to be essential to my job - right from getting exhaustive coverage for my clients to being able to manage their reputation by responding to customer queries. Most importantly I find it to be intuitive, so if there is anything that I haven't been shown I can generally figure it out for myself. It is the best software of its kind that I have ever used."
                    </p>
                    <div className="product-user">
                        <div className="user-img">
                            <img src="./productUsers/2.png" alt="" />
                        </div>
                        <div className="user-detail">
                            <h4>Keith</h4>
                            <p>Tangram Consulting - Marketing & Social Media Manager</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p className="comment">
                    Konnect Insights is primarily a professional social listening and monitoring tool; but, like a Swiss army knife, it actually includes a few other full-fledged services as well:Social CRM tool: workflow and response management features; Analytics: brand, competition, and industry analysis; Social scheduling: easily schedule messages for your social profiles.
                    </p>
                    <div className="product-user">
                        <div className="user-img">
                            <img src="./productUsers/3.png" alt="" />
                        </div>
                        <div className="user-detail">
                            <h4>Lilach Bullock</h4>
                            <p>Lilach Bullock Ltd - Founder</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p className="comment">
                    Konnect Insights is incredibly powerful! I have been actively using the platform for some time now and what has impressed me the most is the in-depth reporting from social listening across channels. You can really dig in and gain actionable insights to deepen connection with your followers. The publishing tools are excellent, too.
                    </p>
                    <div className="product-user">
                        <div className="user-img">
                            <img src="./productUsers/4.png" alt="" />
                        </div>
                        <div className="user-detail">
                            <h4>Todd Nilson</h4>
                            <p>Clocktower Advisors - Vice President</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <h2 className='nextSectionHeading'><span className="emphasis">Ready to Make the Switch to Konnect Insights?</span></h2>

            <Button style={{
                        backgroundColor:"#edcd54", 
                        color:"white",
                        borderRadius: "40%",
            }}>Get a Free Trial</Button>
            <p className='cc-info-p'>NO CC REQUIRED</p>

        </div>
    </>)
}

export default Home;