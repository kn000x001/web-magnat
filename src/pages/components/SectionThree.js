import Image from "next/image"
import Bg from "../../../public/upwork5.jpeg"
import ArrowDown from "../../../public/chevron-right-solid.svg"
import Dollar from "../../../public/circle-dollar-to-slot-solid.svg"
import Star from "../../../public/star-regular.svg"
import Check from "../../../public/circle-check-solid.svg"
import WthiteStar from "../../../public/star-solid-white.svg"
import Trophy from "../../../public/trophy.svg"
import Person from "../../../public/reaching-person.png"






function SectionThree() {
    return (
            <section className="my-4">
                <div style={{backgroundImage: `url(${Bg.src})`}} className="flex flex-col section-5 p-4 my-4 rounded-lg">
                    <div className="section-5-heading mt-4">
                        <h2>Find talent your way</h2>
                    </div>
                    <div className="section-5-text mb-8 grid grid-cols-4">
                        <p className="col-span-3 lg:col-span-2">
                            Work with the largest network of independent professionals and 
                            get things done—from quick turnarounds to big transformations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 section-5-items p-2 gap-4 lg:gap-8 my-4">
                        <div className="flex flex-col md:flex-row jsutify-between lg:flex-col justify-between p-4 rounded-lg section-5-item">
                            <h3>
                                Post a job and hire a pro
                            </h3>

                            <div className="flex rounded">
                                <p>Talent Marketplace</p>
                                <Image src={ArrowDown} alt="" className="ms-2"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row jsutify-between lg:flex-col justify-between p-4 rounded-lg section-5-item">
                            <h3>
                                Browse and buy projects
                            </h3>

                            <div className="flex rounded">
                                <p>Project Catalog</p>
                                <Image src={ArrowDown} alt="" className="ms-2"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row jsutify-between lg:flex-col justify-between p-4 rounded-lg section-5-item">
                            <h3>
                                Let us help you find the right talent
                            </h3>

                            <div className="flex rounded">
                                <p>Talent Scout</p>
                                <Image src={ArrowDown} alt="" className="ms-2"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-6 grid grid-cols-10">
                    <div className="section-6-part-1 rounded-lg bg-gray-100 p-4 col-span-10 lg:col-span-7">
                        <div className="section-6-heading">
                            <h2>
                                Why businesses turn to Upwork
                            </h2>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex section-6-item">
                                <Image src={Star} alt="" className="me-2"/>
                                <div className="flex flex-col pt-4">
                                    <p className="section-6-header">Proof of quality</p>
                                    <p className="section-6-text">Check any pro’s work samples, client reviews, and identity verification.</p>
                                </div>
                            </div>
                            
                            <div className="flex section-6-item">
                                <Image src={Dollar} alt="" className="me-2"/>
                                <div className="flex flex-col pt-4">
                                    <p className="section-6-header">No cost until you hire</p>
                                    <p className="section-6-text">Interview potential fits for your job, negotiate rates, and only pay for work you approve.</p>
                                </div>
                            </div>
                            
                            <div className="flex section-6-item">
                                <Image src={Check} alt="" className="me-2"/>
                                <div className="flex flex-col pt-4">
                                    <p className="section-6-header">Safe and Secure</p>
                                    <p className="section-6-text">Focus on your work knowing we help protect your data and privacy.
                                         We’re here with 24/7 support if you need it.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="section-6-part-2 rounded-lg p-4 col-span-10 lg:col-span-3 grid grid-cols-3 lg:block">
                        <div className="col-span-3 sm:col-span-1">
                            <div className="mt-8">
                                <h2>
                                    We're the world’s work marketplace
                                </h2>
                            </div>
                            <div>
                                <div className="flex section-6-part-2-details my-2 ">
                                    <Image src={WthiteStar} alt="" className="me-2"/>
                                    <div  className="flex-col pt-4">
                                        <p className="section-6-part-2-header">4.9/5</p>
                                        <p className="section-6-part-2-text">Clients rate professionals on Upwork</p>
                                    </div>
                                </div>

                                <div className="flex section-6-part-2-details my-2 ">
                                    <Image src={Trophy} alt="" className="me-2"/>
                                    <div  className="flex-col pt-4">
                                        <p className="section-6-part-2-header">Award winner</p>
                                        <p className="section-6-part-2-text">G2’s 2021 Best Software Awards</p>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                                <div></div>
                                <Image src={Person} alt=""  className=" sm:block sm:col-span-1 lg:hidden hidden"/>
                    </div>
                </div>
            </section>
    )
}

export default SectionThree