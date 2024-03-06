// import imgs
const iconPaths = [];
const importAll = (myKey) => myKey.keys().forEach(key => iconPaths.push(myKey(key)));
// Import all icons from the Inverted-Icons directory
importAll(require.context('./img/Inverted-Icons/', false, /\.png/));


// Create CONTENT_MASTERLIST dynamically
const CONTENT_MASTERLIST = iconPaths.map((iconPath, index) => ({
  imgsrc: iconPath,
  key: index+1,
}));



  
  const sdg_circles = [
    {
      img:CONTENT_MASTERLIST[3].imgsrc,
      id: "four",
      content: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. The world is falling behind in achieving quality education. The pandemic caused learning losses in 4 in 5 of 104 countries studied.",
      num: [["11", "publications"],["1813", "actions"],["10", "targets"],["41", "events"],],
    
    },
    {
      img:CONTENT_MASTERLIST[1].imgsrc,
      id: "two",
      content: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture. More than 600 million people worldwide are projedcted to face hunger in 2030. 1 in 3 people worldwide struggle with moderate to severe food security.",
      num: [["17", "publications"],["1366", "actions"],["8", "targets"],["84", "events"],],
   
    },
    {
      img:CONTENT_MASTERLIST[0].imgsrc,
      id: "one",
      content: "End poverty in all its forms everywhere. If current trends continue, by 2030 575 million people will still  be living in its extreme poverty. Only one-third of countries will have halved their national poverty crises. Many of the world's vulnerable population remain uncovered by social protection.",
      num: [["49", "publications"],["1430", "actions"],["7", "targets"],["98", "events"],],
    
     
    },
    {
      img:CONTENT_MASTERLIST[2].imgsrc,
      id: "three",
      content: "Ensure healthy lives and promote well-being for all at all ages. 146 out of 200 countries or areas have already met or are on track to meet the under-5 mortality target. At least one neglected tropical disease has been eliminated in 47 countries. ",
      num: [["47", "publications"],["1285", "actions"],["13", "targets"],["34", "events"],],
   
      
    },
    {
      img:CONTENT_MASTERLIST[15].imgsrc,
      id: "sixteen",
      content: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels. 108.4 million people had been forcibly displaced worlwide as of end-2022, 2.5x the number a decade ago.",
      num: [["14", "publications"],["1033", "actions"],["12", "targets"],["43", "events"],],
  
    },
  
  ]
  


  export {sdg_circles};