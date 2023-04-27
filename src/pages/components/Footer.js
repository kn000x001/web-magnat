import Image from "next/image"
import Facebook from "../../../public/facebook-f.svg"
import LinkedIn from "../../../public/linkedin-in.svg"
import Twitter from "../../../public/twitter.svg"
import Instagram from "../../../public/instagram.svg"
import Youtube from "../../../public/youtube.svg"
import Apple from "../../../public/apple.svg"
import Android from "../../../public/android.svg"



function Footer() {
    return (
        <footer className="container mx-auto xl:mx-0 px-20 w-100 hidden md:block bg-green-950 rounded text-white text-sm py-16">
        <div className="flex flex-col">
          <div className="grid grid-cols-4 ">
            <div className="border-b-2 border-white">
              <h5>For Clients</h5>
              <ul>
                <li>
                  <a href="#">How to Hire</a>
                </li>
  
                <li><a href="#">Talent Marketplace</a></li>
  
                <li>
                  <a href="#"> Project Catalog</a>
                </li>
                <li>
                  <a href="#">Talent Scout</a>
                </li>
                <li>
                  <a href="#"> Hire an Agency</a>
                </li>
                <li>
                  <a href="#">Enterprise</a>
                </li>
                <li>
                  <a href="#">Payroll Services</a>
                </li>
                <li>
                  <a href="#">Direct Contracts</a>
                </li>
                <li>
                  <a href="#">Hire Worldwide</a>
                </li>
                <li>
                  <a href="#">Hire in the USA</a>
                </li>
              </ul>
            </div>
            <div className="footer_top_list">
              <h5>For Talent</h5>
              <ul>
                <li>
                  <a href="#">How to Find Work</a>
                </li>
  
                <li><a href="#">Direct Contracts</a></li>
  
                <li>
                  <a href="#">Find Freelance Jobs Worldwide</a>
                </li>
                <li>
                  <a href="#">Find Freelance Jobs in the USA</a>
                </li>
              </ul>
            </div>
  
            <div className="footer_top_list">
              <h5>Resources</h5>
              <ul>
                <li>
                  <a href="#">Help & Support</a>
                </li>
  
                <li><a href="#">Success Stories</a></li>
  
                <li>
                  <a href="#">Upwork Reviews</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
                <li>
                  <a href="#">Free Business tools</a>
                </li>
              </ul>
            </div>
            <div className="footer_top_list">
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="#">About Us </a>
                </li>
  
                <li><a href="#">Leadership</a></li>
  
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Our Impact</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Trust, Safety & Security</a>
                </li>
                <li>
                  <a href="#">Modern Slavery Statement</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="footer_middle_left flex align-middle">
              <h5>Follow Us</h5>
              <div className="flex justify-between">
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
            <div className=" flex">
              <h5>Mobile app</h5>
              <div className="flex justify-between">
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
          <div className="flex text-xs">
            <p className="me-4 mt-2">© 2015 - 2022 Upwork® Global Inc.</p>
            <ul className="flex justify-between flex-wrap">
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

export default Footer