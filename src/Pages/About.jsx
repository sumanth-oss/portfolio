import "../Styles/About.scss";
import profilePic from "../profile-pic.jpg";

const About = () => {
  const skills = [
    "Html",
    "Css",
    "Scss",
    "Bootstrap",
    "Tailwind.css",
    "Gsap",
    "Javascript",
    "React Prime",
    "React Js",
    "Next Js",
    "Redux",
    "Node Js",
    "Express Js",
    "Websocket",
    "Mongoose",
    "MongoDB",
    "Figma",
    "Chat-GPT",
  ];

  const d = new Date("2001-06-23");
  const d2 = new Date();
  var years = d2.getFullYear() - d.getFullYear();

  return (
    <div className="About" id="About">
      <div className="centered">
        <div className="card">
          <div className="profileImg">
            <img src={profilePic} />
          </div>
          <div className="name">
            <h1 style={{ color: "var(--primary)" }}>Sumanth S</h1>{" "}
            <p>sumanth1659@gmail.com</p>
            <p>
              <a
                aria-label="sumanth github account link"
                target="_blank"
                href="https://github.com/sumanth639"
              >
                GithHub Profile
              </a>
            </p>
            {/* <p style={{ paddingTop: ".5rem", color: "var(--primary)" }}>
              <a aria-label=" github account link" target="_blank" href="">
                Working At XYZ
              </a>
            </p> */}
          </div>
        </div>
        <div className="bio">
          <div className="area">
            <span>
              <h3>Current Location</h3>
              <p>Manglore</p>
            </span>
            <span>
              <h3>Hometown</h3>
              <p>Chikamagaluru</p>
            </span>
            <span>
              <h3>
                Gender , Age <br />
              </h3>
              <p> Male ,{" " + 21} years</p>
            </span>
          </div>
          <div className="bhasha">
            <h3>Languages</h3>
            <p>English</p>
            <p>Kannada</p>
            <p>Tulu</p>
            <p>Hindi</p>
          </div>
          <div className="education">
            <h3>Education</h3>
            <p>Education level : Under Graduate</p>
            <p>Degree : B.Tech in Electronics and Communication </p>
            <p>
              University : Srinivas University Institute of Engineering and
              Technology
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="discription">
              {skills.map((value, index) => {
                return <span key={index}>{value}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
