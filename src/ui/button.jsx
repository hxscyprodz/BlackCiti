export default function Button(props) {
  return (
    <button className="border-2 rounded-sm h-11 px-2 text-gray-200 hover:shadow-2xl
      hover:transform hover:-translate-y-0.5 hover:shadow-gray-200 cursor-pointer
      transition-all">
      <p>{props.text}</p>
    </button>
  );
}
