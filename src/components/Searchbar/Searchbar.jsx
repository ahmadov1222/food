import "./Searchbar.scss";
import "./Searchbar.scss";

export const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-content">
        <h1>Jaegar Resto</h1>
        <p>Tuesday,2Feb 2021</p>
      </div>

      <form>
        <input type="text" placeholder="Search for food, coffe, etc.." />
      </form>
    </div>
  );
};
