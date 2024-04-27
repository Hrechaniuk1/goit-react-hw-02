import css from "./Options.module.css"
import clsx from "clsx"

export default function Options({clickHandler, resetHidden, resetOption}) {
    return (
        <div className={css.options}>
            <button id="good" className={css.btn} onClick={clickHandler}>Good</button>
            <button id="neutral" className={css.btn}  onClick={clickHandler}>Neutral</button>
            <button id="bad" className={css.btn}  onClick={clickHandler}>Bad</button>
            <button onClick={resetOption} className={clsx( css.btn, {
                [css.resetBtn]: (!resetHidden )
            })}>Reset</button>
        </div>
    )
}