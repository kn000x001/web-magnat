import Image from "next/image"
import SectionSevenImage from "../../../public/upwork6.jpg"
import Swiper from "./Swiper"

function SectionFour() {
    return (
        <section className="my-4">
            <div className="section-7 my-4">
                <div className="grid grid-cols-2">
                        <div className="col-span-2 lg:col-span-1 lg:block">
                            <Image src={SectionSevenImage} alt="" className="rounded-top lg:rounded-l-lg"/>
                        </div>
                        
                        <div className="col-span-2 lg:col-span-1 section-1-text p-2 section-7-text-area lg:rounded-r-lg pt-12 p-4">
                            <h1>Find great work
                            </h1>

                            <p className="section-7-secondary-text">
                                Meet clients you’re excited to work with and take
                                your career or business to new heights.
                            </p>

                            <div className="grid grid-cols-3 border-t-2 border-white mt-20 mb-3">
                                <div className="flex section-7-icon my-2 col-span-1">
                                    
                                    <p>Access expert talent to fill your skill gaps</p>
                                </div>

                                <div className="flex section-7-icon my-2 col-start-3 col-span-1">

                                    <p>Partner with Upwork for end-to-end support</p>
                                </div>
                            </div>

                            <div>
                                <button className="rounded-full section-1-button px-3 py-2">
                                    <p>
                                        Find opporunities
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-8">
                    <Swiper />
                </div>
        </section>
    )
}

export default SectionFour