import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: yellow;
`

const LinksStyle = styled.div`
    flex: 10%;
    padding-right: 20px;

    h1 {
        font-size: 15px;
    }
`
const NameStyle = styled.div`
    flex: 90%;
    padding-left: 20px;
`;
const HeaderStyle = styled.h1`
    font-family: 'Roboto Mono', monospace;
    text-decoration: underline;
    text-shadow: 0px 50px red,
                -10px 90px orange,
                -20px 130px yellow,
                -30px 170px green,
                -40px 210px blue,
                -50px 250px indigo,
                -60px 290px violet,
                -70px 330px white;
`

class NavBar extends Component {
    render() {
        return (
            <NavBarWrapper>
                <NameStyle>
                    <HeaderStyle>Grant Spell</HeaderStyle>
                </NameStyle>
                <LinksStyle>
                    <a href='http://linkedin.com/in/grantspell'><h1>linkedIn</h1></a>
                </LinksStyle>
            </NavBarWrapper>
        );
    }
}

export default NavBar;