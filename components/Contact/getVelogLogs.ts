import { VELOG_RSS_URL } from "./constants";
import { ILog } from "./LogItem";

const MAX_LOGS = 4;
const KST_OFFSET_MS = 9 * 60 * 60 * 1000; //KST가 UTC보다 9시간 빠르기에 9시간 더해주기위해 준비한 상수

//velog 태그들에는 뭐가 있나
//title: 글제목. <![CDATA[...]]>로 감싸져있음
//link: 글주소
//pubDate: 발행일시
//guid: 글 고유 ID값
//description: 본문 HTML 전체
//ex.
// <title><![CDATA[Tanstack Query 핵심 정리]]></title>
// <link>https://velog.io/@jjjsun/...</link>
// <pubDate>Wed, 02 Sep 2026 05:59:56 GMT</pubDate>
// <description>...

//태그 안의 값을 꺼내는 함수
const pickTag = (xml: string, tag: string) => {
  const matched = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  if (!matched) return "";
  return matched[1].replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1").trim();
};

//날짜를 화면 형식으로 바꾸는 함수
const formatDate = (pubDate: string) =>
  new Date(new Date(pubDate).getTime() + KST_OFFSET_MS)
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", ".");

export async function getVelogLogs(): Promise<ILog[]> {
  const res = await fetch(VELOG_RSS_URL);
  if (!res.ok) throw new Error(`Velog RSS 요청 실패: ${res.status}`);

  const xml = await res.text();

  const logs = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
    .slice(0, MAX_LOGS)
    .map(([, item]) => ({
      title: pickTag(item, "title"),
      date: formatDate(pickTag(item, "pubDate")),
      tags: [],
      href: pickTag(item, "link"),
    }));

  if (logs.length === 0) throw new Error("Velog RSS에서 글을 찾지 못했습니다");
  return logs;
}
