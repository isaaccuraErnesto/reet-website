import AboutText from "./AboutText"

const About = ({img1, img2, img3}) => {
    return (
        <div id='about'>
            <AboutText />
            <div id='img1' style={{ backgroundImage: `url(${img1})`, backgroundPosition: 'inherit', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            </div>
            <div id='img2' style={{ backgroundImage: `url(${img2})`, backgroundPosition: 'inherit', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            </div>
            <div id='img3' style={{ backgroundImage: `url(${img3})`, backgroundPosition: 'inherit', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            </div>
        </div>
    )
}

export default About
