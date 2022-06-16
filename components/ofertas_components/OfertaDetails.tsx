import Image from 'next/image'
import imgg from '../../utils/images/banner.jpg'

import styles from '../../styles/Ofertas.module.css'
import React, { useContext, useState } from 'react'

const myJobPostContext = React.createContext(null)

const OfertaDetails = (props: any): JSX.Element => {

  const [jobPostData, setjobPostData] = useState(props.jobPositionData)

  return (
    <myJobPostContext.Provider value={jobPostData}>
      <section className={ styles.sectionOfertaDetails }>
        <div className={ styles.containerOfertaDetails }>
          <HeaderOferta />

          {/* Line SPACER */}
          <div>
            <hr className={ styles['line-spacer']} />
          </div>

          <div className={ styles.jobBtnActions }>
            <button name='incription'>Inscribirme</button>
            <button>Recomendar un amigo</button>
          </div>

          <BodyOferta />
        </div>
      </section>
    </myJobPostContext.Provider>
  )
}

export const HeaderOferta = (): JSX.Element => {

  const jobData: any = useContext(myJobPostContext)
  const [jobDataState, setJobDataState] = useState(jobData)

  return (
    <>
      <div className={ styles.companyDetails }>
        <figure className={ styles.companyImgWrapper }>
          <Image
            className={ styles.imgCompany }
            objectPosition='center'
            objectFit='cover'
            width={55}
            height={55}
            src={ imgg } ></Image>
        </figure>
        <div className={ styles.companyAndDate }>
          <p>{ jobDataState.company }</p>
          <span>22 / ABR</span>
        </div>
      </div>

      <div className={ styles.jobDetails }>
        <div className={ styles.jobTitleSummaryBox }>
          <div className={ styles.jobTitleLocationExperience }>
            <h2 className={ styles.jobTitle }>{ jobDataState.position }</h2>
            <span className={ styles.jobLocationExperience }>{ jobDataState.location.remote } (Sede en { jobDataState.location.location }) | { jobDataState.experience } { jobDataState.experience < 2 ? 'año' : 'años' }</span>
          </div>
          <div>ICONS | ICONS</div>
        </div>

        <div className={ styles.jobSkillsList }>
          { jobDataState.skills.map((skill: any, key: number) => (
            <span key={ key } className={ styles.jobSkillsRequired }>{ skill }</span>
          )) }
        </div>
      </div>
    </>
  )
}

export const BodyOferta = (): JSX.Element => {

  const jobData: any = useContext(myJobPostContext)
  const [jobDataState, setJobDataState] = useState(jobData)

  return (
    <div className={ styles.jobDescriptionBody }>
      <div className={ styles.jobDescription }>
        {
          jobDataState.description.map((desc: any, key: number) => (
            <p key={ key }>{ desc }</p>
          ))
        }
      </div>

      <div className={ styles.jobDescriptionSnippetList }>
        <h4>{ jobDataState.listSnippet.whatWillYouDo.title }</h4>
        <ul>
          {
            jobDataState.listSnippet.whatWillYouDo.list.map((listSX: any, key: number) => (
              <li>{ listSX }</li>
            ))
          }
        </ul>
      </div>
      <div className={ styles.jobDescriptionSnippetList }>
        <h4>{ jobDataState.listSnippet.whatAreWeLookingFor.title }</h4>
        <ul>
          {
            jobDataState.listSnippet.whatAreWeLookingFor.list.map((listSX: any, key: number) => (
              <li>{ listSX }</li>
            ))
          }
        </ul>
      </div>

      <div className={ styles.jobBenefits }>
        {
          jobDataState.benefits.map((benefit: any, key: number) => (
            <div className={ styles.jobBenefitsBox }>
              <figure>
                <Image
                  width={50}
                  height={50}
                  src={imgg}
                />
              </figure>
              <div className={ styles.jobBenefitsDescription }>
                <span>{ benefit.benefit }</span>
                { benefit.descriptionBenefit }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OfertaDetails