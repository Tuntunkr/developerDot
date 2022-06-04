import React from 'react'
import "../styles/Card1.css"
import blog1 from "../Images/blog/1.jpg"
import blog2 from "../Images/blog/2.jpg"
import blog3 from "../Images/blog/3.jpg"

function Card4() {
  return (
    <>
    <section id="blog" className="blog_wrapper wrapper">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center mb-5">
                    <h3 className="text-black">Latest Blog</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card p-0 border-0 rounded-0">
                        <img src={blog1} alt='/' />
                        <div className="blog-content">
                            <h5 className="text-white mb-4">Dental Insurance with Benefits</h5>
                            <h6 className="text-white">By Admin - February 18, 2018</h6>
                            <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                                nostrum.
                            </p>
                            <a href="/" className="main-btn mt-2">Read More</a>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card p-0 border-0 rounded-0">
                        <img src={blog2} alt='/' />
                        <div className="blog-content">
                            <h5 className="text-white mb-4">Dental Insurance with Benefits</h5>
                            <h6 className="text-white">By Admin - February 18, 2018</h6>
                            <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                                nostrum.
                            </p>
                            <a href="/" className="main-btn mt-2">Read More</a>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card p-0 border-0 rounded-0">
                        <img src={blog3} alt='/' />
                        <div className="blog-content">
                            <h5 className="text-white mb-4">Dental Insurance with Benefits</h5>
                            <h6 className="text-white">By Admin - February 18, 2018</h6>
                            <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                                nostrum.
                            </p>
                            <a href="/" className="main-btn mt-2">Read More</a>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="card p-0 border-0 rounded-0">
                        <img src={blog3} alt='/' />
                        <div className="blog-content">
                            <h5 className="text-white mb-4">Dental Insurance with Benefits</h5>
                            <h6 className="text-white">By Admin - February 18, 2018</h6>
                            <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                                nostrum.
                            </p>
                            <a href="/" className="main-btn mt-2">Read More</a>

                        </div>
                    </div>
                </div><div className="col-md-4 col-sm-6 mb-4">
                    <div className="card p-0 border-0 rounded-0">
                        <img src={blog3} alt='/' />
                        <div className="blog-content">
                            <h5 className="text-white mb-4">Dental Insurance with Benefits</h5>
                            <h6 className="text-white">By Admin - February 18, 2018</h6>
                            <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                                nostrum.
                            </p>
                            <a href="/" className="main-btn mt-2">Read More</a>

                        </div>
                    </div>
                </div><div className="col-md-4 col-sm-4 mb-4">
                    <div className="card p-0 border-0 rounded-0">
                        <img src={blog3} alt='/' />
                        <div className="blog-content">
                            <h5 className="text-white mb-4">Dental Insurance with Benefits</h5>
                            <h6 className="text-white">By Admin - February 18, 2018</h6>
                            <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                                nostrum.
                            </p>
                            <a href="/" className="main-btn mt-2">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Card4