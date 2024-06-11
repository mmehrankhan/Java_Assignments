
var assignmentArry = [

  {
    tital:"Notes app",
    link:"https://mmehrankhan.github.io/notes-app/",
    discription:"notes create , edit and delete",
    date:"6/06/2024",
    code:"https://github.com/mmehrankhan/notes-app"
  },
    {
      tital:"Finance Traking App",
      link:"https://mmehrankhan.github.io/finance_app/",
      discription:"manage income, expance, and profit or lost.",
      date:"22/05/2024",
      code:"https://github.com/mmehrankhan/finance_app"
    },
    {
      tital:"Text editor",
      link:"https://mmehrankhan.github.io/text_editer/",
      discription:"text bold, italic, underline and justification",
      date:"18/05/2024",
      code:"https://github.com/mmehrankhan/text_editer"
    },
    {
      tital:"Image Gallery",
      link:"https://mmehrankhan.github.io/image_gallery/",
      discription:"Use JS events to make Image Gallery.",
      date:"16/05/2024",
      code:"https://github.com/mmehrankhan/image_gallery"
    },
    {
      tital:"Attendence marking system",
      link:"https://mmehrankhan.github.io/atten_mark/",
      discription:"User can mark attendence using the app.",
      date:"-/05/2024",
      code:"https://github.com/mmehrankhan/atten_mark"
    },
    {
      tital:"'rgb' color picker",
      link:"https://mmehrankhan.github.io/rgb/",
      discription:"Can be make different color combinations.",
      date:"-/05/2024",
      code:"https://github.com/mmehrankhan/rgb"
    },
    
];

  var assignList = document.getElementById("all-assignments");

for(var i=0 ; i<assignmentArry.length ; i++){
    var div =`    <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div class="p-6">
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3 font-bold">${assignmentArry[i].tital}</h1>
          <p class="leading-relaxed mb-3">${assignmentArry[i].discription}</p>
          <p class="leading-relaxed mb-3">${assignmentArry[i].date}</p>
          <div class="flex items-center flex-wrap ">
          <a href="${assignmentArry[i].link}"
          class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">See preview
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
          </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <a href="${assignmentArry[i].code}">
          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
          </svg> </a> Code
          </span>
        </div>
      </div>
    </div>`
    assignList.innerHTML += div;
}
