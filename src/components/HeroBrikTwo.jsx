import { Button, Box, Title,Text} from "@apf/core";
import React from "react";
import "./HeroBrikTwo.css";
// import IconSearch from "react-icons";
function HeroBrikTwo(props){
    // eslint-disable-next-line react/prop-types
        const backgroundImg = props.data.data.find((item) => item.content.type === "image" && item.content.for === "background");
        // eslint-disable-next-line react/prop-types
        const titleObj = props.data.data.find((item) => item.content.type === "title");
        // eslint-disable-next-line react/prop-types
        const textOneObj = props.data.data.find((item) => item.content.type ==="textOne");
        // eslint-disable-next-line react/prop-types
        const textTwoObj = props.data.data.find((item) => item.content.type ==="textTwo");
        // eslint-disable-next-line react/prop-types
        const buttonObj = props.data.data.find((item) => item.content.type === "button");
    return( 
    <div className="hero-brick-container">
        <Box>
            <img src={backgroundImg.content.link}  className="HeroImageDiv"></img>
            <div className="hero-content-container">
                <Text c={textOneObj.style.font.color} fz={textOneObj.style.font.size} style={{ fontFamily: textOneObj.style.font.family }} fs={textOneObj.style.font.style} fw={textOneObj.style.font.weight} className="hero-subtitle-one">{textOneObj.content.value}</Text>
                <Title c={titleObj.style.font.color} fz={titleObj.style.font.size}  style={{ fontFamily: titleObj.style.font.family }} fw={titleObj.style.font.weight} className="hero-title">{titleObj.content.value}</Title>
                <Text c={textTwoObj.style.font.color} fz={textTwoObj.style.font.size} style={{ fontFamily: textTwoObj.style.font.family }} fs={textTwoObj.style.font.style} fw={textTwoObj.style.font.weight}className="hero-subtitle-two">{textTwoObj.content.value}</Text>
                <div className="Parent-Button">
                    <Button variant="filled" style={{ color: buttonObj.style.font.color, backgroundColor: buttonObj.style.backgroundColor}} size={buttonObj.style.font.size} radius="xl" className="hero-button">{buttonObj.content.value}</Button>
                </div>
                
            </div>
            
      
      </Box>
    </div>
    );

}
export default HeroBrikTwo;