export default function Header(props) {
  return (
    <p className="max-w-fit text-4xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {props.title}
    </p>
  );
}
