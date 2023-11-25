import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg';

export default function About() {

    // Icon
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="title_heading">
                        <h3>We Provides Shortage Remarkable Ideas!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae animi dolorum nobis.</p>
                    </div>
                    <div className="about_box_wrapper">
                        <div className="about_box">
                            <div className="about_icon">
                                {faBusinessIcon}
                            </div>
                            <div className="about_content">
                                <h5>Development</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum ut vel, voluptates cum labore.</p>
                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon green_icon">
                                {faChartIcon}
                            </div>
                            <div className="about_content">
                                <h5>Integration</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum ut vel, voluptates cum labore.</p>
                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon blue_icon">
                                {faTruckFastIcon}
                            </div>
                            <div className="about_content">
                                <h5>Branding</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum ut vel, voluptates cum labore.</p>
                            </div>
                        </div>
                    </div>

                    {/* 2 section About box details */}
                    <div className="about_box_details">
                        <div className="about_col">
                            <div className="about_image">
                                <img src={AboutImage} alt="about" />
                            </div>
                            <div className="img-info-box">
                                <h6 className="img-info-title">GET A PRICE QUOTE TODAY</h6>
                                <p>Nemo enim dolor sit amet consectetur  <br /> adipisicing elit Reiciendis nemo quaerat.</p>
                                <a href="/">{faPhoneIcon} <span>1-800-654-3210</span></a>
                            </div>
                        </div>
                        <div className="about_col more_space">
                            <h3>We have business skills that will increase your earnings</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem accusamus cumque aliquam sint blanditiis praesentium officia recusandae edit.</p>

                            <div className="grid_info">
                                <div className="icon">{faUserClockIcon}</div>
                                <div className="detail">
                                    <h4>Start your own business in minutes</h4>
                                    <p>Excepteur ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorum aliquid mollit.</p>
                                </div>
                            </div>
                            <div className="grid_info">
                                <div className="icon green_icon">{faHouseLaptopIcon}</div>
                                <div className="detail">
                                    <h4>Open a business account online</h4>
                                    <p>Excepteur ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorum aliquid mollit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
