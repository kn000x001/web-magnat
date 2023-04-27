import Image from "next/image"
import SectionOneImage from "../../../public/globe@1x.jpg"
import SectionOneImageTwo from "../../../public/upwork2.jpeg"
import Shield from "../../../public/shield-solid.svg"
import note from "../../../public/clipboard-regular.svg"
import nail from "../../../public/thumbtack-solid.svg"


function SectionOne() {
    return (
        <section className="mt-20">
            <div className="grid grid-cols-2">
                    <div className="col-span-2 md:col-span-1 section-1-text p-2">
                        <h1>How Work <br /> Should Work</h1>

                        <p>
                            Forget the old rules. You can have the best people.
                            Right now. Right here.
                        </p>

                        <div>
                            <button className="rounded-full section-1-button px-3 py-2">
                                <p>
                                    Get Started
                                </p>
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Image src={SectionOneImage} alt=""/>
                    </div>
            </div>

            <div className="grid grid-cols-2 my-2">
                <div className="roudned col-span-2 md:col-span-1 me-1">
                    <Image src={SectionOneImageTwo} alt="" className="rounded"/>
                </div>

                <div className="col-span-2 md:col-span-1 section-2 ms-1">
                    <p className="section-2-heading">
                        Up your work game, it’s free.
                    </p>

                    <div className="flex flex-col">
                        <div className="flex my-2">
                            <div className="me-2">
                                <Image src={note} alt=""/>
                            </div>

                            <div className="flex flex-col">
                                <p className="section-2-header">No cost to join.</p>

                                <p className="section-2-text">Register and browse professionals, explore projects, or even book a consultation.</p>
                            </div>
                           

                        </div>

                        <div className="flex my-2">
                            <div className="me-2">
                                <Image src={nail} alt=""/>
                            </div>

                            <div className="flex flex-col"> 
                                <p className="section-2-header">Post a job and hire top talent.</p>

                                <p className="section-2-text">Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
                            </div>
                        </div>

                        <div className="flex my-2">
                            <div className="me-2">
                                <Image src={Shield} alt=""/>
                            </div>

                            <div className="flex flex-col">
                                <p className="section-2-header">Work with the best—without breaking the bank.</p>

                                <p className="section-2-text">Upwork makes it affordable to up your work and take advantage of low transaction rates.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <button className="rounded-full section-2-button first-button px-3 py-2">
                                <p>Sign up for free</p>
                            </button>

                            <button className="rounded-full border-2 section-2-button second-button px-3 py-2">
                                <p>Learn how to hire</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne