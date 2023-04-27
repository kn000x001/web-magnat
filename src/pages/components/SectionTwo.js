import Image from "next/image"
import Star from "../../../public/star-solid.svg"
import SectionFourImageOne from "../../../public/upwork3.webp"
import SectionFourImageTwo from "../../../public/upwork4.webp"
import Tools from "../../../public/screwdriver-wrench-solid.svg"
import HeadPhones from "../../../public/headphones-solid.svg"
import Briefcase from "../../../public/briefcase-solid.svg"



function SectionTwo() {
    return (
            <section className="my-4">
                <div className="my-4 section-3">
                    <div className="section-3-heading mb-4">
                        <h2>Browse talent by category</h2>
                        <p>
                            Looking for work?
                            <a href="" className="ms-1">
                                Browse jobs
                            </a>
                        </p>
                    </div>
                   
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4  bg-gray-200 section-3-element rounded">
                            <p className="section-3-header">Development & IT</p>
                            <div className="grid grid-cols-2">
                                <div className="section-2 flex">
                                    <Image src={Star} alt="" className="me-2"/>
                                    <p className="section-3-text">4.5/5</p>
                                </div>
                                <p className="section-3-text">250 skills</p>
                            </div>
                        </div>

                        <div className="p-4  bg-gray-200 section-3-element rounded">
                            <p className="section-3-header">Design & Creative</p>
                            <div className="grid grid-cols-2">
                                <div className="section-2 flex">
                                    <Image src={Star} alt="" className="me-2"/>
                                    <p className="section-3-text">4.91/5</p>
                                </div>
                                <p className="section-3-text">250 skills</p>
                            </div>
                        </div>

                        <div className="p-4  bg-gray-200 section-3-element rounded">
                            <p className="section-3-header">Sales & Marketing</p>
                            <div className="grid grid-cols-2">
                                <div className="section-2 flex">
                                    <Image src={Star} alt="" className="me-2"/>
                                    <p className="section-3-text">4.77/5</p>
                                </div>
                                <p className="section-3-text">250 skills</p>
                            </div>
                        </div>

                        <div className="p-4  bg-gray-200 section-3-element rounded">
                            <p className="section-3-header">Writing & Translation</p>
                            <div className="grid grid-cols-2">
                                <div className="section-2 flex">
                                    <Image src={Star} alt="" className="me-2"/>
                                    <p className="section-3-text">4.92/5</p>
                                </div>
                                <p className="section-3-text">250 skills</p>
                            </div>
                        </div>

                        <div className="p-4  bg-gray-200 section-3-element rounded">
                            <p className="section-3-header">Admin & Customer Support</p>
                            <div className="grid grid-cols-2">
                                <div className="section-2 flex">
                                    <Image src={Star} alt="" className="me-2"/>
                                    <p className="section-3-text">4.77/5</p>
                                </div>
                                <p className="section-3-text">250 skills</p>
                            </div>
                        </div>

                        <div className="p-4  bg-gray-200 section-3-element rounded">
                            <p className="section-3-header">Finance & Accounting</p>
                            <div className="grid grid-cols-2">
                                <div className="section-2 flex">
                                    <Image src={Star} alt="" className="me-2"/>
                                    <p className="section-3-text">4.79/5</p>
                                </div>
                                <p className="section-3-text">250 skills</p>
                            </div>
                        </div>

                        <div className="p-4  bg-gray-200 section-3-element rounded">
                            <p className="section-3-header">Engineering & Architecture</p>
                            <div className="grid grid-cols-2">
                                <div className="section-2 flex">
                                    <Image src={Star} alt="" className="me-2"/>
                                    <p className="section-3-text">4.85/5</p>
                                </div>
                                <p className="section-3-text">250 skills</p>
                            </div>
                        </div>

                        <div className="p-4  bg-gray-200 section-3-element rounded">
                            <p className="section-3-header">Legal</p>
                            <div className="grid grid-cols-2">
                                <div className="section-2 flex">
                                    <Image src={Star} alt="" className="me-2"/>
                                    <p className="section-3-text">4.85/5</p>
                                </div>
                                <p className="section-3-text">250 skills</p>
                            </div>
                        </div>

                    </div>
                </div>

                
                <div className="section-4">
                    <div className="grid grid-cols-2">
                        <div className="block lg:hidden col-span-2">
                            <Image src={SectionFourImageTwo} alt="" className="rounded-t-lg"/>
                        </div>

                        <div className="col-span-2 lg:col-span-1 section-1-text p-2 section-4-text-area lg:rounded-l-lg pt-12 p-4">
                            <h1>This is how <br /> 
                                <p className="section-4-secondary-heading">
                                    good companies find good company
                                </p>
                            </h1>

                            <p className="section-4-secondary-text">
                                Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools.
                                This is how innovation works now.
                            </p>

                            <div>
                                <div className="flex section-4-icon my-2">
                                    <Image src={Tools} alt="" className="me-2"/>
                                    
                                    <p>Access expert talent to fill your skill gaps</p>
                                </div>

                                <div className="flex section-4-icon my-2">
                                    <Image src={Briefcase} alt="" className="me-2"/>
                                    
                                    <p>Control your workflow: hire, classify and pay your talent</p>
                                </div>

                                <div className="flex section-4-icon my-2">
                                    <Image src={HeadPhones} alt="" className="me-2"/>

                                    <p>Partner with Upwork for end-to-end support</p>
                                </div>
                            </div>

                            <div>
                                <button className="rounded-full section-1-button px-3 py-2">
                                    <p>
                                        Learn more
                                    </p>
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <Image src={SectionFourImageOne} alt="" className="rounded-r-lg"/>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default SectionTwo