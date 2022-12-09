import React from 'react';
import NavLink from "react-router-dom/es/NavLink";

const Navigation = () => {
    return (
        <div className={"sidebar"}>
            <div className="id">
                <div className="idContent">
                    <img src="./media/1.png" alt="profil pic"/>
                    <h3>CACA</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to={"/"} activeClassName={"navActive"}>
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={"/Knowledges"} activeClassName={"navActive"}>
                            <i className="fas fa-mountain"></i>
                            <span>Knowleges</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={"/Portfolio"} activeClassName={"navActive"}>
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={"/Contact"} activeClassName={"navActive"}>
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://google.fr" target={"_blank"} rel={"noopener noreforerrer"}><i className={"fab fa-linkedin"}></i></a>
                    </li>
                </ul>

                <div className="signature">
                    <p>FromSimonConvert</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;