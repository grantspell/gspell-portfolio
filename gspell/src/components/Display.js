import React, { Component } from 'react';
import styled from 'styled-components';

// his_Style
const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    img {
        margin: 50px;
        height: 500px;
        width: 500px;
        box-shadow: -5px -5px red, -10px -10px orange, -15px -15px yellow;
    }
`;

const div = styled.div`
    .img {
        width: 100px;
    }
`;

class Display extends Component {

    state = {
        imageOne: 'https://i.imgur.com/px0C9IY.png',
        imageTwo: 'https://i.imgur.com/i00o3nw.jpg'
    }
    
    render() {
        return (
            <div>
                <Wrapper>
                    <img src={this.state.imageOne} alt="It's me" />
                </Wrapper>
                <div>
                    <img className='.img' src={this.state.imageTwo} />
                </div>
            </div>
        );
    }
}

export default Display;