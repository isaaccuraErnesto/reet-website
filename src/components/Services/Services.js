import Images from './ServiceImageData'

const Services = () => {
    console.log(Images)
    
    return (
        <div id='services'>
            <div id='services-images'>
                <div id='top-left-img' style={{backgroundImage: `url(${Images[0].img})`}}></div>
                <div id='top-right-img' style={{backgroundImage: `url(${Images[1].img})`}}></div>
                <div id='bottom-right-img' style={{backgroundImage: `url(${Images[2].img})`}}></div>
                <div id='bottom-left-img' style={{backgroundImage: `url(${Images[3].img})`}}></div>
            </div>
            <div id='services-text'>
                <h3>Services</h3>
                <div id='services-categories' className='d-flex align-items-center justify-content-around'>
                    <div id='roofing'>
                        <h4>Roofing</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                    <div id='carpentry'>
                        <h4>Carpentry</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                    <div id='renovations'>
                        <h4>Renovations</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                    <div id='handyman'>
                        <h4>Handyman</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                    <div id='maintenance'>
                        <h4>Maintenance</h4>
                        <ul>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
