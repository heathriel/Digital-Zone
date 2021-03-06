import React from "react"
import Layout from "../components/layout"
import {Container, Row, Col, Button} from "react-bootstrap"

export default function index() {
    return (
        <Layout pageName="Podcast Alley" activePage='podcast-alley' containerClass="podcast-alley">
            <Row className="light-bg section" id="welcome">
                <Container>
                    <img src="../img/podcast-bug.svg" className="bug" alt="icon bug"/>
                    <h2>Welcome!</h2>
                    <div className="vimeo-embed" style={{padding:`56.25% 0 0 0`, position:`relative`}}>
                    	<iframe 
                            src="https://player.vimeo.com/video/416415760?title=0&byline=0&portrait=0" 
                            style={{position:`absolute`, top:`0`, left:`0`, width:`100%`, height:`100%`}} 
                            frameBorder="0" 
                            allow="autoplay; fullscreen" 
                            allowFullScreen
                            title="Welcome video"
                        ></iframe>
                	</div>
                	<script src="https://player.vimeo.com/api/player.js"></script>
                    <p>
                        Welcome to the wonderful world of podcasting. This is where you will learn everything you need to know about this exciting new trend in medical education!
                    </p>
                    <p>
                        I'm Julie Newman, Associate Director in Medical Affairs from Australia and I'm also the creator of the HIV in Podcast. I’ve been helping Gilead teams around the world create podcasts of their own, expanding their audience as they discuss the latest in different therapy areas.
                    </p>
                    <p>
                        Listening to medical podcasts and subscribing to medical podcasts are great ways to stay informed. They can help you gain new perspectives and they don't require any shelf space!
                    </p>
                    <p>
                        Recording a medical podcast is even better. You get to meet experts in the therapeutic area and learn about important clinical trends and practices. I highly recommend it!
                        Please explore the resources we offer on this page. Over time, we will be adding more and more, and check back often! Happy podcasting!
                    </p>
                </Container>
            </Row>
            <section className="audio-quote">
                <Container>
                    <blockquote>
                        “Powerful story telling is an essential part
                        of medical affairs, and stories told through
                        podcasts can truly help our understanding
                        of patients’ needs.”
                    </blockquote>
                    <p>
                        <b>-Geraldine Reilly</b><br/>
                        Executive Director, Medical Affairs
                    </p>
                    <div className="audio-block">
                        <Button className="block-highlight" onClick={() => this.play()}>Play Audio</Button>
                        {/*eslint-disable*/}
                        <audio id="player" controls src="../media/GeraldineReilly-PodcastingQuote.wav">
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                        {/*eslint-enable*/}
                    </div>
                </Container>
            </section>
            <Row className="light-bg section" id="what-podcast">
                <Container>
                    <img src="../img/podcast-bug.svg" className="bug" alt="icon bug"/>
                    <h2>What Is A Podcast?</h2>
                    <p>
                        A podcast is a digital audio file made available on the internet for downloading to a computer or mobile device. Podcasts are typically 10–30 minutes long and available as a series. New episodes can be automatically received by subscribers. Podcasts are an engaging and convenient way to deliver medical education because busy professionals can listen to episodes whenever, wherever and how often they like.
                    </p>
                </Container>
            </Row>
            <Row className="light-bg section" id="in-podcast">
            <Container>
                <img src="../img/podcast-bug.svg" className="bug" alt="icon bug"/>
                <h2>in Podcast @ Gilead</h2>
                <p>
                    The in Podcast series is an educational initiative created by Gilead for the benefit of healthcare professionals and patients. It explores the latest innovations in healthcare by way of interviews and insights from some of the world’s leading medical experts. Hear more about the series from its creator, Julie Newman.
                </p>
                <div className="vimeo-embed" style={{padding:`56.25% 0 0 0`, position:`relative`}}>
                    <iframe 
                        src="https://player.vimeo.com/video/416414834?title=0&byline=0&portrait=0" 
                        style={{position:`absolute`, top:`0`, left:`0`, width:`100%`, height:`100%`}} 
                        frameBorder="0" 
                        allow="autoplay; fullscreen allowfullscreen"
                        title="Podcast video"
                    ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
                <div className="in-podcast-wrapper full-width">
                    <img src="../img/in-podcast-logo.svg" className="in-podcast-banner" alt="podcast alley logo"/>
                </div>
                <p>
                    To access our podcasts, download the in Podcast app here
                </p>
                <a href="https://www.inpodcast.com" className="lg-link img-fluid" target="_blank" rel="noreferrer">www.inpodcast.com</a>
                <p>
                    <b>NOTE:</b> These podcasts are available for professionals in Australia, Denmark, Finland, Norway and Sweden only on Apple and Android devices.
                </p>
            </Container>
        </Row>
        <Row className="light-bg section" id="create-own">
            <Container>
                <img src="../img/tool-bug.svg" className="bug" alt="icon bug"/>
                <h2>Ready To Create Your Own?</h2>
                <blockquote>Download Gilead’s Guide to in Podcast</blockquote>
                <a href="../media/Gilead_PodcastingGuide.pdf">
                    <img src="../img/podcast-guide.svg" className="podcast-guide img-fluid" alt="podcast guide"/>
                </a>
            </Container>
    	</Row>
        <Row className="light-bg section" id="advice">
            <Container>
                <img src="../img/podcast-bug.svg" className="bug" alt="icon bug"/>
                <h2>Advice From Podcast Pros</h2>
                <Row>
                    <Col sm={6} className="pros">
                        <div className="headshot-bg">
                            <h3>
                                Julie Newman
                            </h3>
                                Associate Medical Director,<br/>
                                Australia Podcast Lead
                            <img src="../img/Julie_ProfilePic.png" alt="Julie Newman Headshot"/>
                        </div>
                        <ol>
                            <li>
                                Pick an engaging and engaged host. You want someone dynamic and committed to hosting the podcast series.
                            </li>
                            <li>
                                Try to utilize speakers who may already be speaking at a Gilead event. It is an easy way to share that information more broadly.
                            </li>
                            <li>
                                While you may record for an hour or so, be sure to break up the recording into smaller bits, no more than 10 minutes per segment.
                            </li>
                            <li>
                                Create a slide announcing the podcasts and include that at Gilead meetings. The podcasts are on-label, so that you can share with your local HCPs.
                            </li>
                            <li>
                                If possible, work with a local medical society to accredit or endorse the podcasts. They are truly excellent examples of medical education!
                            </li>
                        </ol>
                    </Col>
                    <Col sm={6} className="pros">
                        <div className="headshot-bg">
                            <h3>
                                Hassan Aladdin, PhD
                            </h3>
                                Associate Director, Medical Affairs,<br/>
                                Nordic Podcast Lead
                            <img src="../img/Hassan-Alladin.png" alt="Hassan Aladdin Headshot"/>
                        </div>
                            <ol>
                                <li>
                                    Planning is the key word.
                                </li>
                                <li>
                                    Involve Gilead Legal ahead of your plan.
                                </li>
                                <li>
                                    Find out about local health authorities’ requirements regarding digital media.
                                </li>
                                <li>
                                    Feature topics that are relevant for your region and audience.
                                </li>
                                <li>
                                    Use resources within Gilead to get started.
                                </li>
                                <li>
                                    Pharmagenesis is a great resource to help you.
                                </li>
                            </ol>
                    </Col>
                    <Col sm={6} className="pros">
                        <div className="headshot-bg">
                        <h3>
                            Janniche Hammer
                        </h3>
                            Director Medical Affairs, HIV,<br/>
                            Nordic Podcasting Team Member
                        <img src="../img/janniche.jpg" alt=" Janniche Hammer Headshot"/>
                        </div>
                        <ol>
                            <li>
                                Include the legal team early in the process. There are many legal aspects to consider before launching the podcast, which may take some time to look into.
                            </li>
                            <li>
                                Engage with the commercial team to promote the podcast. Also, encourage the participating physicians to promote the podcast at their department.
                            </li>
                            <li>
                                Two episode recordings on the same day is perfect.
                            </li>
                            <li>
                                Voice coaching for the moderator improves the quality of the interviews, and the moderator appreciates the training.
                            </li>
                            <li>
                                Pharmagenesis is very professional and great to work with. They know the processes well and provide excellent support.
                            </li>
                        </ol>
                    </Col>
                    <Col sm={6} className="pros">
                        <div className="headshot-bg">
                            <h3>
                                Ahmet Yilmaz
                            </h3>
                                Senior Medical Project Manager,<br/>
                                Turkey Podcast Lead
                            <img src="../img/ahmet.jpg" alt="Ahmet Yilmaz headshot"/>
                        </div>
                        <ol>
                            <li>
                                Multichannel communication with HCPs require digital communication consents. The cross-functional team helps obtain these consents to reach a broader audience, which is ongoing in Turkey.
                            </li>
                            <li>
                                Experts suggest releasing new content every 7-10 days; that is why it is essential to have buffer content. Translating Australian podcasts helps to produce buffer content.
                            </li>
                            <li>
                                Having one moderator/presenter hosting different speakers is more achievable than having different hosts.
                            </li>
                            <li>
                                Contrast within your content and speakers will increase your hit rate. For example, having one very senior and one very junior HCP or one HCP who is very didactic and one who is very practical, etc.
                            </li>
                            <li>
                                Multichannel promotions of podcasts should be in place, including leave-behind pieces like pamphlets, conference booth promotions, regular emails and feedback requests.
                            </li>
                            <li>
                                It is crucial to localize some generic "terms and conditions" statements with the legal department. These descriptions cover the registration and personal information storage areas for HCPs.
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </Row>
    </Layout>
	)
}