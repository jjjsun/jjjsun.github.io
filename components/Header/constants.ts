export interface IMenuItem {
  id: string;
  label: string;
  ko: string;
}

export const MENU_ITEMS: IMenuItem[] = [
  { id: "about", label: "About", ko: "소개" },
  { id: "projects", label: "Projects", ko: "프로젝트" },
  { id: "timeline", label: "Timeline", ko: "연혁" },
  { id: "faq", label: "FAQ", ko: "인터뷰" },
  { id: "contact", label: "Contact", ko: "연락" },
];
