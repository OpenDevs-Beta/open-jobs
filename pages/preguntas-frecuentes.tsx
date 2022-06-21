import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Questions from "../components/questions";
import QuestionSearcher from "../components/questionsSearcher";
import styles from "../styles/index.module.css";

import questions from '../public/faqs.json'

export default function preguntasFrecuentes() {
  const router = useRouter();

  const queryParam = router.query.query;

  const [questionsSearch, setQuestionsSearch] = useState<Object[]>(questions);

  const search = () => {
    if (queryParam === undefined || queryParam === "") {
      setQuestionsSearch(questions);
    } else {
      let dataChange = questions.filter((question: any) => {
        // .normalize("NFD").replace(/[\u0300-\u036f]/g, "") Quitar tildes //
        return question.question.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(queryParam) ||
        question.question.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(queryParam) ||
        question.question.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().includes(queryParam) ||
        // Con tildes
        question.question.includes(queryParam) ||
        question.question.toLowerCase().includes(queryParam) ||
        question.question.toUpperCase().includes(queryParam) ||
        // .normalize("NFD").replace(/[\u0300-\u036f]/g, "") Quitar tildes //
        question.response.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(queryParam) ||
        question.response.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(queryParam) ||
        question.response.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().includes(queryParam) ||
        // Con tildes
        question.response.includes(queryParam) ||
        question.response.toLowerCase().includes(queryParam) ||
        question.response.toUpperCase().includes(queryParam)
      })
      setQuestionsSearch(dataChange)
          }
  };

  useEffect(() => {
    search();
  }, [queryParam]);

  return (
    <div className={styles.homepageContainer}>
      <QuestionSearcher/>
      <Questions questions={questionsSearch} />
    </div>
  );
}
