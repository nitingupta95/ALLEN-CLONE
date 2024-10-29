import React,{useState} from 'react'

function Page3() {
    const carouselData = [
        {
            image:"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953193/hbdu8gunuoob1rwhfnyy.png?_upload_ref=ic_img_tool",
            title:"ALLEN Online Programs JEE(Adv.) 2024 Results",
            subtitle:"14 students made in top 500 Air",
            next:"View Detailed Results >"
        },
        { 
            image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953163/oebyukgkusnrgafhi6kh.png?_upload_ref=ic_img_tool",
            title:"ALLEN Online Programs NEET 2024 Results",
            subtitle:"24 students have scored 700+.",
            next:"View Detailed Results >"
        }
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    let startX = null;

    const goToSlide = (index) => {
        // Ensure the index is within bounds
        if (index < 0) {
            setCurrentIndex(carouselData.length - 1); // Loop to last image
        } else if (index >= carouselData.length) {
            setCurrentIndex(0); // Loop to first image
        } else {
            setCurrentIndex(index);
        }
    };
  return (
    <div style={{ margin:"0 130px ", fontWeight:"bold"}}>
        <div style={{fontSize:"4rem",textAlign:"center"}}> Our remarkable results in 2024</div>
        <br /><br /><br />

        <br />
        <div>
        <div style={{width:"75%", marginLeft:"140px"}}>
                <div
                    className="carousel-slide"
                    
                    onMouseLeave={() => { startX = null; }} // Reset on mouse leave
                >
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                     
                        <img style={{width:"440px", alignItems:"center"}} src={carouselData[currentIndex].image} alt="carousel-slide" />
                        <div style={{marginTop:"100px", marginLeft:"70px" }}>
                            <div style={{lineHeight:"2.2rem", fontSize:"1.25rem", color:"GrayText" }}>{carouselData[currentIndex].title}</div>
                            <div style={{lineHeight:"3.2rem",  color:"GrayText" }}>{carouselData[currentIndex].subtitle}</div>
                            <div style={{lineHeight:"4.2rem" ,  color:"blue"}}>{carouselData[currentIndex].next}</div>
                        </div>
                       
                    </div>
                </div>

                <div className="carousel-dots">
                    {carouselData.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page3