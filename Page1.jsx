import React, { useState } from 'react';

function Page1() {
    let style = {
        backgroundColor: "transparent",
        color: "black",
        border: "2px solid #0066cc",
        padding: "8px 26px",
        borderRadius: "40px",
        cursor: "pointer",
        margin: "0 10px 0 10px",
        fontSize: "1.75rem"
    };

    const carouselData = [
        {
            image: 'https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604923%2FStudy_eicbtr.webp&w=828&q=75'
        },
        {
            image: 'https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604912%2Fu_c_3_1_buiett.webp&w=828&q=75'
        },
        {
            image: 'https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604922%2FInteractive_cdbhfw.webp&w=828&q=75'
        },
        {
            image: 'https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604921%2FCustomized_wy9dpe.webp&w=828&q=75'
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

    const handleMouseMove = (event) => {
        if (startX === null) {
            startX = event.clientX; // Set the initial position
        } else {
            const diffX = event.clientX - startX; // Calculate the difference
            if (diffX > 50) {
                goToSlide(currentIndex - 1); // Move to previous image
                startX = null; // Reset
            } else if (diffX < -50) {
                goToSlide(currentIndex + 1); // Move to next image
                startX = null; // Reset
            }
        }
    };

    return (
        <div style={{ margin: "90px 150px", display: "flex", justifyContent: "space-between" }}>
            <div style={{
                alignItems: "center",
                maxWidth: "1200px",
                margin: "0 45px 0 0"
            }}>
                <h1 style={{ fontSize: "2.8rem" }}>Your Dream.
                    <br />
                    Our Expertise.
                </h1><br />
                <div style={{ fontSize: "2rem", marginTop: "10px" }}>What brings you to us today?</div>
                <br />
                <br />
                <button style={style}>Neet</button>
                <button style={style}>JEE</button>
                <button style={style}>Grade 6-10</button>
            </div>

            <div className="carousel">
                <div
                    className="carousel-slide"
                    onMouseMove={handleMouseMove}
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
        </div>
    );
}

export default Page1;
