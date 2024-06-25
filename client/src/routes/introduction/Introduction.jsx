import React, { useEffect, useState } from 'react';
import styles from './Introduction.module.css';

function Introduction() {
  const [studyClub, setStudyClub] = useState([]);
  const [hobbyClub, setHobbyClub] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // TODO: 서버에서 데이터 받아오도록 수정
    setStudyClub([
      { instagram: "ishs_logic" },
      { instagram: "ishs_win" },
      { instagram: "ishs_tnt", image: "" },
      { instagram: "ishs_lottol", image: "" },
      { instagram: "quasar_ishs", image: "" },
      { instagram: "ishs_plutonium" },
      { instagram: "ishs.raibit_" },
    ])

    setHobbyClub([
      { instagram: "ishs_charang" },
      { instagram: "maybile_ishs" },
      { instagram: "ishs_fusion_entertainment" },
      { instagram: "ishs_semodesign" },
      { instagram: "ishs_iflow" },
      { instagram: "ishs_meca" },
    ])

    // setEvents([
    //   { image: "" }
    // ])
  }, [])

  return <>
    <div className={styles.background}>
      <div className={styles.header}>
        <div className={styles.subject}>동아리 소개</div>
      </div>
      {/* <div className={styles.subject}>신규 행사</div>
      <div className={styles.contents}>
        {events.map(event => 
          <img className={styles.event} src={event.image}></img>
        )}
      </div> */}
      <div className={styles.subject}>학술 동아리</div>
      <div className={styles.contents}>
        {studyClub.map(club => 
          <a href={"https://www.instagram.com/"+club.instagram} target="_blank">
            <div className={styles.clubFrame}>
              <div className={styles.clubImageFrame}>
                <img className={styles.clubImage} src={club.image}></img>
              </div>
              <div className={styles.clubName}>@{club.instagram}</div>
            </div>
          </a>
        )}
      </div>
      <div className={styles.subject}>취미 동아리</div>
      <div className={styles.contents}>
        {hobbyClub.map(club => 
          <a href={"https://www.instagram.com/"+club.instagram} target="_blank">
            <div className={styles.clubFrame}>
              <div className={styles.clubImageFrame}>
                <img className={styles.clubImage} src={club.image}></img>
              </div>
              <div className={styles.clubName}>@{club.instagram}</div>
            </div>
          </a>
        )}
      </div>
    </div>
  </>
}

export default Introduction;
