# jjjsun.github.io

프론트엔드 개발자 박재선의 포트폴리오 사이트

## 기술 스택

- Next.js 16 (App Router), React 19, TypeScript 5
- 패키매니저: pnpm (npm, yarn 사용 금지)
- ESLint, prettier, Husky + lint-staged, Github Actions CI

## 도입 예정 스택 (도입 뒤에만 규칙 적용 / 미도입시 임의 설치 및 사용 금지)

- vanila extract, Framer Motion, GSAP
- vanilla extract 도입 후: 색과 간격은 정의된 토큰만 사용하고, 인라인 `style`이나 하드코딩한 색상 값은 쓰지 않는다

## 명령어

- `pnpm dev`: 개발 서버
- `pnpm build`: 빌드 및 타입 검사
- `pnpm lint` / `pnpm lint:fix`: ESLint 검사 / 자동 수정
- `pnpm format`: Prettier 포맷

## 브랜치 / 커밋 / PR

- 기본 브랜치는 `develop`, 배포 브랜치는 `main`
- 작업 순서: 이슈 등록 → `타입/#이슈번호` 브랜치 생성 → `develop`으로 PR
- 브랜치 예시: `feature/#12, setting/#3`
- 커밋 메세지: `타입: 내용` (ex. `feature: 프로젝트 카드 컴포넌트 추가`)
- 타입: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `setting`
- PR 제목: `[타입/#이슈번호] 내용` (ex. `[Setting/#3]` 코드 품질 도구 세팅)
- 이슈와 PR 본문은 `.github`의 템플릿 양식을 따른다

## 코드

### 컴포넌트

- 기본적으로 Server Component로 작성한다
- `"use client"`, `useState`, `useEffect`는 브라우저 API나 이벤트 핸들러가 필요한 최하단 컴포넌트에만 둔다
- 한 컴포넌트는 한 가지 책임만 갖는다. 같은 마크업이 2회 이상 반복되면 컴포넌트 추출을 제안한다
- 클릭 가능한 요소는 `button`이나 `Link`를 쓴다. `div`에 `onClick`을 달지 않는다
- 이미지는 `next/image`를 사용한다
- `useMemo`, `useCallback`을 기본으로 추가하지 않는다

### TypeScript / 네이밍

- `any`를 쓰지 않는다. 타입을 모르면 `unknown`으로 받아 좁힌다
- `interface`는 `I` 접두사 (`IProject`), `type`은 `T` 접두사 (`TTheme`)
- 컴포넌트 Props는 `T` + 컴포넌트명 + `Props` (`TButtonProps`)
- 불리언은 `isLoading`, `hasError` 형태, 이벤트 핸들러는 `handleClick`, `handleSubmit` 형태
- 조기 반환(Early Return)을 사용한다

### Import

- `@/` 절대경로를 사용한다. `../../` 같은 깊은 상대경로는 쓰지 않고, 같은 폴더만 `./`를 허용한다
- 포맷과 import 순서는 Prettier와 ESLint에 맡긴다

## 작업 방식

- 코드는 사용자가 직접 작성한다. 요청이 없으면 프로젝트 파일을 수정하지 말고, 수정할 위치와 방법을 설명한 뒤 완성 코드를 채팅에 보여 준다
- 커밋, 푸시, 이슈와 PR 등록은 사용자가 직접 한다.
- 요청받은 범위만 다룬다. 요청 없는 리팩터링, 파일 생성, README 작성을 하지 않는다
- 이 레포에 없는 스택(Tailwind, Zustand, React Query, Pages Router 등)의 패턴을 가져오지 않는다
- 의존성 추가가 필요하면 먼저 제안하고 승인을 받는다
- 맥락이 부족하면 추측하지 말고 필요한 파일이나 정보를 요청한다
- 설명은 한국어로 한다.
