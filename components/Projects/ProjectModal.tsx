"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";

import * as cardStyles from "./ProjectCard.css";
import ProjectDetailSection from "./ProjectDetailSection";
import * as styles from "./ProjectModal.css";
import { IProject } from "./types";

const TROUBLE_STEPS = [
  { label: "문제", key: "problem" },
  { label: "원인", key: "reason" },
  { label: "해결", key: "solution" },
  { label: "결과", key: "result" },
] as const;

type TProjectModalProps = {
  project: IProject;
};

export default function ProjectModal({ project }: TProjectModalProps) {
  const {
    name,
    period,
    org,
    description,
    role,
    team,
    contributions,
    stack,
    links,
    troubleshootings,
    retrospective,
    videoUrl,
  } = project;
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const handleOpen = () => {
    dialogRef.current?.showModal();
    //닫아도 DOM이 남아서 이전 스크롤 위치가 유지되기때문에,열 때마다 맨 위가 먼저 보이도록
    dialogRef.current?.scrollTo(0, 0); //모바일은 dialog가 스크롤
    bodyRef.current?.scrollTo(0, 0); //데스크톱은 body가 스크롤
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    dialogRef.current?.close();
  };

  //ESE와 닫기 버튼 둘다 closed 이벤트로 모이니까 여기서만 내림
  const handleDialogClose = () => setIsOpen(false);

  return (
    <>
      <h3 className={cardStyles.name}>
        <button className={styles.trigger} type="button" onClick={handleOpen}>
          {name}
        </button>
      </h3>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby={titleId}
        onClose={handleDialogClose}
      >
        <button
          type="button"
          className={styles.closeButton}
          aria-label="닫기"
          onClick={handleCloseClick}
        >
          <span className={styles.closeIcon} aria-hidden="true" />
        </button>
        <div className={styles.media}>
          {isOpen && (
            <iframe
              className={styles.video}
              src={videoUrl}
              title={`${name} 소개 영상`}
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>
        <div ref={bodyRef} className={styles.body}>
          <p className={cardStyles.meta}>
            <span className={cardStyles.period}>
              {period} • {org}
            </span>
          </p>
          <h2 id={titleId} className={cardStyles.name}>
            {name}
          </h2>
          <p className={styles.description}>{description}</p>
          <dl className={cardStyles.info}>
            <div className={cardStyles.infoRow}>
              <dt className={cardStyles.infoLabel}>역할</dt>
              <dd className={cardStyles.infoText}>{role}</dd>
            </div>
            <div className={cardStyles.infoRow}>
              <dt className={cardStyles.infoLabel}>팀 구성</dt>
              <dd className={cardStyles.infoText}>{team}</dd>
            </div>
            <div className={cardStyles.infoRow}>
              <dt className={cardStyles.infoLabel}>나의 기여</dt>
              <dd className={cardStyles.infoText}>
                <ul className={styles.bulletList}>
                  {contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className={cardStyles.infoRow}>
              <dt className={cardStyles.infoLabel}>기술 스택</dt>
              <dd className={cardStyles.infoText}>{stack.join(" • ")}</dd>
            </div>
          </dl>

          {links.length > 0 && (
            <ul className={styles.links}>
              {links.map(({ label, href, icon, disabledReason }) => (
                <li key={label}>
                  {disabledReason ? (
                    <span
                      className={styles.linkDisabeld}
                      role="link"
                      aria-disabled="true"
                      tabIndex={0}
                      title={disabledReason}
                    >
                      <span
                        className={`${styles.linkIcon} ${styles.linkIconImage[icon]}`}
                        aria-hidden="true"
                      />
                      {label}
                    </span>
                  ) : (
                    <Link
                      className={styles.link}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        className={`${styles.linkIcon} ${styles.linkIconImage[icon]}`}
                        aria-hidden="true"
                      />
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
          <ProjectDetailSection title="트러블슈팅">
            <ul className={styles.itemList}>
              {troubleshootings.map((item) => (
                <li key={item.title}>
                  <h4 className={styles.itemName}>{item.title}</h4>
                  <ol className={styles.steps}>
                    {TROUBLE_STEPS.map(({ label, key }) => (
                      <li key={key} className={styles.step}>
                        <span className={styles.stepDot} aria-hidden="true" />
                        <p className={styles.stepLabel}>{label}</p>
                        <p className={styles.itemText}>{item[key]}</p>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </ProjectDetailSection>

          <ProjectDetailSection title="회고">
            <dl className={cardStyles.info}>
              <div className={cardStyles.infoRow}>
                <dt className={cardStyles.infoLabel}>배운 점</dt>
                <dd className={styles.itemText}>{retrospective.learned}</dd>
              </div>
              <div className={cardStyles.infoRow}>
                <dt className={cardStyles.infoLabel}>활용</dt>
                <dd className={styles.itemText}>{retrospective.apply}</dd>
              </div>
            </dl>
          </ProjectDetailSection>
        </div>
      </dialog>
    </>
  );
}
