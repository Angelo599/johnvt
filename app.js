const titles = [
  { id: 1, title: "Afterlight", display: "After\nlight", type: "Film", year: 2025, genre: "Dramat", runtime: "1 godz. 47 min", rating: "12", mood: "Kameralny", director: "Mara Venn", cast: "Rhea Ortiz, Saul Kim", tagline: "Niektóre pożegnania docierają do nas przez całe życie.", synopsis: "W miasteczku, w którym słońce pozostaje na niebie długo po północy, kinooperator zaczyna otrzymywać taśmy z chwilami, które jeszcze się nie wydarzyły. Czuła opowieść o pamięci, wyborach i historiach, które pomagają nam iść dalej.", colors: ["#ef654b", "#f4b4a4"], pattern: "linear-gradient(118deg, transparent 46%, rgba(23,34,29,.9) 47% 52%, transparent 53%), radial-gradient(circle at 70% 25%, #f6e8ce 0 15%, transparent 15.5%)" },
  { id: 2, title: "Moss Country", display: "Moss\nCountry", type: "Serial", year: 2024, genre: "Tajemnica", runtime: "6 odcinków", rating: "15", mood: "Niepokojący", director: "Ivo Bell", cast: "Nina Lowe, Harris Finch", tagline: "Las prowadzi doskonałe archiwum.", synopsis: "Kartograf wraca do zarośniętej doliny i odkrywa, że każdy szlak prowadzi do domu wymazanego z lokalnych map. Sześć dyskretnie niepokojących rozdziałów o odziedziczonych sekretach i krajobrazach, które o nich pamiętają.", colors: ["#223c30", "#76917d"], pattern: "repeating-radial-gradient(ellipse at 25% 90%, transparent 0 12px, rgba(216,245,43,.34) 13px 15px, transparent 16px 28px)" },
  { id: 3, title: "Tin Birds", display: "Tin\nBirds", type: "Film", year: 2023, genre: "Przygoda", runtime: "2 godz. 02 min", rating: "PG", mood: "Pełen nadziei", director: "Eleni Vo", cast: "Milo Fenn, Yara Das", tagline: "Aby przemierzyć świat, najpierw zbuduj skrzydła.", synopsis: "Dwoje nastoletnich mechaników konstruuje stado napędzanych wiatrem posłańców, by ponownie połączyć wyspy odcięte przez trwającą dekady burzę. Ręcznie wykonana przygoda o pomysłowości, przyjaźni i niemożliwych odległościach.", colors: ["#f2c54a", "#4b99af"], pattern: "linear-gradient(150deg, transparent 0 34%, rgba(255,255,255,.8) 35% 36%, transparent 37% 53%, rgba(23,34,29,.75) 54% 56%, transparent 57%)" },
  { id: 4, title: "The Quiet Shift", display: "The Quiet\nShift", type: "Serial", year: 2025, genre: "Komedia", runtime: "8 odcinków", rating: "12", mood: "Zgryźliwy", director: "Jonah Reed", cast: "Amal Fay, Tomo Price", tagline: "Nocna praca. Pogawędki. Kosmiczne konsekwencje.", synopsis: "Pracownicy całodobowej pralni odkrywają, że być może są jedynymi ludźmi, którzy nie śpią podczas niezwykle uprzejmej inwazji obcych. Osobliwa komedia biurowa o rutynie na granicy niezwykłości.", colors: ["#7b75b8", "#d8f52b"], pattern: "repeating-linear-gradient(90deg, transparent 0 35px, rgba(23,34,29,.22) 36px 37px), radial-gradient(circle at 50% 30%, rgba(243,237,223,.95) 0 8%, transparent 8.5%)" },
  { id: 5, title: "Salt Meridian", display: "Salt\nMeridian", type: "Film", year: 2022, genre: "Thriller", runtime: "1 godz. 55 min", rating: "15", mood: "Napięty", director: "Pavel Orr", cast: "Lena Ash, Dario Nnadi", tagline: "Każda granica pozostawia ślad.", synopsis: "Hydrograf odkrywa pas słodkiej wody biegnący przez otwarte morze — oraz statek badawczy zdeterminowany, by ukryć jego źródło. Oszczędny, wypłowiały od słońca thriller rozgrywający się daleko za horyzontem.", colors: ["#e9dfc9", "#337d8c"], pattern: "linear-gradient(176deg, transparent 0 42%, #327887 43% 62%, #1d4b58 63%), linear-gradient(83deg, transparent 0 54%, #ee593f 55% 57%, transparent 58%)" },
  { id: 6, title: "Small Gods at Noon", display: "Small Gods\nat Noon", type: "Film", year: 2024, genre: "Fantasy", runtime: "1 godz. 39 min", rating: "PG", mood: "Fantazyjny", director: "Ana Serein", cast: "Mei Laurent, Bo Akin", tagline: "Cuda wolą porę obiadową.", synopsis: "Sceptyczna krytyczka kulinarna odkrywa maleńkie bóstwa mieszkające w słoikach z przyprawami, z których każde spełnia bardzo konkretne i kłopotliwe życzenia. Jasna baśń o apetycie i uczeniu się, kiedy wystarczy.", colors: ["#f18a42", "#f4d56b"], pattern: "radial-gradient(circle at 25% 25%, rgba(243,237,223,.9) 0 3%, transparent 3.4%), radial-gradient(circle at 68% 55%, rgba(23,34,29,.7) 0 6%, transparent 6.5%), radial-gradient(circle at 42% 82%, rgba(238,89,63,.9) 0 9%, transparent 9.5%)" },
  { id: 7, title: "Northbound Static", display: "Northbound\nStatic", type: "Serial", year: 2023, genre: "Sci-fi", runtime: "7 odcinków", rating: "15", mood: "Atmosferyczny", director: "Cass Wynn", cast: "Eden Cho, Remy Pike", tagline: "Sygnał wie, dokąd zmierzasz.", synopsis: "Prowadzący nocną audycję radiową otrzymuje prognozy pogody z miast, które nie istnieją — wszystkie zapowiadają tę samą elektryczną burzę. Powoli rozwijająca się zagadka drogi, dostrojona do częstotliwości tuż poza rzeczywistością.", colors: ["#213057", "#89b6c8"], pattern: "repeating-linear-gradient(0deg, transparent 0 13px, rgba(216,245,43,.38) 14px 15px), linear-gradient(110deg, transparent 0 60%, rgba(238,89,63,.9) 61% 63%, transparent 64%)" },
  { id: 8, title: "Paper Moon Hotel", display: "Paper Moon\nHotel", type: "Film", year: 2021, genre: "Romans", runtime: "1 godz. 44 min", rating: "12", mood: "Słodko-gorzki", director: "Sofia Marek", cast: "Alice Ko, Jules Vega", tagline: "Zamelduj się. Odpłyń.", synopsis: "W podupadającym nadmorskim hotelu dwoje nieznajomych odkrywa, że ich pokoje dzielą ten sam powracający sen. Zmysłowy, nieoczywisty romans o pożyczonym czasie i odwadze, by się obudzić.", colors: ["#e8a8b7", "#286d68"], pattern: "radial-gradient(circle at 74% 22%, #f3eddf 0 13%, transparent 13.5%), linear-gradient(90deg, rgba(23,34,29,.75) 0 2%, transparent 2% 24%, rgba(23,34,29,.75) 24% 26%, transparent 26%)" },
  { id: 9, title: "The Last Orchard", display: "The Last\nOrchard", type: "Serial", year: 2024, genre: "Dramat", runtime: "5 odcinków", rating: "12", mood: "Refleksyjny", director: "Mina Holt", cast: "Iris Kane, Sol Bell", tagline: "To, co uprawiamy, żyje dłużej niż my.", synopsis: "Troje rodzeństwa spotyka się ponownie, by zebrać ostatni rodzinny plon i ułożyć przyszłość, której nikt z nich się nie spodziewał. Cierpliwy dramat zespołowy o ziemi, pracy i trudnym kształcie domu.", colors: ["#9c3f2f", "#dca44a"], pattern: "radial-gradient(ellipse at 25% 35%, rgba(23,34,29,.75) 0 10%, transparent 10.5%), radial-gradient(ellipse at 72% 66%, rgba(243,237,223,.55) 0 8%, transparent 8.5%)" },
  { id: 10, title: "Glossolalia", display: "Glosso\nlalia", type: "Film", year: 2025, genre: "Tajemnica", runtime: "1 godz. 31 min", rating: "15", mood: "Intelektualny", director: "Oren Vale", cast: "Samira North, Ken Li", tagline: "Każdy język ukrywa jakieś drzwi.", synopsis: "Lingwistka otrzymuje zadanie przetłumaczenia nagrania o nieznanym pochodzeniu. Gdy jego gramatyka nabiera kształtu, znajome pokoje zaczynają odsłaniać nieznane wyjścia.", colors: ["#d8f52b", "#7a50a0"], pattern: "repeating-linear-gradient(45deg, transparent 0 24px, rgba(23,34,29,.78) 25px 28px), linear-gradient(90deg, transparent 0 45%, rgba(243,237,223,.88) 46% 55%, transparent 56%)" },
  { id: 11, title: "Good Dog, Bad City", display: "Good Dog,\nBad City", type: "Serial", year: 2022, genre: "Komedia", runtime: "10 odcinków", rating: "12", mood: "Figlarny", director: "Bea Okoro", cast: "Luis Penn, Jo Sunday", tagline: "Jeden uczciwy nos w mieście pełnym przekrętów.", synopsis: "Skompromitowany detektyw otwiera firmę opiekującą się zwierzętami i przypadkiem rekrutuje najbardziej spostrzegawczego psa w mieście. Kudłata, serdeczna komedia z nową drobną zbrodnią co tydzień.", colors: ["#ea6146", "#4a7a8b"], pattern: "radial-gradient(circle at 50% 42%, rgba(23,34,29,.8) 0 15%, transparent 15.5%), radial-gradient(circle at 35% 26%, rgba(243,237,223,.8) 0 5%, transparent 5.5%), radial-gradient(circle at 65% 26%, rgba(243,237,223,.8) 0 5%, transparent 5.5%)" },
  { id: 12, title: "A Sea Made of Glass", display: "A Sea Made\nof Glass", type: "Film", year: 2020, genre: "Sci-fi", runtime: "2 godz. 11 min", rating: "12", mood: "Monumentalny", director: "Niko Aster", cast: "Fara Ume, Leon West", tagline: "Za brzegiem świat zaczyna się od nowa.", synopsis: "Oceanograf przemierza skrystalizowane morze, by odnaleźć źródło dźwięku pulsującego pod jego powierzchnią. Świetlista odyseja science fiction o zachwycie po ekologicznej przemianie.", colors: ["#88c7ca", "#e7e5db"], pattern: "linear-gradient(125deg, transparent 0 31%, rgba(255,255,255,.78) 32% 34%, transparent 35% 57%, rgba(23,34,29,.52) 58% 60%, transparent 61%), linear-gradient(35deg, transparent 0 60%, rgba(216,245,43,.7) 61% 63%, transparent 64%)" }
];

const state = { query: "", type: "all", genre: "Wszystkie", savedOnly: false, saved: new Set(JSON.parse(localStorage.getItem("kadr-i-czas-zapisane") || "[]")), activeId: null };
const grid = document.querySelector("#catalogGrid");
const count = document.querySelector("#resultCount");
const search = document.querySelector("#searchInput");
const empty = document.querySelector("#emptyState");
const dialog = document.querySelector("#detailsDialog");

function artStyle(item) {
  return `--poster: linear-gradient(145deg, ${item.colors[0]}, ${item.colors[1]}); --pattern: ${item.pattern}`;
}

function renderGenres() {
  const genres = ["Wszystkie", ...new Set(titles.map(item => item.genre))];
  document.querySelector("#genreFilters").innerHTML = genres.map(genre => `<button type="button" class="genre-chip ${state.genre === genre ? "active" : ""}" data-genre="${genre}" aria-pressed="${state.genre === genre}">${genre}</button>`).join("");
}

function visibleTitles() {
  const q = state.query.toLowerCase().trim();
  return titles.filter(item => {
    const matchesQuery = !q || [item.title, item.director, item.genre, item.mood, item.cast].join(" ").toLowerCase().includes(q);
    return matchesQuery && (state.type === "all" || item.type === state.type) && (state.genre === "Wszystkie" || item.genre === state.genre) && (!state.savedOnly || state.saved.has(item.id));
  });
}

function render() {
  const items = visibleTitles();
  const titleWord = items.length === 1 ? "tytuł" : (items.length >= 2 && items.length <= 4 ? "tytuły" : "tytułów");
  count.textContent = `${String(items.length).padStart(2, "0")} ${titleWord}`;
  empty.hidden = items.length !== 0;
  grid.hidden = items.length === 0;
  grid.innerHTML = items.map((item, i) => `
    <article class="title-card" style="animation-delay:${Math.min(i * 35, 220)}ms">
      <button class="poster-button" type="button" data-open="${item.id}" aria-label="Pokaż szczegóły: ${item.title}">
        <span class="poster" style="${artStyle(item)}">
          <span class="poster-top"><span>Kadr ${String(item.id).padStart(2, "0")}</span><span>${item.genre}</span></span>
          <span class="poster-title">${item.display}</span>
          <span class="poster-year">${item.year} / ${item.type}</span>
        </span>
      </button>
      <div class="card-meta">
        <div><h3>${item.title}</h3><p>${item.type} · ${item.runtime}</p></div>
        <button class="card-save ${state.saved.has(item.id) ? "saved" : ""}" type="button" data-save="${item.id}" aria-label="${state.saved.has(item.id) ? "Usuń z zapisanych" : "Zapisz"}: ${item.title}" aria-pressed="${state.saved.has(item.id)}"></button>
      </div>
    </article>`).join("");
  updateSavedUI();
}

function updateSavedUI() {
  document.querySelector("#savedCount").textContent = state.saved.size;
  document.querySelector("#savedFilter").setAttribute("aria-pressed", state.savedOnly);
  if (state.activeId) {
    const item = titles.find(entry => entry.id === state.activeId);
    const isSaved = state.saved.has(item.id);
    const button = document.querySelector("#detailSave");
    button.textContent = isSaved ? "✓ Zapisano w Twoim archiwum" : "+ Zapisz w swoim archiwum";
    button.classList.toggle("saved", isSaved);
  }
}

function toggleSaved(id) {
  state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
  localStorage.setItem("kadr-i-czas-zapisane", JSON.stringify([...state.saved]));
  render();
}

function openDetails(id) {
  const item = titles.find(entry => entry.id === id);
  state.activeId = id;
  document.querySelector("#detailPoster").style.cssText = artStyle(item);
  document.querySelector("#detailKicker").textContent = `Pozycja ${String(item.id).padStart(2, "0")} · ${item.type}`;
  document.querySelector("#detailTitle").textContent = item.title;
  document.querySelector("#detailTagline").textContent = item.tagline;
  document.querySelector("#detailFacts").innerHTML = [item.year, item.runtime, item.rating, item.genre, item.mood].map(fact => `<span>${fact}</span>`).join("");
  document.querySelector("#detailSynopsis").textContent = item.synopsis;
  document.querySelector("#detailCredits").innerHTML = `<div><small>Twórca</small><strong>${item.director}</strong></div><div><small>Obsada</small><strong>${item.cast}</strong></div>`;
  updateSavedUI();
  dialog.showModal();
}

document.addEventListener("click", event => {
  const open = event.target.closest("[data-open]");
  const save = event.target.closest("[data-save]");
  const genre = event.target.closest("[data-genre]");
  const type = event.target.closest("[data-type]");
  if (open) openDetails(Number(open.dataset.open));
  if (save) toggleSaved(Number(save.dataset.save));
  if (genre) { state.genre = genre.dataset.genre; renderGenres(); render(); }
  if (type) {
    state.type = type.dataset.type;
    document.querySelectorAll("[data-type]").forEach(button => { const active = button.dataset.type === state.type; button.classList.toggle("active", active); button.setAttribute("aria-pressed", active); });
    render();
  }
});

search.addEventListener("input", event => { state.query = event.target.value; render(); });
document.addEventListener("keydown", event => { if (event.key === "/" && document.activeElement !== search && !dialog.open) { event.preventDefault(); search.focus(); } });
document.querySelector("#savedFilter").addEventListener("click", () => { state.savedOnly = !state.savedOnly; render(); document.querySelector("#catalog").scrollIntoView(); });
document.querySelector("#clearFilters").addEventListener("click", () => {
  state.query = ""; state.type = "all"; state.genre = "Wszystkie"; state.savedOnly = false; search.value = "";
  document.querySelectorAll("[data-type]").forEach(button => { const active = button.dataset.type === "all"; button.classList.toggle("active", active); button.setAttribute("aria-pressed", active); });
  renderGenres(); render();
});
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.querySelector("#detailSave").addEventListener("click", () => toggleSaved(state.activeId));

renderGenres();
render();
