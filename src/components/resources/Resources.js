import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './resources.css';

const Resources = () => {
    return (
        <div className="resources">
            <Navbar />
            <div className="resource-title">
                Resources
            </div>
            <div className="content">
                <div className="yt">
                    <h3>Youtube</h3>
                    <p>https://www.youtube.com/watch?v=VfGW0Qiy2I0</p>
                    <p>https://www.youtube.com/watch?v=uPMm4dJmSoM</p>
                    <p>https://www.youtube.com/watch?v=HfTXHrWMGVY&list=PLZlA0Gpn_vH9xx-RRVNG187ETT2ekWFsq</p>
                    <p>https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU</p>
                    <p>https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8</p>
                    <p>https://www.youtube.com/watch?v=dGcsHMXbSOA&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE</p>
                </div>
                <div className="udemy">
                    <h3>Udemy</h3>
                    <p>https://www.udemy.com/course/the-complete-web-development-bootcamp/</p>
                    <p>https://www.udemy.com/course/the-web-developer-bootcamp/</p>
                </div>
                <div className="other-links">
                    <h3>Other Links</h3>
                    <p>https://drive.google.com/drive/folders/1POKm4t71uTgsnd9PYo8eD9RsOkwvL4_T</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Resources;
