import React from 'react'
import { ImInstagram } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <div className='container contact' id='contact'>
        <h1>CONTACT ME</h1>
        <div className='contact-icon d-flex' data-aos="zoom-in-down" data-aos-duration="2000">
          <a href='https://www.instagram.com/abhishek_gupta1269/' target='_blank' className='items'><ImInstagram className='icons' /></a>
          <a href='https://www.linkedin.com/in/abhishek-gupta-405097261/' target='_blank' className='items'><SiLinkedin className='icons' /></a>
          <a href='https://x.com/Abhishe56346503' target='_blank' className='items'><BsTwitterX className='icons' /></a>
          <a href='https://github.com/Abhishek1269' target='_blank' className='items'><FaSquareGithub className='icons' /></a>
          <a href='mailto:abhishekgupta8920119493@gmail.com' target='_blank' className='items'><IoMail className='icons' /></a>
        </div>
      </div>
    </>
  )
}
