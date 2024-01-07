export default function Socials(props) {
  return (
    <div className="flex flex-row justify-start space-x-4 items-center justify-end">
      <a href="https://www.github.com/itsandreramon" target="_blank">
        <img
          src="/github.svg"
          style={{
            width: "auto",
            height: "1.2rem",
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
