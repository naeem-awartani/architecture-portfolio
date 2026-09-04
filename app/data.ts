export type Project={slug:string;number:string;title:string;type:string;category:string;location?:string;year:string;status:string;role?:string;area?:string;image:string;hero:string;statement:string;color:string;gallery:string[]};
export const projects:Project[]=[{
  slug:'anime-village',number:'01',title:'Anime Village',type:'Graduation Project / Architectural Thesis',
  category:'Cultural + Entertainment Architecture',location:'Airport Road, Syria',year:'2026',status:'Academic Thesis',area:'50,000 m²',
  image:'/projects/anime-village/2.png',hero:'/projects/anime-village/2.png',
  statement:'Anime Village is a graduation project exploring the relationship between architecture, storytelling, popular culture, and immersive public experience.',
  color:'#526f8d',gallery:Array.from({length:18},(_,i)=>`/projects/anime-village/${i+1}.png`)
},{
  slug:'fire-station',number:'02',title:'Fire Station',type:'Academic Project',
  category:'Civic / Public Architecture',location:'Jordan',year:'2026',status:'Academic Project',role:'Architectural Design / Visualization',
  image:'/projects/fire-station/1.png',hero:'/projects/fire-station/1.png',
  statement:'The Fire Station is an academic civic architecture project focused on operational clarity, rapid emergency response, functional zoning, and a strong public identity. The design organizes administrative, operational, training, and vehicle-support functions around clear circulation while using a contemporary architectural language to express readiness, safety, and civic presence.',
  color:'#785548',gallery:[1,3,2].map(i=>`/projects/fire-station/${i}.png`)
},{
  slug:'terraced-community-park',number:'03',title:'Terraced Community Park',type:'Academic / Conceptual Project',
  category:'Landscape Architecture / Public Space Design',year:'2026',status:'Academic / Conceptual Project',
  image:'/projects/terraced-community-park/3.png',hero:'/projects/terraced-community-park/2.png',
  statement:'Terraced Community Park is a landscape design project focused on creating a vibrant public space for recreation, social interaction, and everyday community life. The project combines layered seating terraces, pedestrian pathways, children’s play areas, sports courts, water features, and shaded gathering spaces within a cohesive and human-centered outdoor environment.',
  color:'#698260',gallery:[1,4,5,6].map(i=>`/projects/terraced-community-park/${i}.png`)
},{
  slug:'integrated-urban-district',number:'04',title:'Integrated Urban District',type:'Academic Project / Urban Planning + Mixed-Use Development',
  category:'Urban Planning + Mixed-Use Development',year:'2026',status:'Academic Project',
  image:'/projects/integrated-urban-district/2.png',hero:'/projects/integrated-urban-district/1.png',
  statement:'An academic urban planning project exploring a balanced residential district shaped by clear circulation, mixed-use edges, walkability, landscape integration, and a hierarchy of public and private spaces.',
  color:'#647466',gallery:[2,4,3,5].map(i=>`/projects/integrated-urban-district/${i}.png`)
}];
