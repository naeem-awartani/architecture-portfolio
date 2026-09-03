import {projects,Project} from '../../data';
import {notFound} from 'next/navigation';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=projects.find(x=>x.slug===slug);
  return p?{title:`${p.title} — Naeem Al-Awartany`,description:p.statement,openGraph:{title:p.title,description:p.statement,images:[p.hero]},twitter:{card:'summary_large_image',title:p.title,description:p.statement,images:[p.hero]}}:{};
}

const CaseHeader=({p}:{p:Project})=><>
  <header className="case-nav"><a href="/" className="mark"><span>NA</span><small>NAEEM AL-AWARTANY<br/>ARCHITECTURE + MATTER</small></a><a href="/#work">Close project ×</a></header>
  <section className="case-hero"><img src={p.hero} alt={`${p.title} architectural overview`}/><div className="case-overlay"><p>{p.type.toUpperCase()} · {p.year}</p><h1>{p.title}</h1><span>{p.category}{p.location&&` · ${p.location}`}</span></div></section>
</>;

const CaseFacts=({p,children}:{p:Project;children:React.ReactNode})=><section className="case-intro"><div className="section-label"><b>01</b><span>Project Brief</span></div><h2>{p.statement}</h2><div className="case-facts"><dl><div><dt>Author</dt><dd>Naeem Al-Awartany</dd></div>{p.location&&<div><dt>Location</dt><dd>{p.location}</dd></div>}<div><dt>Year</dt><dd>{p.year}</dd></div><div><dt>Type</dt><dd>{p.type}</dd></div><div><dt>Category</dt><dd>{p.category}</dd></div>{p.area&&<div><dt>Area</dt><dd>{p.area}</dd></div>}</dl><p>{children}</p></div></section>;

function JudicialComplex({p}:{p:Project}){return <main className="case thesis-case">
  <CaseHeader p={p}/>
  <CaseFacts p={p}>The proposal treats the judicial institution as a civic place: accessible and legible to the public while maintaining the controlled movement, clear thresholds, and security required by its program.</CaseFacts>
  <section className="thesis-section dark"><div className="section-label light"><b>02</b><span>Design Intent</span></div><div><h2>Dignity, order,<br/>and civic presence.</h2><p>A historically influenced architectural language gives the complex a recognizable public identity. Formal massing, measured repetition, landscaped approaches, and clearly defined entrances work together to create an institution that is authoritative without becoming inaccessible.</p></div></section>
  <section className="renders"><header className="gallery-head"><div className="section-label"><b>03</b><span>Selected Architectural Views</span></div><p>Architecture / landscape / civic approach</p></header><div className="render-gallery">{p.gallery.map((image,i)=><figure key={image} className={(i===0||i===3)?'wide':''}><img src={image} alt={`Judicial Complex architectural visualization ${String(i+1).padStart(2,'0')}`}/><figcaption>VIEW / {String(i+1).padStart(2,'0')}</figcaption></figure>)}</div></section>
  <section className="final-statement"><div className="section-label light"><b>04</b><span>Final Statement</span></div><blockquote>“The Judicial Complex brings civic dignity, spatial clarity, security, and public accessibility into one coherent relationship between institution, landscape, and context.”</blockquote><p>Naeem Al-Awartany · Academic Project · 2026</p></section>
  <a className="next-project" href="/projects/integrated-urban-district"><span>Next project</span><h2>Integrated Urban District ↗</h2></a>
</main>}

function IntegratedUrbanDistrict({p}:{p:Project}){return <main className="case thesis-case">
  <CaseHeader p={p}/>
  <CaseFacts p={p}>The proposal organizes residential neighborhoods, active mixed-use edges, landscaped public space, and a legible street hierarchy into one connected district. Walkable routes and transitions between public and private space shape the everyday urban experience.</CaseFacts>
  <section className="thesis-section dark"><div className="section-label light"><b>02</b><span>Urban Strategy</span></div><div><h2>Connected streets,<br/>balanced neighborhoods.</h2><p>Clear circulation establishes the district framework, while mixed-use frontages activate key edges and intersections. Residential clusters work at a more intimate scale, supported by landscape, pedestrian connections, and a hierarchy of shared and private spaces.</p></div></section>
  <section className="renders"><header className="gallery-head"><div className="section-label"><b>03</b><span>Selected Urban Views</span></div><p>Circulation / mixed use / housing / landscape</p></header><div className="render-gallery">{p.gallery.map((image,i)=><figure key={image} className={(i===0||i===3)?'wide':''}><img src={image} alt={`Integrated Urban District visualization ${String(i+1).padStart(2,'0')}`}/><figcaption>{['URBAN ORGANIZATION + STREET HIERARCHY','MIXED-USE STREET + PUBLIC FRONTAGE','RESIDENTIAL TYPOLOGY + ARCHITECTURAL SCALE','NEIGHBORHOOD PATTERN + LANDSCAPE'][i]}</figcaption></figure>)}</div></section>
  <section className="final-statement"><div className="section-label light"><b>04</b><span>Final Statement</span></div><blockquote>“Integrated Urban District proposes a balanced neighborhood structure where circulation, mixed use, walkability, housing, and landscape support a coherent everyday urban life.”</blockquote><p>Naeem Al-Awartany · Academic Urban Planning Project · 2026</p></section>
  <a className="next-project" href="/projects/judicial-complex"><span>Previous project</span><h2>Judicial Complex ↗</h2></a>
</main>}

function AnimeVillage({p}:{p:Project}){return <main className="case thesis-case">
  <CaseHeader p={p}/>
  <CaseFacts p={p}>The thesis approaches entertainment architecture as a cultural and public-space question. Buildings, landscape, circulation, gathering spaces, and narrative environments are composed as one connected architectural experience.</CaseFacts>
  <section className="thesis-section dark"><div className="section-label light"><b>02</b><span>Concept</span></div><div><h2>Storytelling becomes<br/>a spatial framework.</h2><p>The project translates popular culture into thresholds, districts, landmarks, public routes, and shared experiences—treating narrative as an architectural organizer rather than surface decoration.</p></div></section>
  <section className="thesis-image-section"><div className="section-label"><b>03</b><span>Site + Context</span></div><figure><img src="/projects/anime-village/17.png" alt="Anime Village site entrance and surrounding landscape"/><figcaption>Airport Road, Syria · Arrival edge and landscape context</figcaption></figure></section>
  <section className="thesis-image-section masterplan"><div className="section-label"><b>04</b><span>Masterplan</span></div><figure><img src="/projects/anime-village/2.png" alt="Anime Village aerial masterplan showing buildings, public spaces, landscape and circulation"/><figcaption>Overall organization · buildings · public realm · landscape · movement</figcaption></figure></section>
  <section className="thesis-pair"><div className="section-label"><b>05</b><span>Program</span></div><div className="pair-grid"><figure><img src="/projects/anime-village/6.png" alt="Academic and cultural building cluster"/><figcaption>Cultural and educational program</figcaption></figure><div className="program-list"><span>01 / Cultural districts</span><span>02 / Exhibition + learning</span><span>03 / Performance + event spaces</span><span>04 / Retail + hospitality</span><span>05 / Landscape + public realm</span><span>06 / Entertainment attractions</span></div></div></section>
  <section className="thesis-image-section landscape"><div className="section-label"><b>06</b><span>Landscape + Public Life</span></div><figure><img src="/projects/anime-village/18.png" alt="Landscaped pedestrian route at Anime Village"/><figcaption>Pedestrian route · planting · lighting · gathering</figcaption></figure></section>
  <section className="renders"><header className="gallery-head"><div className="section-label"><b>07</b><span>Selected Renders</span></div><p>Architecture / public space / atmosphere</p></header><div className="render-gallery">{p.gallery.slice(2).map((image,i)=><figure key={image} className={(i%7===0||i%7===4)?'wide':''}><img src={image} alt={`Anime Village architectural visualization ${String(i+1).padStart(2,'0')}`}/><figcaption>VIEW / {String(i+1).padStart(2,'0')}</figcaption></figure>)}</div></section>
  <section className="final-statement"><div className="section-label light"><b>08</b><span>Final Statement</span></div><blockquote>“Anime Village proposes architecture as a bridge between story and public life—an immersive cultural landscape shaped by buildings, movement, memory, and imagination.”</blockquote><p>Naeem Al-Awartany · Architectural Thesis · 2026</p></section>
  <a className="next-project" href="/projects/judicial-complex"><span>Next project</span><h2>Judicial Complex ↗</h2></a>
</main>}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=projects.find(x=>x.slug===slug);
  if(!p)notFound();
  if(p.slug==='judicial-complex')return <JudicialComplex p={p}/>;
  if(p.slug==='integrated-urban-district')return <IntegratedUrbanDistrict p={p}/>;
  return <AnimeVillage p={p}/>;
}
