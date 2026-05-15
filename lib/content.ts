export const meta = {
  title: 'The Sino-Indian Border Dispute',
  subtitle: "How a line Britain never finished drawing became one of Asia's most dangerous flashpoints",
  date: 'May 2026',
  course: 'Contemporary Conflicts — World History',
}

export const stats = [
  { label: 'Line of Actual Control', value: '3,488 km', note: 'never formally demarcated' },
  { label: 'Galwan Valley', value: '20 killed', note: 'June 2020 — first deaths since 1975' },
  { label: 'Last major war', value: '1962', note: 'China routed India in 3 weeks' },
]

export interface SectionImage {
  src: string
  caption: string
  credit: string
}

export const sectionImages: Record<string, SectionImage> = {
  overview: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Kashmir_Region_November_2019.jpg',
    caption: 'The Kashmir region and Line of Actual Control (LAC), showing contested territories between India, Pakistan, and China.',
    credit: 'CIA / Wikimedia Commons, public domain',
  },
  history: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aksai_Chin_Sino-Indian_border_map.svg/960px-Aksai_Chin_Sino-Indian_border_map.svg.png',
    caption: 'Aksai Chin: competing territorial claims. India claims the full region; China controls and administers it. The Johnson and MacDonald Lines represent competing British-era boundary proposals.',
    credit: 'Wikimedia Commons, public domain',
  },
  belligerents: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/China_India_CIA_map_border_disputes.jpg',
    caption: 'CIA overview map of China-India border disputes along the LAC.',
    credit: 'U.S. Central Intelligence Agency / Wikimedia Commons, public domain',
  },
}

export const sections: { id: string; title: string; paragraphs: string[] }[] = [
  {
    id: 'overview',
    title: 'Overview',
    paragraphs: [
      'The Sino-Indian border dispute centers on the Line of Actual Control (LAC), a roughly 3,488-kilometer de facto boundary separating Indian and Chinese-controlled territory across the Himalayas. The LAC is not a formally agreed or demarcated border — it is a ceasefire line, and both countries patrol up to their own interpretation of where it sits.',
      'The two primary contested zones are Aksai Chin in the west, a high-altitude plateau India claims as part of Ladakh but which China has controlled since the 1950s, and Arunachal Pradesh in the east, which India administers but China claims as "South Tibet." The most recent major flashpoint was the Galwan Valley in eastern Ladakh, where soldiers clashed in June 2020.',
    ],
  },
  {
    id: 'belligerents',
    title: 'Primary Belligerents',
    paragraphs: [
      'India is the world\'s largest democracy and a rising global power. Under Prime Minister Narendra Modi and the BJP, India has taken an increasingly assertive posture on border disputes, framing Chinese incursions as direct violations of sovereign territory.',
      'China is an authoritarian single-party state led by Xi Jinping. China employs "salami-slicing" — small, incremental territorial encroachments that individually fall below the threshold for a military response but cumulatively shift the facts on the ground. Both are nuclear powers, which places a hard ceiling on how far any confrontation can escalate.',
      'Other interested parties include the United States, which supports India through the Quad security partnership; Pakistan, China\'s closest regional ally whose CPEC corridor runs through disputed Kashmir; and Russia, historically India\'s arms supplier but now drifting toward China after Ukraine.',
    ],
  },
  {
    id: 'history',
    title: 'Historical Context',
    paragraphs: [
      'The roots of the dispute run directly through British imperialism. British surveyors produced two incompatible boundary lines in the western sector: the Johnson Line of 1865, placing Aksai Chin inside British India, and the MacDonald Line of 1899, placing it inside China. Britain never resolved which applied.',
      'In the eastern sector, the British drew the McMahon Line at the 1914 Simla Convention as India\'s border with Tibet. Chinese delegates attended but refused to sign. The PRC has never recognized the McMahon Line, arguing Tibet had no authority to negotiate borders on China\'s behalf. Every kilometer of the current dispute traces back to colonial-era decisions made for British convenience.',
      'For centuries, Tibet existed as an independent buffer state between Indian and Chinese civilization — there was no direct border dispute because Tibet absorbed it. That changed in 1950 when China annexed Tibet, making India and China direct neighbors for the first time in the modern era.',
      'Nehru initially pursued friendship — "Hindi-Chini bhai bhai." That collapsed on October 20, 1962, when China launched a coordinated surprise offensive on both fronts. Indian forces were routed: roughly 7,000 soldiers killed or captured in under a month. China declared a unilateral ceasefire and withdrew — but kept Aksai Chin. The wound never healed.',
    ],
  },
  {
    id: 'polycrisis',
    title: 'Relation to the Polycrisis',
    paragraphs: [
      'The Himalayas are sometimes called the Third Pole — the world\'s largest freshwater reservoir outside the Arctic. The Brahmaputra, Indus, and Ganges all originate here. As glaciers melt and water scarcity grows, the strategic value of the high ground increases, entangling the border dispute with long-term resource competition for two billion people downstream.',
      'Both nations are competing for the "China+1" manufacturing shift. After the 2020 Galwan clash, India banned 200+ Chinese apps and restricted Chinese investment — demonstrating how border conflict and economic competition reinforce each other.',
      'The dispute sits at the center of the broader democratic-authoritarian divide. The US frames India\'s conflict with China as part of the same global contest as Taiwan, Ukraine, and the South China Sea. Each dimension of the crisis feeds the others.',
    ],
  },
  {
    id: 'scenarios',
    title: 'Potential Scenarios',
    paragraphs: [
      'The most likely outcome is a frozen conflict. Nuclear deterrence keeps both sides from escalating, while domestic politics make formal territorial concessions impossible. Corps commander-level talks continue, achieving partial pullbacks while leaving underlying claims unresolved.',
      'A negotiated partial settlement is possible. Both governments benefit from trade stability, and Trump\'s 2025 tariff war created unusual economic pressure pushing them toward each other — Modi traveled to China in August 2025 for the first time in seven years.',
      'The most dangerous scenario is miscalculation during a domestic political crisis. The 2020 Galwan clash showed how fast a local standoff can produce casualties and a full diplomatic rupture. Both countries have strong nationalist movements that pressure leaders to project strength. A clash timed to an election cycle could spiral beyond what either government intends.',
    ],
  },
]

export const sources: { title: string; outlet: string; url: string }[] = [
  { title: 'What to Know About the Border Conflict Between China and India', outlet: 'Council on Foreign Relations', url: 'https://www.cfr.org/articles/what-know-about-border-conflict-between-china-and-india' },
  { title: 'The China-India Relationship: Between Cooperation and Competition', outlet: 'Council on Foreign Relations', url: 'https://www.cfr.org/backgrounders/china-india-relationship-between-cooperation-and-competition' },
  { title: 'Preparing for Heightened Tensions Between China and India', outlet: 'Council on Foreign Relations', url: 'https://www.cfr.org/reports/preparing-heightened-tensions-between-china-and-india' },
  { title: "India's Perilous Border Standoff With China", outlet: 'Foreign Affairs', url: 'https://www.foreignaffairs.com/india/modi-perilous-border-standoff-china' },
  { title: "China's Sovereignty Concerns Explain the Border Clash With India", outlet: 'Foreign Affairs', url: 'https://www.foreignaffairs.com/articles/china/2020-06-26/chinas-sovereignty-obsession' },
  { title: 'How India and China Pulled Back from a Border War — and Why Now', outlet: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2024/10/22/how-india-and-china-pulled-back-from-a-border-war-and-why' },
  { title: 'Five Things to Know About the India-China Border Standoff', outlet: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2020/6/22/five-things-to-know-about-the-india-china-border-standoff' },
  { title: 'China Admits It Lost Four Soldiers in 2020 India Border Clash', outlet: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2021/2/19/china-admits-it-lost-four-soldiers-in-2020-india-border-clash' },
  { title: 'India-China in New Spat over Arunachal Pradesh', outlet: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2025/11/26/india-china-in-new-spat-over-arunachal-pradesh-whats-it-all-about' },
  { title: 'McMahon Line', outlet: 'Britannica', url: 'https://www.britannica.com/event/McMahon-Line' },
  { title: 'Sino-Indian War', outlet: 'Britannica', url: 'https://www.britannica.com/topic/Sino-Indian-War' },
  { title: 'Key Dates in Decades-Long India-China Conflict', outlet: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2020/6/17/india-china-border-tensions-key-dates-in-decades-long-conflict' },
]
