import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="links" className="links">
        <a
          aria-label="Github accound link"
          rel="noreferrer"
          href="https://github.com/sumanth639"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          aria-label="Twitter accound link"
          rel="noreferrer"
          href="https://x.com/be_sumanth"
          target="_blank"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          aria-label="Discord accound link"
          rel="noreferrer"
          id="discord"
          href="https://discordapp.com/users/sumanth_95570"
          title="#"
        >
          <i class="fa-solid fa-phone"></i>
        </a>
        <a
          aria-label="Gmail account link"
          rel="noreferrer"
          id="gmail"
          href="#"
          onClick={() =>
            (window.location.href = "mailto:sumanth1272@gmail.com")
          }
        >
          <i className="fa-sharp fa-solid fa-envelope"></i>
        </a>
      </div>
      <p style={{ fontSize: ".7rem" }}>
        Crafted with ❤️ by
        <span id="a2" style={{ marginLeft: "4px", color: "var(--primary)" }}>
          <strong>Sumanth S</strong> 🚀
        </span>
      </p>
    </footer>
  );
};

export default Footer;
