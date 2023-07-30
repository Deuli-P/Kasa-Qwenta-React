/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

const Collapsible = ({label, content}) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="collapse-container" >
                <button className="collapse-box-title" onClick={toggle}>
                    <h3 className="collapse-title">{label}</h3>
                    <div className="collapse-chevron-box">
                    <svg className="collapse-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style = {open ? {tranform:"rotate(-180deg)"} : { transform:"rotate(0deg)"}}>
                        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" fill="white"/>
                    </svg>
                    </div>
                </button>
                <div className="collapse-box-content-container" ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
                    <div className="collapse-box-text-content">
                        {Array.isArray(content) ? (
                            <ul className="collapse-text">
                                {content.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="collapse-text">{content}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collapsible;