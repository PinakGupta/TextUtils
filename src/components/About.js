import React from 'react'

export default function About(props) {
    
    
    // const [myStyle,setmyStyle]=useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    
    let myStyle = {
        color: props.mode==="dark"?"white":"black",
        backgroundColor: props.mode==="dark"?"rgb(36 74 104)":"white",
    }

    return (
        <div className="container">
            <h1 className="my-2" style={{color: props.mode==="dark"?"white":"black"}}>About us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficiently . Be it word count, character count.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils is committed to providing a free and accessible text manipulation tool for users around the world. We believe in making powerful text-processing capabilities 
                available to everyone without any cost. Whether you're a student, professional, or casual user, TextUtils is here for you.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils is designed to offer a seamless and consistent experience across various web browsers, ensuring accessibility for a wide range of users. 
                We prioritize compatibility with modern browsers to provide a smooth and reliable user experience.
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
