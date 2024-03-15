/* eslint-disable react/prop-types */
import {Title,Text,Button} from "@apf/core";
import React from "react";
import "./HeroBrikTwo.css";

function HeroBrikTwo(props){
        const backgroundImg = props?.data?.data?.find((item) => item?.content?.type === "img" && item?.content?.for === "background");
        const titleObj = props?.data?.data?.find((item) => item?.content?.type === "title" && item?.content?.for === "Main Title");
        const textTwoObj = props?.data?.data?.find((item) => item?.content?.type ==="subtext" && item?.content?.for === "subtext-b");
        const buttonObj = props?.data?.data?.find((item) => item?.content?.type === "button");
        const brikImage = props?.data?.data?.find((item) => item?.content?.type === "img" && item?.content?.for === "brikImage");

        const handleButtonClick = () => {
            window.open(buttonObj?.content?.link, buttonObj?.content?.target);
          };
        return( 
    <div className="hero-brik-container" style={{backgroundColor: props?.data?.style?.backgroundColor , height:props?.data?.style?.height}}>
            {backgroundImg && backgroundImg?.display === "block" &&<div className="hero-image-container" >
                <img src={backgroundImg?.content?.src}  className="HeroImageDiv"></img>
            </div>}
                <div className={brikImage?.display === "block" ? "hero-content-container" : "hero-content-container-1"}> 
                    {titleObj && titleObj?.display === "block" &&<div className="hero-title">
                        <Title c={titleObj?.style?.font?.color} fz={titleObj?.style?.font?.size}  style={{ fontFamily: titleObj?.style?.font?.family }} fw={titleObj?.style?.font?.weight} className="title-tag">{titleObj?.content?.value}</Title>
                    </div>}
                    {textTwoObj && textTwoObj?.display === "block" &&<div className="hero-subtitle">
                        <Text c={textTwoObj?.style?.font?.color} fz={textTwoObj?.style?.font?.size} style={{ fontFamily: textTwoObj?.style?.font?.family }} fs={textTwoObj?.style?.font?.style} fw={textTwoObj?.style?.font?.weight}className="hero-subtitle-two">{textTwoObj?.content?.value}</Text>
                    </div>}
                    {buttonObj && buttonObj?.display === "block" &&<div className="Parent-Button">
                        <Button variant="filled" style={{ color: buttonObj?.style?.font?.color, backgroundColor: buttonObj?.style?.backgroundColor , height: buttonObj?.style?.height, width: buttonObj?.style?.width, radius:buttonObj?.style?.radius}} size={buttonObj?.style?.font?.size} onClick={handleButtonClick} className="hero-button">{buttonObj?.content?.value}</Button>
                    </div>}
                    {brikImage && brikImage?.display === "block" &&<div className={buttonObj?.display === "block" ? "hero-brikImage-container" : "hero-brikImage-container-1"} >
                    <img src={brikImage?.content?.src}  className="brikImageDiv"></img></div>}
                </div>
    </div>
    );

}
export default HeroBrikTwo;