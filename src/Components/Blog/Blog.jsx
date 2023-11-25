import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpg';

export default function Blog() {
    return (
        <>
            <section id="blog">
                <div className="container">
                    <div className="blog_wrapper">
                        <div className="blog_col">
                            <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel labore porro obcaecati nemo velit voluptatum error facilis. Sed sit obcaecati ut, voluptatum voluptatibus explicabo alias necessitatibus odit harum natus? Nobis dignissimos nemo esse officia.</p>
                            <div className="btn_wrapper">
                                <a className="btn" href="/">Get Started</a>
                            </div>
                        </div>
                        <div className="blog_col">
                            <div className="blog_image">
                                <img src={BlogImage} alt="blog" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
