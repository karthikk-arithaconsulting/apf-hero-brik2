import { Button, Title,Text} from "@apf/core";
import React from "react";
import "./HeroBrikTwo.css";
// import IconSearch from "react-icons";
function HeroBrikTwo(props){
    // eslint-disable-next-line react/prop-types
        const backgroundImg = props?.data?.data?.find((item) => item?.content?.type === "img" && item?.content?.for === "background");
        // eslint-disable-next-line react/prop-types
        const titleObj = props?.data?.data?.find((item) => item?.content?.type === "title" && item?.content?.for === "Main Title");
        // eslint-disable-next-line react/prop-types
        const textOneObj = props?.data?.data.find((item) => item?.content?.type ==="subtext" && item?.content?.for === "subtext-a");
        // eslint-disable-next-line react/prop-types
        const textTwoObj = props.data.data.find((item) => item.content.type ==="subtext" && item?.content?.for === "subtext-b");
        // eslint-disable-next-line react/prop-types
        const buttonObj = props.data.data.find((item) => item.content.type === "button");
    return( 
    <div className="hero-brick-container">
            <div className="hero-image-container">
                <img src={backgroundImg?.content?.src}  className="HeroImageDiv"></img>
            </div>
            <div className="hero-content-container"> 
                <div>
                    <Text c={textOneObj.style.font.color} fz={textOneObj.style.font.size} style={{ fontFamily: textOneObj.style.font.family }} fs={textOneObj.style.font.style} fw={textOneObj.style.font.weight} className="hero-subtitle-one">{textOneObj.content.value}</Text> 
                </div>
                <div className="hero-title">
                    <Title c={titleObj.style.font.color} fz={titleObj.style.font.size}  style={{ fontFamily: titleObj.style.font.family }} fw={titleObj.style.font.weight} className="title-tag">{titleObj.content.value}</Title>
                </div>
                <div>
                    <Text c={textTwoObj.style.font.color} fz={textTwoObj.style.font.size} style={{ fontFamily: textTwoObj.style.font.family }} fs={textTwoObj.style.font.style} fw={textTwoObj.style.font.weight}className="hero-subtitle-two">{textTwoObj.content.value}</Text>
                </div>
                <div className="Parent-Button">
                    <Button variant="filled" style={{ color: buttonObj.style.font.color, backgroundColor: buttonObj.style.backgroundColor , height: buttonObj?.style?.height, width: buttonObj?.style?.width}} size={buttonObj.style.font.size} radius="xl" className="hero-button">{buttonObj.content.value}</Button>
                </div>
            </div>
    </div>
    );

}
export default HeroBrikTwo;