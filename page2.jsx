import React,{useState} from 'react'

function page2() {

    
    const carouselData = [
        {
            image:"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729669258/Group_1171279293_1_e72ssd.png" },
        {
            image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1728302450/Homepage_Banner_1_sn5css.webp"},
        {
            image:"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729680516/Homepage_Banner_1_grtip1.png" }
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
    <div style={{width:"75%", marginLeft:"140px"}}>
                <div
                    className="carousel-slide"
                    
                    onMouseLeave={() => { startX = null; }} // Reset on mouse leave
                >
                    <img src={carouselData[currentIndex].image} alt="carousel-slide" />
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
  )
}

export default page2