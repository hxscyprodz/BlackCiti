export default function ButtonHover(props) {
  return (
    <button
      className="rounded-sm h-11 px-2 text-gray-900 hover:drop-shadow-2xl
      hover:transform hover:-translate-y-0.5 hover:shadow-gray-900 cursor-pointer
      hover:bg-blue-200 transition-all bg-gray-200"
    >
      <p>{props.text}</p>
    </button>
  );
}
