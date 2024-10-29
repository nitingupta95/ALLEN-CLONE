import React,{useState} from 'react'

function Page4() {

    const images = [
        'path/to/image1.png', 
        'path/to/image2.png', 
        'path/to/image3.png'
      ];
      
      
        const [index, setIndex] = useState(0);
      
        useEffect(() => {
          // Set up an interval to update the image index every second
          const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 1000); // 1000ms = 1 second
      
          // Clear the interval when the component unmounts
          return () => clearInterval(interval);
        }, []);




  return (
    <div style={{textAlign:"center"}}>
        <div style={{fontSize:"3rem",fontWeight:"bold", lineHeight:"3rem"}} >
            ALLEN App Advantage
        </div>
        <div style={{fontSize:"2.25rem",lineHeight:"5rem",fontWeight:"bold"}}>
            Achieve your dreams with the ALLEN App!
        </div>
        <div style={{fontSize:"1rem",lineHeight:"4rem", color:"GrayText"}}>
            Top Kota faculty, customised study tools, and AI-powered learning- all in one app.
        </div>

    </div>
  )
}

export default Page4