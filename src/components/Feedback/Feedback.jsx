import css from "./Feedback.module.css"
import clsx from "clsx"

export default function Feedback({ good, neutral, bad, total, positive }) {
    return (
        <div className={clsx(css.feedback, {
            [css.hidden]: total === 0
        })}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
        </div>
    )
}