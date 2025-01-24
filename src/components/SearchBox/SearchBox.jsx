import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }){
    return (
        <div className={css.div}>
          <p className={css.p}>Find contacts by name</p>
          <input
            type="text"
            value={value}
            onChange={(e) => onFilter(e.target.value)}
          />
        </div>
      );
}