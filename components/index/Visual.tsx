"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import YoonImg from "@/public/src/images/yoon.jpg";
import styles from "./Visual.module.scss";

export default function Visual() {
  const [timeLeft, setTimeLeft] = useState([{ days: 0, hours: 0, minutes: 0, seconds: 0 }]);

  useEffect(() => {
    const targetDate = new Date("2027-05-09T00:00:00");

    const timer = setInterval(() => {
      const updatedToday = new Date();
      const updatedDiff = targetDate.getTime() - updatedToday.getTime();
      const updatedSeconds = Math.floor(updatedDiff / 1000) % 60;
      const updatedMinutes = Math.floor(updatedDiff / (1000 * 60)) % 60;
      const updatedHours = Math.floor(updatedDiff / (1000 * 60 * 60)) % 24;
      const updatedDays = Math.floor(updatedDiff / (1000 * 60 * 60 * 24));

      setTimeLeft([{ days: updatedDays, hours: updatedHours, minutes: updatedMinutes, seconds: updatedSeconds }]);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <>
      <section className={styles.section_one}>
        <div className={styles.contents}>
          <figure className={styles.details}>
            <Image className={styles.president_pic} src={YoonImg} alt='visual' priority={true} />
            <figcaption className={styles.president_date}>
              <p className={styles.how_long}>
                <span>윤석열 대통령 임기 :</span> <br />
                2022년 5월 10일 ~ 2027년 5월 9일
              </p>
              <p className={styles.how_many_days}>
                <span>남은 임기 기간 : </span>
                {timeLeft[0].days === 0 ? (
                  <>calculating...</>
                ) : (
                  <>
                    {" "}
                    {timeLeft[0].days}일 {timeLeft[0].hours}시간 {timeLeft[0].minutes}분 {timeLeft[0].seconds}초
                  </>
                )}
              </p>
              <span className={styles.ps}>
                대한민국 화이팅.
                <br />
                서로 혐오하지 말고 긍적적으로 살아봐요.
                <br />
                <span>* 아무런 정치적 의도나 목적 없이 심심풀이로 제작된 사이트 입니다.</span>
              </span>
            </figcaption>
          </figure>
          <div className={styles.contact}>
            <a href='mailto:mycoside@gmail.com'>
              이메일 문의
              <Image src='https://www.svgrepo.com/show/479653/email-9.svg' width={20} height={20} alt='email icon' />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
