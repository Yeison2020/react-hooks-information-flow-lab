import ShoppingList from "./ShoppingList";

function Header({ onDarkModeClick, isDarkMode, items }) {
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList itemsOne={items} />
    </div>
  );
}

export default Header;
