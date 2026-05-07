/**
 * shelf（堂主のおすすめ）の静的データ。
 *
 * 件数が少ない間は Content Collection を使わず、ここで管理する。
 * 将来的に件数が増えた場合は src/content/shelf/ に移行する。
 *
 * フィールド:
 *   id        — URL などで使う識別子（小文字ケバブ）
 *   title     — 作品・本などのタイトル
 *   author    — 著者・作者名
 *   category  — 棚内の区分ラベル（表示用）
 *   comment   — なぜここにあるかを堂主の言葉で記す（30〜150字程度）
 *   url       — 外部リンク（Amazon等）。省略可。アフィリエイトを含む場合は別途表記が必要
 *   imageUrl  — 書影 URL。省略可。将来、画像表示を実装する際に使う
 */

export interface ShelfItem {
  id: string;
  title: string;
  author: string;
  category: string;
  comment: string;
  url?: string;
  imageUrl?: string;
}

export const shelfItems: ShelfItem[] = [
  {
    id: 'tono-monogatari',
    title: '遠野物語',
    author: '柳田国男',
    category: '民俗・記録',
    comment:
      '土地で聞いた話を、聞いた形のまま書き留めたもの。土地の話を書くたびに、この本の距離感に戻ってくる。',
  },
  {
    id: 'wasurerareta-nihonjin',
    title: '忘れられた日本人',
    author: '宮本常一',
    category: '民俗・聞き書き',
    comment:
      '怪異の話ではない。土地の記憶とともに生きてきた人の話を、丁寧に聞き取っていく本。この姿勢が、ここに並ぶ話を書くときの下敷きになっている。',
  },
  {
    id: 'meido',
    title: '冥途',
    author: '内田百閒',
    category: '幻想短編',
    comment:
      '夢の話のように書かれているが、夢の話ではない。日常の中に異常がひっそりあって、誰も驚かない。日常のわずかなずれを書くとき、ここへ戻ってくる。',
  },
];
