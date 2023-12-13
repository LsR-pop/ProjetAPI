import "./search.css";

function SearchBar() {
  return (
    <div>
      <input
        className="shadowInput border-primary-blue border-2 rounded-full w-104 h-14 shadow-lg p-4"
        type="text"
        placeholder="chercher un événement"
      />
    </div>
  );
}

export default SearchBar;
