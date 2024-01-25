export default function Boton({ texto, onClick }) {
  return (
    <button className="pl-4 pr-4 pb-2 pt-2 rounded-sm shadow-lg bg-white hover:bg-red-400 hover:text-white" onClick={onClick}>
      {texto}
    </button>
  );
}   