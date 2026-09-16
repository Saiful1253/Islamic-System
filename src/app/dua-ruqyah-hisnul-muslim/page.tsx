"use client";

const categories = [
  {
    id: 1,
    title: "Dua's Importance",
    subtitle: "7 Subcat | 50 Duas",
    items: [
      "The servant is dependent on his Lord",
      "The most important thing to ask Allah for",
      "4. Allah's guidance #1",
      "5. Allah's guidance #2",
      "6. Allah's guidance #3",
      "7. Allah's guidance #4",
      "8. The servant is dependent on his Lord #1",
    ],
  },
  {
    id: 2,
    title: "Ask for paradise & protection from fire",
    subtitle: "7 Subcat | 50 Duas",
    items: [],
  },
  {
    id: 3,
    title: "Dua's Importance",
    subtitle: "7 Subcat | 50 Duas",
    items: [],
  },
];

const duas = [
  {
    id: 1,
    title: "1. The servant is dependent on his Lord #1",
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    transliteration: "Iyyaaka na'budu wa Iyyaaka nasta'een",
    translation:
      "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
    reference: "Surah Al-Fatir 35:15",
  },
  {
    id: 2,
    title: "2. The servant is dependent on his Lord #1",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "Laa ilaaha illallaahu wahdahu laa shareeka lahu, lahul mulku wa lahul hamdu wa huwa 'alaa kulli shay'in qadeer",
    translation:
      "None has the right to be worshipped but Allah alone, He has no partner. His is the dominion and His is the praise, and He is Able to do all things.",
    reference: "",
  },
];

function TopBar() {
  return (
    <header className="h-[64px] bg-[#FBFFFB] border-b border-[#e5e7eb] flex items-center justify-between py-2.5 px-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#166534] flex items-center justify-center text-white flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          </svg>
        </div>
        <div className="flex flex-col justify-center w-[305px] h-[44px]" style={{ gap: "8px" }}>
          <h1 className="text-xl font-bold text-[#1a1a1a] leading-none">Dua <span className="text-[#15803d]">&</span> Ruqyah</h1>
          <p className="text-sm text-[#6b7280] leading-none">Hisnul Muslim</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full text-[#4b5563] focus:outline-none focus:ring-0" onClick={() => alert('Search clicked')}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19Z" fill="#E1EBE1" fillOpacity="0.6"/>
            <path opacity="0.4" d="M18.625 25.75C22.56 25.75 25.75 22.56 25.75 18.625C25.75 14.69 22.56 11.5 18.625 11.5C14.69 11.5 11.5 14.69 11.5 18.625C11.5 22.56 14.69 25.75 18.625 25.75Z" fill="#417360"/>
            <path d="M25.975 26.5C25.84 26.5 25.705 26.4475 25.6075 26.35L24.2125 24.955C24.01 24.7525 24.01 24.4225 24.2125 24.2125C24.415 24.01 24.745 24.01 24.955 24.2125L26.35 25.6075C26.5525 25.81 26.5525 26.14 26.35 26.35C26.245 26.4475 26.11 26.5 25.975 26.5Z" fill="#417360"/>
          </svg>
        </button>
        <button className="p-2 rounded-full text-[#4b5563]" aria-label="Menu" onClick={() => alert('Menu clicked')}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19Z" fill="#E1EBE1" fillOpacity="0.6"/>
            <path opacity="0.4" d="M26.5 22.375V24.625C26.5 25.75 25.75 26.5 24.625 26.5H14.5C14.8075 26.5 15.1225 26.455 15.415 26.3575C15.4975 26.3275 15.58 26.2975 15.6625 26.26C15.925 26.155 16.18 26.005 16.405 25.81C16.4725 25.7575 16.5475 25.69 16.615 25.6225L16.645 25.5925L21.745 20.5H24.625C25.75 20.5 26.5 21.25 26.5 22.375Z" fill="#417360"/>
            <path opacity="0.6" d="M20.8599 14.1262C21.1749 14.1262 21.5168 14.2597 21.8335 14.5764L23.4243 16.1663C23.7408 16.4829 23.8735 16.825 23.8735 17.1399C23.8735 17.4549 23.7408 17.7969 23.4243 18.1136L21.3921 20.1458L17.9995 23.5325C17.9996 23.5218 18.0005 23.511 18.0005 23.5003V16.4622L19.8862 14.5764C20.2029 14.2598 20.5448 14.1263 20.8599 14.1262Z" fill="#417360" stroke="#417360"/>
            <path d="M15.625 11.5H13.375C12.25 11.5 11.5 12.25 11.5 13.375V23.5C11.5 23.7025 11.5225 23.905 11.56 24.1C11.5825 24.1975 11.605 24.295 11.635 24.3925C11.6725 24.505 11.71 24.6175 11.755 24.7225C11.7625 24.73 11.7625 24.7375 11.7625 24.7375C11.77 24.7375 11.77 24.7375 11.7625 24.745C11.8675 24.955 11.9875 25.1575 12.13 25.345C12.2125 25.4425 12.295 25.5325 12.3775 25.6225C12.46 25.7125 12.55 25.7875 12.6475 25.8625L12.655 25.87C12.8425 26.0125 13.045 26.1325 13.255 26.2375C13.2625 26.23 13.2625 26.23 13.2625 26.2375C13.375 26.29 13.4875 26.3275 13.6075 26.365C13.705 26.395 13.8025 26.4175 13.9 26.44C14.095 26.4775 14.2975 26.5 14.5 26.5C14.8075 26.5 15.1225 26.455 15.415 26.3575C15.4975 26.3275 15.58 26.2975 15.6625 26.26C15.925 26.155 16.18 26.005 16.405 25.81C16.4725 25.7575 16.5475 25.69 16.615 25.6225L16.645 25.5925C17.17 25.0525 17.5 24.31 17.5 23.5V13.375C17.5 12.25 16.75 11.5 15.625 11.5ZM14.5 24.625C13.8775 24.625 13.375 24.1225 13.375 23.5C13.375 22.8775 13.8775 22.375 14.5 22.375C15.1225 22.375 15.625 22.8775 15.625 23.5C15.625 24.1225 14.5 24.625Z" fill="#417360"/>
          </svg>
        </button>
        <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-[#E1EBE1] fillOpacity-60 hover:bg-[#dde6dd] text-sm text-[#374151]">
          <span className="inline-flex items-center justify-center overflow-hidden border border-[#e5e7eb]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Us-United-States--Streamline-Flagpack" height="24" width="24" className="w-[17px] h-[14px]">
              <path fill="#f7fcff" fillRule="evenodd" d="M0 3h24v18H0V3Z" clipRule="evenodd" strokeWidth="0.75"></path>
              <path fill="#e31d1c" fillRule="evenodd" d="M0 13.999500000000001v1.5h24v-1.5H0Zm0 2.7510000000000003v1.5h24v-1.5H0Zm0 -8.25v1.5h24v-1.5H0ZM0 19.5v1.5h24v-1.5H0Zm0 -8.25v1.5h24v-1.5H0ZM0 3v1.5h24V3H0Zm0 2.75025v1.5h24v-1.5H0Z" clipRule="evenodd" strokeWidth="0.75"></path>
              <path fill="#2e42a5" d="M0 3h15v9.75H0z" strokeWidth="0.75"></path>
                            <path fill="#f7fcff" fillRule="evenodd" d="m1.2915 5.20425 -0.5445 0.38175000000000003 0.18375 -0.6795 -0.48375 -0.4305h0.63225l0.21149999999999997 -0.55425 0.24825000000000003 0.5549999999999999h0.5385l-0.42299999999999993 0.42974999999999997 0.1635 0.6795 -0.5265 -0.3825Zm3 0 -0.5445 0.38175000000000003 0.18375 -0.6795 -0.48375 -0.4305h0.63225l0.21149999999999997 -0.55425 0.24825000000000003 0.5549999999999999h0.5385l-0.42299999999999993 0.42974999999999997 0.1635 0.6795 -0.5265 -0.3825Zm2.4555 0.38175000000000003 0.5445 -0.3825 0.5265 0.3825 -0.1635 -0.6795 0.42299999999999993 -0.4305h-0.5385l-0.24825000000000003 -0.55425 -0.21149999999999997 0.5549999999999999h-0.63225l0.48375 0.42974999999999997 -0.18375 0.6799Zm3.5445 -0.3825 -0.5445 0.3825 0.18375 -0.6795 -0.48375 -0.4305h0.6315l0.21225 -0.55425 0.24825000000000003 0.5549999999999999h0.5385l-0.42299999999999993 0.42974999999999997 0.1635 0.6795 -0.5265 -0.3825ZM0.747 8.58675l0.5445 -0.3825 0.5265 0.3825 -0.1635 -0.6795 0.42299999999999993 -0.4305h-0.5385l-0.24825000000000003 -0.55425 -0.21149999999999997 0.5549999999999999H0.44699999999999995l0.48375 0.42974999999999997 -0.18375 0.6795Zm3.5445 -0.3825 -0.5445 0.3825 0.18375 -0.6795 -0.48375 -0.4305h0.63225l0.21149999999999997 -0.55425 0.24825000000000003 0.5549999999999999h0.5385l-0.42299999999999993 0.42974999999999997 0.1635 0.6795 -0.5265 -0.3825Zm2.4555 0.3825 0.5445 -0.3825 0.5265 0.3825 -0.1635 -0.6795 0.42299999999999993 -0.4305h-0.5385l-0.24825000000000003 -0.55425 -0.21149999999999997 0.5549999999999999h-0.63225l0.48375 0.42974999999999997 -0.18375 0.6795Zm3.5445 -0.3825 -0.5445 0.3825 0.18375 -0.6795 -0.48375 -0.4305h0.6315l0.21225 -0.55425 0.24825000000000003 0.5549999999999999h0.5385l-0.42299999999999993 0.42974999999999997 0.1635 0.6795 -0.5265 -0.3825ZM0.747 11.58675l0.5445 -0.3825 0.5265 0.3825 -0.1635 -0.6795 0.42299999999999993 -0.4305h-0.5385l-0.24825000000000003 -0.55425 -0.21149999999999997 0.5549999999999999H0.4469999999999..." clipRule="evenodd" strokeWidth="0.75"></path>
            </svg>
          </span>
          <span>En</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <button className="flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-[#417360] hover:bg-[#356448] text-sm text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span>Support Us</span>
        </button>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="w-[280px] bg-[#FBFFFB] border-r border-[#e5e7eb] flex flex-col h-full overflow-y-auto">
      <nav className="flex-1 px-3 space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="space-y-1">
            <div className="flex items-start gap-3 px-2 py-2 rounded-lg hover:bg-[#f3f4f6] cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-lg">🕌</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#15803d] truncate">{category.title}</h3>
                <p className="text-xs text-[#6b7280] mt-0.5">{category.subtitle}</p>
              </div>
            </div>
            {category.items.length > 0 && (
              <div className="ml-4 pl-4 border-l-2 border-[#e5e7eb] space-y-1">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 text-xs text-[#6b7280] hover:text-[#15803d] cursor-pointer truncate"
                  >
                    {item}
      </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function DuaContent() {
  return (
    <main className="flex-1 overflow-y-auto bg-[#FBFFFB]">
      <div className="max-w-3xl mx-auto px-8 py-6">
        <nav className="flex items-center gap-2 text-xs text-[#6b7280] mb-6">
          <span className="flex items-center gap-1 hover:text-[#15803d] cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </span>
          <span>›</span>
          <span>...</span>
          <span>›</span>
          <span className="text-[#15803d]">Dua's Importance</span>
          <span>›</span>
          <span className="truncate">The servant is depen...</span>
        </nav>

        <div className="bg-[#f0fdf4] rounded-lg px-6 py-3 mb-8">
          <h2 className="text-sm font-semibold text-[#166534]">
            Section: The servant is dependent on his Lord
          </h2>
        </div>

        <div className="space-y-10">
          {duas.map((dua) => (
            <section key={dua.id} className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#9ca3af]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </span>
                <h3 className="text-base font-semibold text-[#15803d]">{dua.title}</h3>
              </div>

              <div className="text-right">
                <p className="text-2xl leading-loose text-[#1a1a1a]" style={{ fontFamily: "serif" }}>
                  {dua.arabic}
                </p>
              </div>

              <p className="text-sm text-[#6b7280] italic">{dua.transliteration}</p>

              <div>
                <h4 className="text-sm font-semibold text-[#1a1a1a] mb-2">Translation</h4>
                <p className="text-sm text-[#374151] leading-relaxed">{dua.translation}</p>
              </div>

              {dua.reference && (
                <div>
                  <h4 className="text-xs font-semibold text-[#1a1a1a] mb-1">Reference</h4>
                  <p className="text-xs text-[#6b7280]">{dua.reference}</p>
                </div>
              )}

              <div className="flex items-center gap-4 pt-4 border-t border-[#e5e7eb]">
                <button className="p-2 rounded-full hover:bg-[#f3f4f6] text-[#6b7280]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-[#f3f4f6] text-[#6b7280]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-[#f3f4f6] text-[#6b7280]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-[#f3f4f6] text-[#6b7280]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-[#f3f4f6] text-[#6b7280] ml-auto">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

function SettingsPanel() {
  const [fontSize, setFontSize] = React.useState(28);
  const [translationFontSize, setTranslationFontSize] = React.useState(28);
  const [arabicFont, setArabicFont] = React.useState("Uthmanic");

  return (
    <aside className="w-[300px] bg-[#FBFFFB] border-l border-[#e5e7eb] flex flex-col h-full overflow-y-auto">
      <div className="p-6 space-y-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[#15803d]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7V4h16v3" />
                  <path d="M9 20h6" />
                  <path d="M12 4v16" />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-[#15803d]">Font Settings</h3>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6" />
              </svg>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-xs font-medium text-[#1a1a1a] mb-2 block">Arabic Font Size</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="12"
                  max="48"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="flex-1 h-1.5 bg-[#e5e7eb] rounded-full appearance-none cursor-pointer accent-[#166534]"
                />
                <span className="text-xs text-[#6b7280] w-8 text-right">{fontSize}</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[#1a1a1a] mb-2 block">Translation Font Size</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="12"
                  max="48"
                  value={translationFontSize}
                  onChange={(e) => setTranslationFontSize(Number(e.target.value))}
                  className="flex-1 h-1.5 bg-[#e5e7eb] rounded-full appearance-none cursor-pointer accent-[#166534]"
                />
                <span className="text-xs text-[#6b7280] w-8 text-right">{translationFontSize}</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[#1a1a1a] mb-2 block">Arabic Script & Font Face</label>
              <div className="relative">
                <select
                  value={arabicFont}
                  onChange={(e) => setArabicFont(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#d1d5db] bg-white text-sm text-[#374151] appearance-none focus:outline-none focus:border-[#166534]"
                >
                  <option>Uthmanic</option>
                  <option>Naskh</option>
                  <option>Kufic</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7280]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5e7eb] pt-6">
          <button className="flex items-center justify-between w-full text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#15803d]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-[#1a1a1a]">View Settings</h3>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        <div className="border-t border-[#e5e7eb] pt-6">
          <button className="flex items-center justify-between w-full text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#15803d]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="13.5" cy="6.5" r="2.5" />
                  <path d="M17 14h2v3h-2z" />
                  <path d="M5 14h2v3H5z" />
                  <path d="M15.5 16c-1 2-3.5 3-6.5 3s-5.5-1-6.5-3" />
                  <path d="M17 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5h10v-5z" />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-[#1a1a1a]">Appearance Settings</h3>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}

import React from "react";

export default function DuaRuqyahHisnulMuslimPage() {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <DuaContent />
        <SettingsPanel />
      </div>
    </div>
  );
}


