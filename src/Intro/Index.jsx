import { useEffect } from 'react';
import ojusHead from "../assets/ojus_2025.png";
import ojusSports from "../assets/OJUS SPORTS 2024 FINAL_r6.png";
import { Link } from "react-router-dom";
import "./index.css";

const OjusPage = () => {
  useEffect(() => {
    // Preventing the right-click (context menu) on images
    const handleRightClick = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleRightClick);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);

  return (
    <div className='intro'>
      {/* Header Section */}
      <div id="header">
        <img src={ojusHead} alt="logo" />
      </div>

      {/* Content Section */}
      <div id="content-container">
        <div id="content-images">
          {/* Cultural Section */}
          <div>
            <p><b>Cultural</b></p>
            <div className="image-bg">
              <Link to="/cultural">
                <img src="https://res.cloudinary.com/ds2uw5gcw/image/upload/v1707329296/ojus_chronicles_zeta_elcssf.png" alt="Image 1" id="img1" />
              </Link>
            </div>
          </div>

          {/* About Us Section */}
          <div id="content-text2">
            <div id="content2">
              <h1>About Us</h1>
              <p>
                OJUS - Radiance of Euphoria is an intercollegiate festival hosted annually by the students of APSIT.
                It's an amalgamation of Sports, Literature & Cultural festival comprising of intellectual as well as
                fun & creative events with a variety of games and entertainment shows. It's not just a festival of various
                colorful events but a platform where students freely express themselves and our hidden gems come out with their talents.
              </p>
            </div>
          </div>

          {/* Sports Section */}
          <div>
            <p><b>Sports</b></p>
            <div className="image-bg">
              <Link to="/sports">
                <img src={ojusSports} alt="Image 2" id="img2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OjusPage;
