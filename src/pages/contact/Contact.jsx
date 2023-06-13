import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get in Touch" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius quam sed in fuga cupiditate vitae eligendi ad?
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:pedromonteirosf01@gmail.com" target='_blank' rel='noreferrer noopener' ><MdEmail/></a>
          <a href="https://m.me/pedromonteiro" target='_blank' rel='noreferrer noopener' ><BsMessenger/></a>
          <a href="https://wa.me/+5517997896720" target='_blank' rel='noreferrer noopener' ><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact