import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'


const InfoBox = ({ text, link, btnText }) => (
    <div className=' mx-5 relative flex flex-col items-center gap-3 text-white max-w-xl pt-4 pb-14 px-7 sm:text-lg sm:leading-snug text-center bg-blue-700 border rounded-lg border-blue-700 shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,1vmin_0.65vmin_#0092db]'>
        <p className=' font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link}
            className='bg-white text-blue-700 font-semibold py-2 px-4 rounded-lg inline-flex items-center text-sm absolute -bottom-5'>
            {btnText}
            <img src={arrow} className=' w-3 h-3 object-contain ml-2' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className=' sm:text-xl sm:leading-snug text-center bg-blue-700 relative border rounded-lg border-blue-700 py-4 px-8 shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,1vmin_0.65vmin_#0092db] p-6 text-white mx-5'>Hi, I am <span className=' font-semibold'>Juan Carlos</span> 👋
            <br />
            A System Engineer from Colombia 🇨🇴
        </h1>
    ),
    2: (
        <InfoBox
            text="I am a Full Stack Developer with a passion for creating beautiful and functional websites."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
        text="I have experience working with React, Node.js, Express, and MongoDB."
        link="/projects"
        btnText="Visit my portfolio"
    />
    ),
    4: (
        <InfoBox
        text="Need a project done oor looking for a dev? I'm just a message away!"
        link="/contact"
        btnText="Let's talk!"
    />
    ),

}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo