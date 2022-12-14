import { useState } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";
import { sortVacancies, isSorting } from "../../redux/actions";
import { getForm } from "../../utilts/getForm";
import "./SortForm.scss";
import arrow from "../../assets/arrow.svg";
import clear from "../../assets/clear.svg";

export const SortForm = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const selectForm = (e) => {
    if (!e.target.classList.contains("select-list__item")) {
      return;
    }
    dispatch(sortVacancies(getForm(e.target.textContent)));
    dispatch(isSorting(true));
    setInputText(e.target.textContent);
    setOpen(false);
  };

  const resetSort = (e) => {
    e.preventDefault();
    if (inputText === "") return;
    dispatch(sortVacancies(getForm("")));
    dispatch(isSorting(false));
    setInputText("");
    setOpen(false);
  };

  return (
    <form className="header-form">
      <div className="header-form__block">
        <div className="header-form__item">
          <label className="header-form__label" htmlFor="select">
            Form
          </label>
          <div className="header-form__select" onClick={handleClick}>
            <input
              className="header-form__input"
              readOnly
              placeholder="Not selected"
              id="select"
              value={inputText}
            />
            <img
              src={arrow}
              alt="open arrow"
              className={
                open
                  ? cn("header-form__arrow", "header-form__arrow--active")
                  : "header-form__arrow"
              }
            />
          </div>
          {open && (
            <div className="select">
              <ul className="select-list" onClick={selectForm}>
                <li className="select-list__item">Full time</li>
                <li className="select-list__item">Half time</li>
                <li className="select-list__item">Part time</li>
              </ul>
            </div>
          )}
        </div>

        <div className="header-form__item">
          <label className="header-form__label" htmlFor="position">
            Position
          </label>
          <input
            className="header-form__input"
            readOnly
            id="position"
            placeholder="Unspecifed"
          />
        </div>
      </div>
      <button className="header-button" onClick={resetSort}>
        <span className="header-button__text">Clear sorting</span>
        <img src={clear} alt="clear cross" />
      </button>
    </form>
  );
};
