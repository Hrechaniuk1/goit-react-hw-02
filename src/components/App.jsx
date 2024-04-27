import { useEffect } from "react";
import { useState } from "react";
// --------------------------------------------------
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import FeedbackCss from "./Feedback/Feedback.module.css"
import css from "./App.module.css"


export default function App() {

    const feedbacks = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    const [clicks, setClicks] = useState(() => {
        const data = JSON.parse(localStorage.getItem("feedbackCount"))
        if (data) {
            return data
        }
        return feedbacks
    })

    const total = Object.values(clicks).reduce((total, el) => total + el, 0)
    const positive = Math.round((clicks.good / total) * 100)
    

    useEffect(() => {
        localStorage.setItem("feedbackCount", JSON.stringify(clicks))
    },[clicks])

    function updateFeedback(event) {
        if (event.target.id === "good") {
            setClicks(
            {...clicks, good: clicks.good + 1}
        )
        } else if (event.target.id === "neutral") {
            setClicks(
            {...clicks, neutral: clicks.neutral + 1}
        )
        } else if (event.target.id === "bad") {
            setClicks(
            {...clicks, bad: clicks.bad + 1}
        )
        }
    }

    function resetFeedbacks() {
        setClicks(feedbacks)
        localStorage.removeItem("feedbackCount")
    }

    return (
        <div className={css.mainStyle}>
            <Description
                name="Sip Happens Café"
                description= "Please leave your feedback about our service by selecting one of the options below."
            ></Description>
        
            <Options
                clickHandler={updateFeedback}
                resetHidden={total}
                resetOption={resetFeedbacks}
            ></Options>
            
            {total > 0 ? <Feedback
                good={clicks.good}
                neutral={clicks.neutral}
                bad={clicks.bad}
                total={total}
                positive={positive}
            ></Feedback> : <p className={FeedbackCss.nothingToShow}>No Notification yet</p>}
        </div>
    )
}