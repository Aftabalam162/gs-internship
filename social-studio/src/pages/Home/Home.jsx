import React from 'react'
import "./Home.css"
import {
    Button,
    List
} from '../../components/componentRegistry'

const Home = () => {
    return (<>
        <div className="home first-section">
            <div className="header">
                <div className="brand">
                    <img src="" alt="logo" />
                </div>

                <Button style={{
                    backgroundColor:"#edcd54", 
                    color:"white",
                    borderRadius: "40%",
                }}>Aftab</Button>
                
                <h1 className="main-heading">#1 Alternative to Social Studio. Seamlessly Integrate with Salesforce</h1>
                <h3 className="sub-heading">Introducing Konnect Insights, an ALL-IN-ONE platform for Social Listening, Social Care, Social Analytics, Social Publishing, and much more!</h3>

                <div className="request-trial-form">

                </div>

                <div className="brand-partners">
                    <h4 className='brand-partners heading'> TRUSTED BY 1000+ GLOBAL BRANDS</h4>
                    <div className="brand-partners logo"></div>
                </div>


            </div>
        </div>

        <div className="home second-section">
            <h2 className="features-heading">
                Why Konnect Insights is the Best Social Studio Alternative?
            </h2>

            <div className="features-container">
                <div className="feature-box">
                    <img src="" alt="" />
                    <p>Create rules to automate pushing tickets</p>
                </div>
                <div className="feature-box">
                    <img src="" alt="" />
                    <p>Seamlessly sync status in both systems</p>
                </div>
                <div className="feature-box">
                    <img src="" alt="" />
                    <p>Achieve field/object mapping</p>
                </div>
                <div className="feature-box">
                    <img src="" alt="" />
                    <p>Respond to social media tickets from salesforce</p>
                </div>
                <div className="feature-box">
                    <img src="" alt="" />
                    <p>Send social media tickets & contacts to Salesforce</p>
                </div>
            </div>
        </div>
    </>)
}

export default Home;