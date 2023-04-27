import { useState } from "react"
import Image from "next/image"
import Apple from "../../../public/apple.svg"
import Android from "../../../public/android.svg"
import Facebook from "../../../public/facebook-f.svg"
import LinkedIn from "../../../public/linkedin-in.svg"
import Twitter from "../../../public/twitter.svg"
import Instagram from "../../../public/instagram.svg"
import Youtube from "../../../public/youtube.svg"

function FooterMobile() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
        if (selected === i ){
            return setSelected(null)
        }
        
        setSelected(i)
    }

return (
    <footer className="container mx-auto px-6 w-100 flex flex-col md:hidden bg-green-950 rounded text-white text-sm py-16">
        <div className="wrapper">
            <div className="accordion">
                {data.map((item, i) => (
                    <div className="item my-2 border-b-2">
                        <div className="title flex justify-between" onClick={() => toggle(i)}>
                            <h3 className="text-lg">{item.title}</h3>
                        </div>
                        <div className={selected === i ? "show" : "hide"}>
                            <ul>
                                {item.info.map((word)=>(
                                    <li>
                                        <p>
                                            <a href="#">{word.text}</a>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col my-4">
            <div className="footer_middle_left flex flex-col">
              <h5 className="my-4">Follow Us</h5>
              <div className="flex justify-start flex-wrap">
                <div className="footer_icons mx-2">
                    <Image src={Facebook} alt="" className="icon"/>
                </div>
                <div className="footer_icons mx-2">
                    <Image src={LinkedIn} alt="" className="icon"/>
                </div>
                <div className="footer_icons mx-2">
                    <Image src={Twitter} alt="" className="icon"/>
                </div>
                <div className="footer_icons mx-2">
                     <Image src={Youtube} alt="" className="icon"/>
                </div>
                <div className="footer_icons mx-2">
                      <Image src={Instagram} alt="" className="icon"/>
                </div>
              </div>
            </div>
            <div className=" flex flex-col">
              <h5 className="my-4">Mobile app</h5>
              <div className="flex justify-start flex-wrap">
                <div className="footer_icons mx-2">
                   <Image src={Apple} alt="" className="icon"/>
                </div>
                <div className="footer_icons mx-2">
                    <Image src={Android} alt="" className="icon"/>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-col text-xs">
            <p className="me-4 mt-2">© 2015 - 2022 Upwork® Global Inc.</p>
            <ul className="flex flex-col flex-wrap">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>CA Notice at Collection</li>
              <li>Cookie Settings</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
    </footer>
)
}


 const data = [
     {
        id:"four",
         title: "For Clients",
         info: [
            { text: "How to hire"},

            { text: "Talent Marketplace"},
 
            { text: "Project Catalog"},
 
            { text: "Talent Scout"},
 
            { text: "Hire an Agency"},
 
            { text: "Enterprise"},
 
            { text: "Payroll Services"},
 
            { text: "Direct Contracts"},
 
            { text: "Hire Worldwide"},
 
            { text: "Hire in the USA"},
 

         ]
     },
     {
        id:"three",
         title: "For Talent",
         info: [
            { text: "How to Find Work"},

            { text: "Direct Contracts"},
 
            { text: "Find Freelance Jobs Worldwide"},
 
            { text: "Find Freelance Jobs in the USA"},
         ]
     },
     {
        id:"two",
         title: "Resources",
        info: [
            { text: "Help & Support"},

            { text: "Success Stories"},
 
            { text: "Upwork Reviews"},
 
            { text: "Resources"},
 
            { text: "Blog"},
 
            { text: "Community"},
 
            { text: "Affiliate Program"},
 
            { text: "Free Business tools"},
        ]
     },
     {
        id:"one",
         title: "Company",
        info: [
            { text: "About Us"},

            { text: "Leadership"},
 
            { text: "Investor Relations"},
 
            { text: "Careers"},
 
            { text: "Our Impact"},
 
            { text: "Press"},
 
            { text: "Contact Us"},
 
            { text: "Trust, Safety & Security"},
 
            { text: "Modern Slavery Statement"},
        ]
     },

 ]

export default FooterMobile