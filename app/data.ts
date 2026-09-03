export type Project={slug:string;number:string;title:string;type:string;category:string;location?:string;year:string;status:string;area?:string;image:string;hero:string;statement:string;color:string;gallery:string[]};
export const projects:Project[]=[{
  slug:'anime-village',number:'01',title:'Anime Village',type:'Graduation Project / Architectural Thesis',
  category:'Cultural + Entertainment Architecture',location:'Airport Road, Syria',year:'2026',status:'Academic Thesis',area:'50,000 m²',
  image:'/projects/anime-village/2.png',hero:'/projects/anime-village/2.png',
  statement:'Anime Village is a graduation project exploring the relationship between architecture, storytelling, popular culture, and immersive public experience.',
  color:'#526f8d',gallery:Array.from({length:18},(_,i)=>`/projects/anime-village/${i+1}.png`)
},{
  slug:'judicial-complex',number:'02',title:'Judicial Complex',type:'Academic Project / Public + Institutional Architecture',
  category:'Public + Institutional Architecture',location:'Qatana, Rural Damascus, Syria',year:'2026',status:'Academic Project',
  image:'/projects/judicial-complex/2.png',hero:'/projects/judicial-complex/1.png',
  statement:'The Judicial Complex is an academic architectural project that explores dignity, order, and civic presence through a historically influenced institutional language. The project balances public accessibility, security, spatial clarity, and a strong relationship between architecture, landscape, and context.',
  color:'#8a6f55',gallery:[2,4,5,6,3].map(i=>`/projects/judicial-complex/${i}.png`)
},{
  slug:'integrated-urban-district',number:'03',title:'Integrated Urban District',type:'Academic Project / Urban Planning + Mixed-Use Development',
  category:'Urban Planning + Mixed-Use Development',year:'2026',status:'Academic Project',
  image:'/projects/integrated-urban-district/2.png',hero:'/projects/integrated-urban-district/1.png',
  statement:'An academic urban planning project exploring a balanced residential district shaped by clear circulation, mixed-use edges, walkability, landscape integration, and a hierarchy of public and private spaces.',
  color:'#647466',gallery:[2,4,3,5].map(i=>`/projects/integrated-urban-district/${i}.png`)
}];
