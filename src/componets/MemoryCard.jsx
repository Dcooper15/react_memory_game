import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
    constructor() {
        super()
        this.state={isFlipped: false};
    }
    clickHandler = () => { 
        
        this.setState({isFlipped: !this.state.isFlipped}); 
        
    };
    render () {
        let memoryCardInnerClass = "";
        if (this.state.isFlipped === true) {
            memoryCardInnerClass = "MemoryCardInner flipped";
        } else {
            memoryCardInnerClass = "MemoryCardInner";
        }
        console.log(memoryCardInnerClass);
        return ( 
        <div className="MemoryCard" onClick={this.clickHandler.bind(this)}> 
            <div className={memoryCardInnerClass}> 
                <div className="MemoryCardBack"> 
            
            
                    <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"/> 
                </div>
                <div className="MemoryCardFront">∆

                </div>
            </div>
          
        </div> )

    }
}

export default MemoryCard;