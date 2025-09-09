/*
Project: Anime World Randomiser — React + Tailwind v2
Files included below. Create a new React app (Vite recommended) and copy these files into the project.

File map:
- package.json
- postcss.config.cjs
- tailwind.config.cjs
- public/index.html
- src/main.jsx
- src/App.jsx
- src/components/RandomCard.jsx
- src/data/pools.js
- src/index.css
- README.md

This single-file preview exports the default React component (App) in src/App.jsx.
*/

/* ===== package.json ===== */
{
  "name": "anime-randomiser-v2",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "file-saver": "^2.0.5",
    "html2canvas": "^1.4.1",
    "query-string": "^8.1.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.23",
    "tailwindcss": "^3.4.5",
    "vite": "^5.0.0"
  }
}

/* ===== postcss.config.cjs ===== */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

/* ===== tailwind.config.cjs ===== */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/* ===== public/index.html ===== */
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Anime World Randomiser</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

/* ===== src/main.jsx ===== */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/* ===== src/index.css ===== */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --bg:#0b0f14;
  --panel:#0f1724;
  --muted:#9fb0c6;
  --brand:#7c5cff;
  --brand-2:#14c9c9;
}

html,body,#root{height:100%}
body{background:linear-gradient(180deg,#071021,#0b0f14);color:#e6eef8;font-family:Inter,ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}

/* small helpers */
.card-shadow{box-shadow:0 8px 30px rgba(2,6,23,.6)}

/* ===== src/data/pools.js ===== */
export const Pools = {
  OnePiece: {
    origins: ["East Blue","West Blue","North Blue","South Blue","Grand Line","New World","Calm Belt","Sky Island","Fish-Man Island"],
    roles: ["Pirate","Marine","Revolutionary","Bounty Hunter","Cipher Pol Agent","Navigator","Cook","Doctor","Sniper","Shipwright","Musician","Helmsman","Archaeologist","Cartographer","Inventor","Martial Artist"],
    affiliations: ["Independent Crew","Small Rookie Crew","Supernova Crew","Warlord (former)","Yonko Associate","World Government","Revolutionary Army","Marine HQ","Cipher Pol","Seven Seas Merchants Guild"],
    shipTypes: ["Sloop","Brig","Caravel","Galleon","Clipper","Submarine","Waver (Sky Boat)","Coated Ship","Raft (somehow)"],
    climates: ["Tropical","Summer","Winter","Autumn","Spring","Thunderstorm Belt","Flaming Isle","Frozen Archipelago","Desert","Jungle","Bubble Archipelago"],
    styles: ["Swordsmanship","Rokushiki","Fish-Man Karate","Electro","Scuffling Brawler","Sniper Marksman","Okama Kenpo","Kempo","Black Leg Style","Polearm Mastery"],
    haki: ["None","Observation Haki","Armament Haki","Observation + Armament","Conqueror's Haki (rare)"],
    companions: ["Seagull","Goat","Monkey","Tiny Dragon","Chatty Parrot","Polar Bear","Baby Sea King (??)","Raccoon Dog","Snail (Den Den)"],
    epithetAdjs:["Red","Storm","Silent","Smiling","Iron","Ghost","Thunder","Lucky","Clever","Wild","Calm","Silver","Scarlet","Azure","Onyx","Crimson","Ivory"],
    epithetNouns:["Cutlass","Tide","Whisper","Anchor","Gale","Mirage","Riddle","Harpoon","Cannon","Reef","Voyager","Chart","Jester","Tempest","Shadow","Comet","Knuckle"],
    devilMiBases:["Gomu","Mera","Hana","Bari","Kage","Tori","Neko","Inu","Hie","Ame","Kumo","Tatsu","Den","Suna","Goro","Mochi","Nori","Kiri","Yuki","Toki"],
    devilMiKinds:["Paramecia","Zoan","Mythical Zoan","Logia","Special Paramecia"],
    bounties: [8000000,30000000,66000000,120000000,250000000,400000000,550000000,800000000,1200000000,2000000000]
  },
  DBZ: {
    races: ["Human","Saiyan (Low-class)","Saiyan (Elite)","Half-Saiyan","Namekian (Warrior)","Namekian (Healer)","Android","Majin","Frieza Race","Kai"],
    alignments: ["Hero","Anti-hero","Rival","Villain"],
    mentors: ["Master Roshi","Korin","Kami","King Kai","Whis","Piccolo","Vegeta","Goku","Android 16","Elder Kai","Beerus"],
    planets: ["Earth","Planet Vegeta (alt timeline)","Namek","New Namek","King Kai's Planet","Beerus's World","Supreme Kai Realm","Planet Yardrat","Planet Frieza #79"],
    training: ["Capsule Corp Gravity Room","Hyperbolic Time Chamber","Lookout","Korin's Tower","King Kai's Planet","Beerus's World","Namekian Dojo","Wilderness Survival","Yardrat Spirit Training"],
    techniques: ["Kamehameha","Galick Gun","Special Beam Cannon","Destructo Disc","Solar Flare","Masenko","Final Flash","Big Bang Attack","Spirit Bomb","Instant Transmission","Kaio-ken","Tri-Beam","Wolf Fang Fist"],
    auras: ["Blue","Red","Yellow","White","Silver","Purple","Green"]
  },
  ExtraWorlds: {
    Naruto: {
      clans: ["Uchiha","Hyuga","Uzumaki","Senju","Akimichi","Nara","Yamanaka","Inuzuka","Aburame","Sarutobi","Hatake"],
      roles: ["Ninja (Genin)","Chunin","Jonin","ANBU","Rogue Ninja","Kage","Medic-nin"],
      kekkeiGenkai: ["Sharingan","Byakugan","Wood Release","Ice Release","Lava Release","Magnet Release"],
      jutsu: ["Fireball","Shadow Clone","Rasengan","Chidori","Summoning","Gentle Fist","Sealing"],
    },
    // Additional worlds can be added here
  }
}

/* ===== src/components/RandomCard.jsx ===== */
import React from 'react'

export default function RandomCard({title, value, locked, onLockToggle, onReroll}){
  return (
    <div className={`bg-[var(--panel)] rounded-2xl p-4 relative card-shadow ${locked? 'ring-2 ring-indigo-400/30':''}`}>
      <div className="absolute top-3 right-3 flex gap-2">
        <button onClick={onReroll} className="p-2 bg-slate-800 rounded-lg border border-white/6 text-sm">🔁</button>
        <button onClick={onLockToggle} className="p-2 bg-slate-800 rounded-lg border border-white/6 text-sm">{locked? '🔓':'🔒'}</button>
      </div>
      <h4 className="text-xs text-[var(--muted)] uppercase font-bold">{title}</h4>
      <div className="mt-2 text-lg font-extrabold">{value}</div>
    </div>
  )
}

/* ===== src/App.jsx ===== */
import React, {useEffect, useMemo, useState, useRef} from 'react'
import RandomCard from './components/RandomCard'
import {Pools} from './data/pools'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
import qs from 'query-string'

// small seeded RNG utilities (same as before)
function xmur3(str){
  let h=1779033703^str.length;
  for(let i=0;i<str.length;i++){
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  return function(){
    h = Math.imul(h ^ (h>>>16), 2246822507);
    h = Math.imul(h ^ (h>>>13), 3266489909);
    h ^= h>>>16;
    return h>>>0;
  }
}
function mulberry32(a){
  return function(){
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t>>>15, t | 1);
    t ^= t + Math.imul(t ^ t>>>7, t | 61);
    return ((t ^ t>>>14) >>> 0) / 4294967296;
  }
}
function seeded(seed){
  if(!seed) return Math.random;
  const s = xmur3(seed)();
  return mulberry32(s);
}
function pick(rng, arr){ return arr[Math.floor(rng()*arr.length)] }
function chance(rng, p){ return rng() < p }
function shuffle(arr, rng){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(rng()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function formatBerries(n){return n.toLocaleString()+" Berries"}

/* Generators for worlds */
function genOnePiece(rng){
  const devilFruit = chance(rng, 0.6)
    ? `${pick(rng,Pools.OnePiece.devilMiBases)} ${pick(rng,Pools.OnePiece.devilMiBases)} no Mi (${pick(rng,Pools.OnePiece.devilMiKinds)})`
    : "None";
  const haki = devilFruit==="None" ? pick(rng,Pools.OnePiece.haki) : pick(rng,Pools.OnePiece.haki);
  const bounty = pick(rng,Pools.OnePiece.bounties);
  const epithet = `${pick(rng,Pools.OnePiece.epithetAdjs)} ${pick(rng,Pools.OnePiece.epithetNouns)}`;
  return {
    World: "One Piece",
    "Epithet": epithet,
    Origin: pick(rng,Pools.OnePiece.origins),
    Role: pick(rng,Pools.OnePiece.roles),
    Affiliation: pick(rng,Pools.OnePiece.affiliations),
    "Fighting Style": pick(rng,Pools.OnePiece.styles),
    "Devil Fruit": devilFruit,
    Haki: haki,
    "Ship Type": pick(rng,Pools.OnePiece.shipTypes),
    "Island Climate": pick(rng,Pools.OnePiece.climates),
    Companion: pick(rng,Pools.OnePiece.companions),
    Bounty: formatBerries(bounty)
  }
}

function genDBZ(rng){
  const race = pick(rng,Pools.DBZ.races);
  let forms = ["None"];
  if(/Saiyan/i.test(race) || /Half-Saiyan/i.test(race)){
    forms = ["None","Super Saiyan","Super Saiyan 2","Super Saiyan 3","Super Saiyan God","Super Saiyan Blue","Ultra Instinct (sign)","Ultra Instinct (mastered)","Great Ape (Oozaru)"];
  } else if(/Namekian/i.test(race)){
    forms = ["None","Great Namekian","Fusion (Namekian)"];
  } else if(/Android/i.test(race)){
    forms = ["None","Overclock Mode","Absorption Upgrade"];
  } else if(/Majin/i.test(race)){
    forms = ["None","Pure Form","Absorption Form"];
  } else if(/Frieza/i.test(race)){
    forms = ["None","Final Form","Golden Form","Black Form"];
  } else if(/Kai/i.test(race)){
    forms = ["None","Potential Unleashed","Divine Ascension"];
  }
  const band = pick(rng, [[900,2000],[4000,9000],[9001,30000],[30001,150000],[150001,800000],[800001,3000000],[3000001,15000000]]);
  const power = Math.floor(band[0] + (band[1]-band[0]) * rng());
  const techs = shuffle([...Pools.DBZ.techniques], rng).slice(0, 3 + Math.floor(rng()*3));
  let alignmentPool = [...Pools.DBZ.alignments];
  if(/Saiyan|Half-Saiyan|Human|Namekian/i.test(race)) alignmentPool = ["Hero","Hero","Rival","Anti-hero"];
  if(/Frieza|Majin/i.test(race)) alignmentPool = ["Villain","Villain","Rival","Anti-hero"];
  const alignment = pick(rng, alignmentPool);
  return {
    World: "Dragon Ball Z",
    Race: race,
    Alignment: alignment,
    Mentor: pick(rng,Pools.DBZ.mentors),
    Planet: pick(rng,Pools.DBZ.planets),
    "Training Focus": pick(rng,Pools.DBZ.training),
    "Signature Techniques": techs.join(", "),
    "Battle Aura": pick(rng,Pools.DBZ.auras),
    Transformations: pick(rng, forms),
    "Power Level": power.toLocaleString()
  }
}

function genNaruto(rng){
  const cl = pick(rng,Pools.ExtraWorlds.Naruto.clans);
  const role = pick(rng,Pools.ExtraWorlds.Naruto.roles);
  const jutsu = shuffle(Pools.ExtraWorlds.Naruto.jutsu, rng).slice(0,2).join(', ');
  return {
    World: 'Naruto',
    Clan: cl,
    Role: role,
    'Kekkei Genkai': pick(rng,Pools.ExtraWorlds.Naruto.kekkeiGenkai),
    'Signature Jutsu': jutsu,
  }
}

const WORLD_GENERATORS = {
  OnePiece: genOnePiece,
  DBZ: genDBZ,
  Naruto: genNaruto
}

export default function App(){
  const parsed = qs.parse(location.search);
  const initialWorld = parsed.world || 'OnePiece';
  const initialSeed = parsed.seed || '';

  const [world, setWorld] = useState(initialWorld);
  const [seed, setSeed] = useState(initialSeed);
  const [data, setData] = useState({});
  const [locks, setLocks] = useState({});
  const [saved, setSaved] = useState(() => {
    try{ return JSON.parse(localStorage.getItem('savedChars')||'[]') }catch(e){return[]}
  });
  const cardRef = useRef(null);

  useEffect(()=>{
    // if seed provided, generate on load
    generate();
    // eslint-disable-next-line
  },[])

  function randomSeed(){
    const words = ["sunny","storm","cosmic","quantum","pirate","marine","saiyan","namek","dragon","wave","comet","nova","lotus","shadow","ember","crystal","tide","rift"];
    return `${pick(Math.random,words)}-${pick(Math.random,words)}-${Math.floor(Math.random()*1000)}`;
  }

  function generate(keepLocks=true){
    const s = seed || randomSeed();
    setSeed(s);
    const rng = seeded(s);
    const gen = WORLD_GENERATORS[world] || genOnePiece;
    const base = gen(rng);
    // respect locks
    const out = {...base};
    if(keepLocks){
      Object.keys(locks).forEach(k=>{
        if(locks[k] && data && k in data) out[k]=data[k];
      })
    }
    setData(out);
    // update URL for shareability
    const q = qs.stringify({world, seed: s});
    history.replaceState(null, '', `?${q}`);
  }

  function toggleLock(key){
    setLocks(prev=>({ ...prev, [key]: !prev[key] }))
  }

  function rerollKey(key){
    if(locks[key]) return;
    const rng = seeded(seed || randomSeed());
    const gen = WORLD_GENERATORS[world] || genOnePiece;
    const temp = gen(rng);
    setData(prev=>({ ...prev, [key]: temp[key] }))
  }

  function saveCharacter(){
    const entry = {id: Date.now(), world, seed, character: data, createdAt: new Date().toISOString()};
    const next = [entry, ...saved].slice(0,50);
    setSaved(next);
    localStorage.setItem('savedChars', JSON.stringify(next));
  }

  function exportPNG(){
    if(!cardRef.current) return;
    html2canvas(cardRef.current, {backgroundColor: null, scale:2}).then(canvas=>{
      canvas.toBlob(blob=>{
        saveAs(blob, `${world.toLowerCase()}-character.png`);
      })
    })
  }

  function downloadJSON(){
    const blob = new Blob([JSON.stringify({world, seed, character:data, generatedAt:new Date().toISOString()}, null, 2)], {type:'application/json'});
    saveAs(blob, `${world.toLowerCase()}-character.json`);
  }

  function copyText(){
    const text = Object.entries(data).map(([k,v])=>`${k}: ${v}`).join('\n');
    navigator.clipboard.writeText(text).then(()=>alert('Copied to clipboard'))
  }

  return (
    <div className="min-h-screen p-6">
      <header className="max-w-5xl mx-auto flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl" style={{background:'linear-gradient(135deg, var(--brand), var(--brand-2))'}}></div>
          <div>
            <h1 className="text-2xl font-extrabold">Anime World Randomiser</h1>
            <p className="text-sm text-[var(--muted)]">React + Tailwind — multiple worlds, share links, PNG & JSON export</p>
          </div>
        </div>

        <div className="flex gap-2">
          <select value={world} onChange={e=>setWorld(e.target.value)} className="bg-slate-900 px-3 py-2 rounded-lg">
            <option value="OnePiece">One Piece</option>
            <option value="DBZ">Dragon Ball Z</option>
            <option value="Naruto">Naruto</option>
          </select>
          <input value={seed} onChange={e=>setSeed(e.target.value)} placeholder="optional seed" className="bg-slate-900 px-3 py-2 rounded-lg" />
          <button onClick={()=>{ setSeed(''); generate(false) }} className="px-3 py-2 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-400 font-bold">Generate</button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 space-y-4">
          <div ref={cardRef} className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 card-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(data).length === 0 ? (
                <div className="col-span-1 text-[var(--muted)]">No data yet—click Generate.</div>
              ) : (
                Object.entries(data).map(([k,v])=> (
                  <RandomCard key={k} title={k} value={v} locked={!!locks[k]} onLockToggle={()=>toggleLock(k)} onReroll={()=>rerollKey(k)} />
                ))
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={saveCharacter} className="px-4 py-2 rounded-lg bg-emerald-600 font-bold">Save</button>
            <button onClick={exportPNG} className="px-4 py-2 rounded-lg bg-indigo-600 font-bold">Export PNG</button>
            <button onClick={downloadJSON} className="px-4 py-2 rounded-lg bg-slate-700 font-bold">Download JSON</button>
            <button onClick={copyText} className="px-4 py-2 rounded-lg bg-slate-700 font-bold">Copy Text</button>
            <button onClick={()=>{ setLocks({}); alert('Locks reset.') }} className="px-4 py-2 rounded-lg bg-slate-700 font-bold">Reset Locks</button>
          </div>

          <div>
            <h3 className="text-sm text-[var(--muted)] font-bold mb-2">Saved Characters</h3>
            <div className="space-y-2 max-h-60 overflow-auto">
              {saved.length===0 && <div className="text-[var(--muted)]">No saved characters yet.</div>}
              {saved.map(s=> (
                <div key={s.id} className="p-3 bg-slate-900 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold">{s.character.Epithet || s.character.Race || s.character.World}</div>
                    <div className="text-xs text-[var(--muted)]">{new Date(s.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={()=>{ setData(s.character); setSeed(s.seed); alert('Loaded into editor'); }} className="px-2 py-1 bg-slate-700 rounded">Load</button>
                    <button onClick={()=>{ navigator.clipboard.writeText(location.origin+location.pathname+`?${qs.stringify({world:s.world,seed:s.seed})}`); alert('Share link copied'); }} className="px-2 py-1 bg-slate-700 rounded">Share</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="p-4 bg-slate-900 rounded-2xl">
            <h4 className="text-sm text-[var(--muted)] uppercase font-bold">Share / Embed</h4>
            <p className="mt-2 text-xs text-[var(--muted)]">Current share URL is updated automatically. Use the Save button to keep results in your browser.</p>
            <div className="mt-3 flex flex-col gap-2">
              <input readOnly value={location.origin+location.pathname+`?${qs.stringify({world,seed})}`} className="bg-slate-800 px-3 py-2 rounded" />
              <button onClick={()=>{ navigator.clipboard.writeText(location.origin+location.pathname+`?${qs.stringify({world,seed})}`); alert('URL copied') }} className="px-3 py-2 rounded bg-indigo-600 font-bold">Copy Share URL</button>
            </div>
          </div>

          <div className="p-4 bg-slate-900 rounded-2xl">
            <h4 className="text-sm text-[var(--muted)] uppercase font-bold">Worlds</h4>
            <ul className="mt-2 text-sm text-[var(--muted)] space-y-1">
              <li>One Piece — bounties, devil fruits, haki</li>
              <li>Dragon Ball Z — power levels, auras, transformations</li>
              <li>Naruto — clans, kekkei genkai (basic support)</li>
            </ul>
          </div>

          <div className="p-4 bg-slate-900 rounded-2xl">
            <h4 className="text-sm text-[var(--muted)] uppercase font-bold">Deploy</h4>
            <p className="text-xs text-[var(--muted)] mt-2">Build with <code>npm run build</code> (Vite). Push the output to GitHub and enable GitHub Pages, or set up GitHub Actions to deploy automatically.</p>
          </div>
        </aside>
      </main>
    </div>
  )
}

/* ===== README.md ===== */
# Anime World Randomiser — React + Tailwind v2

This is a single-page React app (Vite + Tailwind) implementing:
- Multiple worlds (One Piece, DBZ, Naruto)
- Seeded random generation (shareable link)
- Save to localStorage
- Export character as PNG (html2canvas)
- Download JSON and copy text
- Lock individual fields and reroll

## Run locally
1. npm install
2. npm run dev

## Build
npm run build

*/
