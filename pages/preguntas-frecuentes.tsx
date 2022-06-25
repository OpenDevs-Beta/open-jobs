import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Questions from "../components/questions";
import QuestionSearcher from "../components/questionsSearcher";
import styles from "../styles/index.module.css";
import { Footer } from '../components/Footer';

import questions from '../public/faqs.json'

export default function preguntasFrecuentes() {
  const router = useRouter();

  const queryParam = router.query.query;

  const [block, setBlock] = useState(10)
  
  const questionsBlock = questions.slice(0, block)

  console.log(questionsBlock.length)

  const [questionsSearch, setQuestionsSearch] = useState<Object[]>(questionsBlock);

  const loadMoreQuestions = () => {
    setBlock(prevState => prevState +10)
    setQuestionsSearch(questionsBlock)
  }

  const search = () => {
    if (queryParam === undefined || queryParam === "") {
      setQuestionsSearch(questionsBlock);
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
  }, [queryParam, block]);

  return (
    <div className={styles.homepageContainer}>
      <QuestionSearcher/>
      <Questions questions={questionsSearch} />
      <div className={styles.btnLoadMoreQuestionsContainer}>
        {
          questions.length > block ? (
            <button className={styles.btnMoreQuestions} onClick={loadMoreQuestions}>Más preguntas</button>
          ): (
            <p className={styles.textNoQuestions}>No hay más preguntas</p>
          )
        }
      </div>
      <Footer />
    </div>
  );
}
