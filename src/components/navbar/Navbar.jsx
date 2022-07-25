import React, { useState } from "react";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

/*
        BEM -> Block Element Modifier
        BEM은 Blcok, Element, Modifier를 뜻합니다. 저 세 가지로 구성된 이름을 짓는 거죠! 그리고 각각 __와 --로 구분합니다.
        .header__navigation--navi-text {
        color: red;
        }
        위 코드에서 header는 Block, naviagtion은 Element, navi-text는 Modifier가 됩니다
        Block : 재사용 가능한 기능적으로 독립적인 페이지 컴포넌트, 떼어다가 어딘가에 쓸 수 있는 단위
        Element : 블럭을 구성하는 단위 자신이 속한 블럭 내에서만 의미를 가짐
        modifier : 블럭이나 엘리먼트의 속성을 담당함 생긴게 조금 다르거나 다르게 동작하는 블럭이나 엘리먼틀르 만들 때 사용한다.
*/
const Menu = () => (
    <> 
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
);
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {
                    toggleMenu
                        ? 
                            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                        
                        : 
                            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                        
                }
                {
                    toggleMenu && 
                        (<div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <Menu/>
                                <div className="gpt3__navbar-menu_container-links-sign">
                                    <p>Sign in</p>
                                    <button type="button">Sign up</button>
                                </div>
                            </div>
                        </div>)
                    
                }
            </div>
        </div>
    );
};

export default Navbar;
