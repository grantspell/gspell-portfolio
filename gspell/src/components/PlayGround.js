import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// his_style
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const Content = styled.div`
    color: white;
    margin: 10px;
    text-align: center;
    width: 500px;
    height: 250px;
    border: double 5px;
    box-shadow: 5px 5px 3px blue;
    background-image: url('https://i.imgur.com/d9vRi9b.png');
    background-size: 1200px;

    h1 {
        font-family: 'Rozha One', serif;
        font-size: 40px;
        letter-spacing: 1px;
        margin: 8px;
    }
    p {
        font-family: 'Roboto Mono', monospace;
        font-size: 10px;
        letter-spacing: 5px;
        margin-top: -15px;
    }  
`;
const Links = styled.div`
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .aLink {
        font-family: 'Roboto Mono', monospace;
        font-size: 17px;
        color: white;
        text-decoration: none;
        margin: 11px;
        letter-spacing: 7px;
        
        -webkit-animation: text-flicker-in-glow 4s linear both;
        animation: text-flicker-in-glow 4s linear both;
    }
`;

class PlayGround extends Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <h1>GRANT SPELL</h1>
                    <p>FULL STACK WEB DEVELOPER</p>
                    <Links>
                        <Link to='/' className='aLink'>EXPERIENCE</Link>
                        <Link to='/' className='aLink'>NARRATIVE</Link>                        
                    </Links>
                </Content>
            </Wrapper>
        );
    }
}

export default PlayGround;