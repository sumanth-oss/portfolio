import "../Styles/First_Vh.scss";

const First_vh = () => {
  return (
    <>
      <div className="First_Vh " id="Home">
        <div className="text_intro">
          <div className="Minimals_text">
            <h2>Hi, I am</h2>
            <div className="MainText">
              <h1>Sumanth S</h1>
            </div>
            <p>
              And I am a MERN stack developer. I am passionate about crafting
              web applications and constantly learning new technologies.{" "}
            </p>
          </div>
          <div className="Preview">
            <button>
              <a aria-label="Go to contacts" rel="noreferrer" href="#links">
                Contact
              </a>
            </button>
            <button>
              <a
                aria-label="View Graphical Resume"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1imw_cfsmxbmX6YtZXOAszb3hm5XZUXp2/view?usp=drive_link"
                target="_blank"
              >
                Preview Resume
              </a>
            </button>
          </div>
          <div className="findOn">
            <div className="available_text">
              <p>KEY SKILLS</p>
            </div>
            <div className="available_icons">
              <p>HTML 5</p>
              <p>CSS 3</p>
              <p>Javascript</p>
              <p>ReactJs</p>
              <p>NodeJs</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>Tailwind CSS</p>
              <p>Postman API</p>
              <p>Axios</p>
              <p>Mongoose</p>
              <p>Prisma</p>
              <p>Zustand</p>
              <p>Figma</p>
              <p>Chat-GPT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First_vh;
