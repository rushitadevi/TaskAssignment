import React, { Component } from "react"

class menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <a id="menu1" href="#">
                                <li className="home" >HELIAS</li>
                                <ul id="insideText1">
                                    <li >User Experience</li>
                                    <li >Web Design</li>
                                    <li >Interactive</li>
                                </ul>
                                <p>1</p>
                            </a>
                            <a id="menu2" href="#">
                                <li className="home">HOBOKEN YOGI</li>
                                <ul id="insideText2">
                                    <li >Art Direction</li>
                                    <li >User Experience</li>
                                    <li >Web Design</li>
                                    <li >Interactive</li>
                                    <li >Front End</li>
                                </ul>
                                <p>2</p>
                            </a>
                            <a id="menu3" href="#">
                                <li className="home">BUZZWORTHY</li>
                                <ul id="insideText3">
                                    <li >Brand Strategy</li>
                                    <li >Brand Design</li>
                                    <li >Art Direction</li>
                                    <li >User Experience</li>
                                    <li >Web Design</li>
                                    <li >Interactive</li>
                                    <li >Front End</li>
                                </ul>
                                <p>3</p>
                            </a>
                            <a id="menu4" href="#">
                                <li className="home">GATTO</li>
                                <ul id="insideText4">
                                    <li >Art Direction</li>
                                    <li >User Experience</li>
                                    <li >Web Design</li>
                                </ul>
                                <p>4</p>
                            </a>
                            <a id="menu5" href="https://erikterwan.com/" target="_blank">
                                <li className="home">SNOOZE</li>
                                <ul id="insideText5">
                                    <li>Brand Strategy</li>
                                    <li >Brand Design</li>
                                    <li >Art Direction</li>
                                    <li >User Experience</li>
                                    <li >Web Design</li>
                                </ul>
                                <p>5</p>
                            </a>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default menu 