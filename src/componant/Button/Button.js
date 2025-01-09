import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { VscCoffee } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import "./Button.scss"
const Button = ({url, btntxt}) => {
  return (
    <>
        <Link to={url} className="btn" data-aos="zoom-in" data-aos-delay="600">
            <div className="icon-new">
              <VscCoffee />
            </div>
            {btntxt}
            <div className="icon">
              <FaArrowRightLong />
            </div>
          </Link>
    </>
  )
}

export default Button
