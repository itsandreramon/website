export default function Socials() {
  return (
    <div className="flex flex-row gap-8 lg:gap-4 items-center">
      <a href="https://www.github.com/itsandreramon" target="_blank">
        <img
          src="/github.svg"
          style={{
            width: "auto",
            height: "1.1rem",
          }}
        />
      </a>
      <a href="https://www.linkedin.com/in/itsandreramon" target="_blank">
        <img
          src="/linkedin.svg"
          style={{
            width: "auto",
            height: "1.1rem",
          }}
        />
      </a>
      <a href="https://stackoverflow.com/users/10319730/andre-thiele" target="_blank">
        <img
          src="/stackoverflow.svg"
          style={{
            width: "auto",
            height: "1.3rem",
          }}
        />
      </a>
      <a href="https://www.x.com/itsandreramon" target="_blank">
        <img
          src="/x.svg"
          style={{
            width: "auto",
            height: "1rem",
          }}
        />
      </a>
    </div>
  );
}
