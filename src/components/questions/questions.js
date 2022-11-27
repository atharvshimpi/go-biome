import React from "react"
import { useLocation } from "react-router-dom"

import QuestionsHome from "./questionsHome"
import QuestionModal from "../modals/questionModal"

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const Questions = () => {
    const query = useQuery()
    const qNum = Number(query.get("q"))

    return (
        <>
            {!qNum ? (
                <QuestionsHome />
            ) : (
                <QuestionModal qNum={qNum} />
            )}
        </>
    )
}

export default Questions