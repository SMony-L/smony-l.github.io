(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/profile.cc6ac78c.jpg"},16:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(13),o=t.n(r),s=(t(21),t(2)),l=t(3),c=t(5),m=t(4),d=t(14),u=t.n(d),p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},i.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},i.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),i.a.createElement("span",{className:"d-none d-lg-block"},i.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:u.a,alt:""}))),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#projects"},"projects")))))}}]),t}(n.Component),g=t(7),h=t(10),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,i.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),i.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",i.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),i.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),i.a.createElement("div",{className:"social-icons"},i.a.createElement("a",{href:this.landingData.linkedin},i.a.createElement(g.a,{icon:h.b})),i.a.createElement("a",{href:this.landingData.github},i.a.createElement(g.a,{icon:h.a})))))}}]),t}(n.Component),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).experience=e.experience,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map(function(e,a){return i.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},i.a.createElement("div",{className:"resume-content"},i.a.createElement("h3",{className:"mb-0"},e.position),i.a.createElement("div",{className:"subheading mb-3"},e.organization),i.a.createElement("p",null,e.aboutWork)),i.a.createElement("div",{className:"resume-date text-md-right"},i.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),t}(n.Component),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map(function(e,a){return i.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},i.a.createElement("div",{className:"resume-content"},i.a.createElement("h3",{className:"mb-0"},e.university),i.a.createElement("div",{className:"subheading mb-3"},e.degree),i.a.createElement("div",{className:"lead mb-5"},e.major)),i.a.createElement("div",{className:"resume-date text-md-right"},i.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),t}(n.Component),y=t(15),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Skills"),i.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),i.a.createElement("div",{className:"row"},this.skills.map(function(e,a){return i.a.createElement("div",{key:a,className:"col-6"},i.a.createElement("p",{className:"list-item"},i.a.createElement(g.a,{icon:y.a,color:"green"}),i.a.createElement("span",{className:"ml-3"},e.name)))}))))}}]),t}(n.Component),N=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).projects=e.projects,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"projects"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Projects"),this.projects.map(function(e,a){return i.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},i.a.createElement("div",{className:"resume-content"},i.a.createElement("h3",{className:"mb-0"},e.title),i.a.createElement("div",{className:"subheading mb-3"},e.projectLang),i.a.createElement("p",null,e.aboutProject)))})))}}]),t}(n.Component),w=t(6),j=t(11),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={landingData:w.landing,experience:w.experience,education:w.education,skills:w.skills,projects:w.projects},j.a.initialize("UA-158818625-1"),j.a.pageview(window.location.pathname),n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{sidebarData:this.state.landingData}),i.a.createElement("div",{className:"container-fluid p-0"},i.a.createElement(f,{landingData:this.state.landingData}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(b,{experience:this.state.experience}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(v,{education:this.state.education}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(E,{skills:this.state.skills}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(N,{projects:this.state.projects})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports={landing:{firstName:"Sovanmony",lastName:"Lim",phoneNumber:"(978)996-3370",bio:"Passionate programmer with enterpreneurial mindset. Enjoy learning new emerging technologies and applications in the real world. Experienced Engineer with a demonstrated history of working in specialized financial services and technology. Intrested in Fin-Tech, IoT, Payment Services, Financial Services, Crypto-currency, Blockchain, Logistics and Stock Market. Purpose is to learn, share and inspire. 2019 Computer Science and minor Management graduate from University of Massachusetts Lowell.",email:"l.sovanmony@gmail.com",linkedin:"https://www.linkedin.com/in/smonylim/",github:"https://github.com/SMony-L"},experience:[{position:"Software Support Engineer",organization:"Very Good Security",aboutWork:"Collaborating with Front-end, Back-end, Integration, DevOps, and Core Infrastructure software engineers to problem-solve critical software production issues such as Vault API, HTTP Proxy, SFTP Proxy and native iOS/Android SDKs. Implementing automation tools to improve day-to-day work efficiency and manual task execution, improving overall application performance and availability by 15%. Assisting customers implementing complex integration with VGS products, debugging their custom codes, and ensuring issues are fully resolved and exceeding customer expectation. Upholding ongoing expert knowledge of diverse technologies and represent as a task force leader in creating, planning, and implementing technical articles to resolve product issues and future troubleshooting",fromDate:"January 2021",toDate:"Present"},{position:"Enterprise Architecture Co-op (Application Engineer)",organization:"MFS Investment Management",aboutWork:"Designed, implemented, and maintained Enterprise Architecture Kanban boards using Jira in development, stage, and production environment to expedite review process, which results in a 20% increase in efficiency. Collaborated with Application Engineer Specialists to develop automated transitions, fields update, email assignments, conditions, and validations of project workflows in Groovy using ScriptRunner. Developed and implemented custom fields using JavaScript in Jira projects to create real-time synchronization between BMC Remedy ITSM tool and Salesforce SRM ticketing system. Analyzed system database, developed application models, and generated interactive reports using MicroStrategy BI for monthly and quarterly dashboards",fromDate:"January 2019",toDate:"December 2019"},{position:"Information Technology Technician",organization:"University of Massachusetts Lowell",aboutWork:"Applied images, installed software, and configured devices for over 200 deployment of staff and faculty. Troubleshot, diagnosed, and resolved ranging from software to hardware to connectivity issues. Maintained confidentiality and integrity of information residing on clients\u2019 systems as well as their physical security. Collaborated with Support Engineers to maintain over 490 computers in Digital Learning Center labs",fromDate:"May 2018",toDate:"December 2018"},{position:"Co-Founder",organization:"DAB X (Social Media Online Shop provides: Authentic | High-Quality | Luxurious | Limited Edition | Super Rare - Clothing and Footwear)",aboutWork:"Conducted retail activities such as prepared business strategies, managed inventory, implemented marketing activities, fulfilled and shipped online orders. Acted as the primary point of contact for customers including orders, order inquiries, shipping inquiries, returns, and complaints. Managed online store revenue including cash handling and ensured an accurate to all payment processing and refunds",fromDate:"January 2017",toDate:"December 2018"},{position:"Information Technology Support Technician",organization:"American University of Phnom Penh",aboutWork:"Worked closely with IT department manager and provided on-site technical support to students and professors. Resolved hardware and software issues such as operating system configuration, password reset, and printer hook-ups",fromDate:"January 2016",toDate:"July 2016"},{position:"Software Engineer Intern",organization:"ArrowDot Co., Ltd",aboutWork:"Collaborated in an agile development team to develop, test, and deploy new software patches such as bug fixes, enhanced usability, proposed improvements, and updated documentation. Supported Mobile Application Engineers in planning, designing, developing, and implementing a high-performance user-friendly mobile application",fromDate:"January 2015",toDate:"March 2015"}],education:[{university:"University of Massachusetts Lowell",degree:"Bachelor of Science",major:"Computer Science with minor Business Management",fromDate:"September 2016",toDate:"December 2019"}],skills:[{name:"C/C++"},{name:"Python"},{name:"Java"},{name:"HTML5"},{name:"CSS3"},{name:"Javascript"},{name:"MySQL"},{name:"React.js"},{name:"Node.js"},{name:"Git"},{name:"GitHub"},{name:"Docker"},{name:"Jira"},{name:"Confluence"},{name:"Familiar with Swift"},{name:"Familiar with Groovy"},{name:"Knowledge in Kotlin"},{name:"Exposure to Azure"},{name:"Exposure to AWS"},{name:"Linux"},{name:"Windows"},{name:"macOS"},{name:"Terminal"},{name:"iOS and Android SDK"},{name:"Exposure to MongoDB"},{name:"Exposure to RESTful API"},{name:"Learning and Exploring Kubernetes"}],projects:[{title:"AI Pac Man",projectLang:"Python",aboutProject:"Implemented various AI techniques such as DFS, BFS, UCS, A*, alpha-beta pruning, minimax, expectimax, MDP, and Q-learning for the game of Pac-Man. Designed strategies for the agents to play a multi-player capture-the-flag variant of Pacman."},{title:"Solving Classification and Regression Problems Using Machine and Deep Learning",projectLang:"Python",aboutProject:"Collaborated in a team of four to analyze datasets from Scikit-learn library with linear regression, multivariate regression, decision tree, SVM and multi-layer perception classifier. Analyzed and generated ad-hoc reports with Jupyter Notebook and Latex"},{title:"Memory allocation and memory free operation",projectLang:"C++",aboutProject:"The allocation and free operations will be made against an initially empty fixed sized free memory pool. The program must support three allocation policies: First fit linked list, Best fit linked list, Buddy system power of 2 block allocation (using a minimum allocation of 32 bytes)"}]}}},[[16,1,2]]]);
//# sourceMappingURL=main.dd1896f4.chunk.js.map