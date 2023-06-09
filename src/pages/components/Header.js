import { useState } from "react"
import Image from "next/image"
import Logo from "../../../public/upwork.svg"
import Arrow from "../../../public/chevron-down-solid.svg"
import ArrowDown from "../../../public/chevron-right-solid.svg"
import Glass from "../../../public/magnifying-glass-solid.svg"
import DropDown from "./DropDown"


function Header() {


    const [selected, setSelected] = useState(null)
    const [subselected, setSubSelected] = useState(null)


    const toggle = (i) =>{
        if (selected === i ){
            return setSelected(null)
        }
        
        setSelected(i)
    }

    const toggleSubMenu = (i) =>{
        if (subselected === i ){
            return setSubSelected(null)
        }
        
        setSubSelected(i)
    }

    return (
        <header className="bg-white lg:me-2 border-b-1 border-black p-2 hidden lg:flex fixed top-0">
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-7">
                    <div className="logo grid col-span-1 pt-2">
                        <Image src={Logo} alt=""/>
                    </div>
                    <div className="grid grid-cols-8 col-span-6">
                    {MenuData.map((item, i) => (

                    <div as="div" className="relative inline-block text-left grid col-span-2">
                        <div className="">
                            <div className="nav-title inline-flex w-full justify-center gap-x-0.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"  onClick={() => toggle(i)}>
                                <p>
                                    {item.title}
                                </p>
                                <Image src={Arrow} alt=""/>
                            </div>

                        </div>
                            <div className={selected === i ? "show" : "hide"}>
                                <div className="grid col-span-8 absolute z-10 w-100 origin-bot-right bg-white focus:outline-none submenu">
                                {item.submenu.map((info, i) => (
                                    <div className="sub-item grid grid-cols-3 border-b-1 border-black hover:bg-gray-100">
                                        <div className="py-1 border-e-2 border-black grid col-span-2">
                                            <div onClick={() => toggleSubMenu(i)} className="flex align-center m-2">
                                                <div>
                                                    <h4>
                                                        {info.title}
                                                    </h4>
                                                    <p>{info.additionall}</p>
                                                </div>
                                                <div className="flex align-center">
                                                    <Image src={ArrowDown} alt="" className="toggle-logo ms-4"/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={subselected === i ? "show" : "hide"}>
                                            <div className="flex flex-col justify-end grid col-span-1">
                                                <ul className="navbar-ul">
                                                    <li>{info.choice1}</li>
                                                    <li>{info.choice2}</li>
                                                    <li>{info.choice3}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                </div>
                            </div>
                    </div>
                            ))}

                    <div className="col-span-2">
                        <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">                       
                            <button>
                                <a href="">
                                    <p>
                                        Enterprise
                                    </p>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                </div>

                <div className="grid grid-cols-10 d-flex justify-end">
                    <div className="bg-gray-100 rounded-full col-start-3 col-span-5 search-container grid grid-cols-10 p-1 lg:p-2">
                        <div className="grid col-span-7 me-2 border-r-2 border-gray-300">
                            <from action="search" className="xl:flex xl:justify-start grid grid-cols-5 align-middle py-1">
                                    <div className="me-2 col-span-1">
                                        <Image src={Glass} alt=""/>
                                    </div>
                                    <input type="search" placeholder="Search" className="bg-gray-100 border-none col-span-4"/>
                            </from>
                        </div>
                        <DropDown />
                    </div>
                    
                    <div className="login ms-2 cursor-pointer col-start-8 col-span-1">
                        <p>Log In</p>
                    </div>

                    <div className="signin rounded-full bg-green-950 ms-1 cursor-pointer col-start-9 col-span-2 flex justify-center">
                        <p>Sign Up</p>
                    </div>

                </div>
            </div>           
        </header>
  
    )
}



const MenuData =[
    {
        id: 15,
        title: "Find Talent",
        submenu: [
            {
                title: "Post a job and hire a pro",
                additionall: "Talent Marketplace",
                choice1: "Development & IT",
                choice2: "Design & Creative",
                choice3: "Sales & Marketing",
            },
            {
                title: "Browse and buy projects",
                additionall: "Project Catalog",
                choice1: "Logo Design",
                choice2: "Seo",
                choice3: "Wordpress",
            },
            {
                title: "Let us find you a right talent",
                additionall: "Talent Scout",
                choice1: "Development & IT",
                choice2: "Design & Creative",
                choice3: "Sales & Marketing",
            },
        ]
    },
    {
        id: 16,
        title: "Find Work",
        submenu: [
            {
                title: "Ways to earn",
                additionall: "Learn why Upwork has the right opportunities for you",
                choice1: "Talent Marketplace",
                choice2: "Project Catalog",
                choice3: "Talent Scout",
            },
            {
                title: "Fond ork for your skills",
                additionall: "Explore the kind of work available in your field",
                choice1: "Type of work",
            },
            {
                title: "Find ways to promote yourself",
                additionall: "Show clients you're the one they want",
                choice1: "Availability badge",
                choice2: "Boost your proposals",
            },
        ]
    },
    {
        id: 17,
        title: "Why Upwork",
        submenu: [
            {
                title: "Success Stories",
                additionall: "Discover how teams work stategically and grow together",
                choice1: "Access All Stories",
            },
            {
                title: "Reviews",
                additionall: "See what it's like to collaborate on Upwork",
                choice1: "Explore worldwide reviews",
                choice2: "How to get started",
            },
            {
                title: "How to hire",
                additionall: "Learn about the different ways to get work done",
                choice1: "The seasl of approval",
                choice2: "FAQ",
            },
            {
                title: "How to find work",
                additionall: "Learn about how to grow your independent career",
                choice1: "How it works",
                choice2: "Ways to earn",
            },
        ]
    },
]

export default Header