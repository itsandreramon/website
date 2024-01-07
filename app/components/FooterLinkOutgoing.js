export default function FooterLinkOutgoing(props) {
  return (
    <a href={props.to} target="_blank">
      <p className="text-sm font-bold hover:underline">{props.title}</p>
    </a>
  );
}
