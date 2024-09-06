import "../Styles/Third_Vh.scss";

const Third_Vh = () => {
  return (
    <div className="Third_Vh">
      <div className="float">
        <div className="rocket">
          <img
            height={350}
            width={350}
            id="rocket"
            src={"rocket.png"}
            alt="rocket"
            loading="lazy"
          />
        </div>
        <div className="textGraphic">
          <div className="text">
            I&#39;m a web designer and Full-Stack Developer from Manglore.
          </div>
          <p>
            A whizz at website and UI design, front end developement,
            freelancer. Who Craft's Engaging Web Experiences. Always on the
            lookout for exciting projects to work on.
          </p>
          <div className="buttons">
            <button>
              <a href="#Home" style={{ textDecoration: "none" }}>
                Resume
              </a>
            </button>
            <button>
              <a href="#links"> View Project</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third_Vh;
