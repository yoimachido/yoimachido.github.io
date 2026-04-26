export const copy = {
  tagline: "作ったもの、試したもの、考えたことをまとめていく場所です。",
  heroLead: "宵町堂の作品・実験・記録",
  latest: "最近の更新",
  emptyWorks: { title: "まだ公開している作品はありません", sub: "これから少しずつ追加していきます" },
  emptyLabs:  { title: "まだ公開している実験はありません", sub: "まとまったものから順に追加していきます" },
  emptyNotes: { title: "まだ記録はありません", sub: "これから書いていきます" },
  emptyShelf: { title: "まだ棚に追加したものはありません", sub: "気になっているものを、ここに置いていきます" },
  shelfLabel: "宵町堂の棚",
  shelfShort: "町棚",
} as const;

// works.category（content.config.ts の z.enum と同期）の読者向けラベル。
// 詳細ページの breadcrumb で内部 enum 文字列が露出しないようにする。
// 未知のキーが来ても落ちないよう、参照側で fallback を取る前提（`label[category] ?? category`）。
export const categoryLabel: Record<string, string> = {
  'short-story': '短編',
  'visual': 'ビジュアル',
  'web': 'Web',
  'zine': 'zine',
  'other': 'その他',
};
