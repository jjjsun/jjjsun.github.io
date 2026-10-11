"use client";

import { useId, useRef, useState } from "react";

import { IProject } from "./ProjectCard";
import * as cardStyles from "./ProjectCard.css";
import * as styles from "./ProjectModal.css";

type TProjectModalProps = {
  project: IProject;
};

export default function ProjectModal({ project }: TProjectModalProps) {
  const { name, period, org, description, role, stack, videoUrl } = project;
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const handleOpen = () => {
    dialogRef.current?.showModal();
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
          <span aria-hidden="true">Ⅹ</span>
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
        <div className={styles.body}>
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
              <dt className={cardStyles.infoLabel}>기술 스택</dt>
              <dd className={cardStyles.infoText}>{stack.join(" • ")}</dd>
            </div>
          </dl>
        </div>
      </dialog>
    </>
  );
}
