import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Questions from "../components/questions";
import QuestionSearcher from "../components/questionsSearcher";
import styles from '../styles/index.module.css'

import questions from '../public/faqs.json'

export default function preguntasFrecuentes() {
  const router = useRouter();

  const queryParam = router.query.query

  const [questionsSearch, setQuestionsSearch] = useState<Object[]>(questions)

  const search = () => {
    if (queryParam === undefined || queryParam === '') {
      setQuestionsSearch(questions)
    }
    else {
      let dataChange = questions.filter((question: any) => {
        return question.question.includes(queryParam) || question.question.toLowerCase().includes(queryParam) || question.question.toUpperCase().includes(queryParam) 
      })
      setQuestionsSearch(dataChange)
    }
  }

  useEffect(() => {
    search()
  }, [queryParam])

  return (
    <div className={styles.homepageContainer}>
      <QuestionSearcher />
      <Questions questionsList={questionsSearch} />
    </div>
  );
}
