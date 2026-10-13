// Hello World Language Globe — no libraries or build tools required.
const greetings = [
["English","Hello, World!"],["Spanish","¡Hola, mundo!"],["French","Bonjour le monde !"],["German","Hallo Welt!"],
["Italian","Ciao, mondo!"],["Portuguese","Olá, mundo!"],["Dutch","Hallo wereld!"],["Afrikaans","Hallo Wêreld!"],
["Swahili","Habari Dunia!"],["Zulu","Sawubona Mhlaba!"],["Xhosa","Molo Lizwe!"],["Yoruba","Ẹ n lẹ, Àgbáyé!"],
["Arabic","مرحبًا بالعالم!"],["Hebrew","שלום עולם!"],["Persian","سلام دنیا!"],["Urdu","ہیلو دنیا!"],
["Hindi","नमस्ते दुनिया!"],["Bengali","ওহে বিশ্ব!"],["Punjabi","ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ!"],["Gujarati","હેલો વર્લ્ડ!"],
["Marathi","नमस्कार जग!"],["Tamil","வணக்கம் உலகம்!"],["Telugu","హలో ప్రపంచం!"],["Kannada","ಹಲೋ ಪ್ರಪಂಚ!"],
["Malayalam","ഹലോ വേൾഡ്!"],["Sinhala","ආයුබෝවන් ලෝකය!"],["Nepali","नमस्कार संसार!"],["Thai","สวัสดีชาวโลก!"],
["Lao","ສະບາຍດີຊາວໂລກ!"],["Khmer","សួស្តីពិភពលោក!"],["Vietnamese","Xin chào thế giới!"],["Indonesian","Halo dunia!"],
["Malay","Helo dunia!"],["Filipino","Kumusta, mundo!"],["Burmese","မင်္ဂလာပါ ကမ္ဘာလောက!"],["Chinese (Simplified)","你好，世界！"],
["Chinese (Traditional)","你好，世界！"],["Japanese","こんにちは世界！"],["Korean","안녕하세요, 세계!"],["Mongolian","Сайн уу, дэлхий!"],
["Russian","Привет, мир!"],["Ukrainian","Привіт, світе!"],["Polish","Witaj, świecie!"],["Czech","Ahoj, světe!"],
["Slovak","Ahoj, svet!"],["Slovenian","Pozdravljen, svet!"],["Croatian","Pozdrav svijete!"],["Serbian","Здраво свете!"],
["Bulgarian","Здравей, свят!"],["Greek","Γεια σου, κόσμε!"],["Turkish","Merhaba dünya!"],["Armenian","Բարև աշխարհ!"],
["Georgian","გამარჯობა, მსოფლიო!"],["Irish","Dia dhuit, a dhomhain!"],["Welsh","Helo, byd!"],["Scottish Gaelic","Halò, a shaoghail!"],
["Icelandic","Halló heimur!"],["Swedish","Hej världen!"],["Norwegian","Hei, verden!"],["Danish","Hej verden!"],
["Finnish","Hei maailma!"],["Estonian","Tere, maailm!"],["Latvian","Sveika, pasaule!"],["Lithuanian","Labas, pasauli!"],
["Romanian","Salut, lume!"],["Hungarian","Helló, világ!"],["Albanian","Përshëndetje botë!"],["Macedonian","Здраво, свету!"],
["Basque","Kaixo mundua!"],["Catalan","Hola, món!"],["Galician","Ola, mundo!"],["Esperanto","Saluton, mondo!"],
["Latin","Salve, munde!"],["Haitian Creole","Bonjou, mond!"],["Quechua","Allin p’unchay, kay pacha!"],["Guarani","Mba'éichapa, yvy!"],
["Maori","Kia ora, e te ao!"],["Hawaiian","Aloha, e ke ao!"],["Samoan","Talofa, lalolagi!"],["Tongan","Mālō e lelei, māmani!"],
["Fijian","Bula, vuravura!"],["Malagasy","Manao ahoana, izao tontolo izao!"],["Amharic","ሰላም ዓለም!"],["Somali","Salaan, adduunyo!"],
["Hausa","Sannu, duniya!"],["Igbo","Ndewo, ụwa!"],["Kinyarwanda","Muraho, isi!"],["Sesotho","Dumela, lefatshe!"],
["Setswana","Dumela, lefatshe!"],["Shona","Mhoro, nyika!"],["Chichewa","Moni, dziko lapansi!"],["Luganda","Oli otya, ensi!"],
["Twi","Akwaaba, wiase!"],["Kurdish","Silav, cîhan!"],["Pashto","سلام نړۍ!"],["Kazakh","Сәлем, әлем!"],
["Uzbek","Salom, dunyo!"],["Azerbaijani","Salam, dünya!"],["Kyrgyz","Салам, дүйнө!"],["Tajik","Салом, ҷаҳон!"],
["Turkmen","Salam, dünýä!"],["Albanian (Gheg)","Tungjatjeta, botë!"],["Luxembourgish","Moien, Welt!"],["Yiddish","העלא וועלט!"],
["Tibetan","འཛམ་གླིང་ལ་བཀྲ་ཤིས་བདེ་ལེགས!"],["Uyghur","ياخشىمۇسىز دۇنيا!"],["Javanese","Halo, donya!"],["Sundanese","Halo dunya!"],
["Odia","ନମସ୍କାର ଦୁନିଆ!"],["Assamese","নমস্কাৰ পৃথিৱী!"],["Konkani","हॅलो संवसार!"],["Dogri","नमस्कार दुनिया!"],
["Kashmiri","آداب دنیا!"],["Sindhi","سلام دنيا!"],["Sanskrit","नमस्ते जगत्!"],["Old English","Wes hāl, woruld!"]
];

const canvas = document.getElementById('globe');
const ctx = canvas.getContext('2d');
const info = document.getElementById('info');
const count = document.getElementById('count');
const search = document.getElementById('search');
let angle = 0, speed = .6, running = true, last = 0, points = [], filtered = greetings.slice();
let drag = false, lastX = 0, lastY = 0, hover = null;
const rand = (a,b)=>a+Math.random()*(b-a);
function resize(){
 const r=canvas.getBoundingClientRect(), dpr=Math.min(window.devicePixelRatio||1,2);
 canvas.width=Math.round(r.width*dpr);canvas.height=Math.round(r.height*dpr);
 ctx.setTransform(dpr,0,0,dpr,0,0); makePoints();
}
function makePoints(){
 points=[];
 // Fibonacci sphere distribution gives a balanced, globe-like layout.
 const total=Math.max(260,greetings.length*4), golden=Math.PI*(3-Math.sqrt(5));
 for(let i=0;i<total;i++){
  const y=1-(i/(total-1))*2, radius=Math.sqrt(1-y*y), theta=golden*i;
  points.push({x:Math.cos(theta)*radius,y,z:Math.sin(theta)*radius,
    item:greetings[i%greetings.length], size:rand(9,13), phase:rand(0,Math.PI*2)});
 }
}
function project(p,cx,cy,R,a){
 const x=p.x*Math.cos(a)-p.z*Math.sin(a), z=p.x*Math.sin(a)+p.z*Math.cos(a);
 const perspective=0.78+0.22*(z+1)/2;
 return {x:cx+x*R,y:cy+p.y*R,z,scale:perspective,front:z>-.15};
}
function draw(ts=0){
 const w=canvas.clientWidth,h=canvas.clientHeight,cx=w/2,cy=h/2,R=Math.min(w,h)*.39;
 if(running&&!drag) angle+=(ts-last||16)*.00022*speed;
 last=ts;
 ctx.clearRect(0,0,w,h);
 // Ambient halo and wireframe shell
 const glow=ctx.createRadialGradient(cx,cy,R*.2,cx,cy,R*1.28);
 glow.addColorStop(0,'rgba(16,105,160,.14)');glow.addColorStop(.7,'rgba(22,170,220,.08)');glow.addColorStop(1,'rgba(15,70,110,0)');
 ctx.fillStyle=glow;ctx.beginPath();ctx.arc(cx,cy,R*1.3,0,Math.PI*2);ctx.fill();
 ctx.strokeStyle='rgba(69,205,244,.24)';ctx.lineWidth=1;
 ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.stroke();
 for(let k of [.35,.68]){
  ctx.beginPath();ctx.ellipse(cx,cy,R,R*k,0,0,Math.PI*2);ctx.strokeStyle='rgba(69,205,244,.12)';ctx.stroke();
 }
 let drawn=points.map(p=>({p,q:project(p,cx,cy,R,angle)})).filter(o=>o.q.front);
 drawn.sort((a,b)=>a.q.z-b.q.z);
 hover=null;
 for(const o of drawn){
  const {p,q}=o;
  if(search.value.trim()&&!(`${p.item[0]} ${p.item[1]}`).toLowerCase().includes(search.value.trim().toLowerCase())) continue;
  const x=q.x,y=q.y;
  const dx=(canvas._mx??-999)-x,dy=(canvas._my??-999)-y;
  const isHover=dx*dx+dy*dy<100;
  if(isHover)hover=p.item;
  const hue=(p.phase*90+angle*70)%360;
  ctx.globalAlpha=.35+((q.z+1)/2)*.65;
  ctx.fillStyle=isHover?'#ffffff':`hsl(${hue>170&&hue<240?190:hue},85%,${q.z>.55?67:56}%)`;
  ctx.font=`${isHover?'bold ':''}${Math.max(8,p.size*q.scale*(.68+(q.z+1)*.17))}px ui-monospace,monospace`;
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.shadowColor=isHover?'#aaf8ff':'rgba(32,185,255,.5)';ctx.shadowBlur=isHover?14:4;
  ctx.fillText(p.item[1],x,y);
 }
 ctx.shadowBlur=0;ctx.globalAlpha=1;
 if(hover)info.innerHTML=`<strong>${escapeHtml(hover[1])}</strong><br>${escapeHtml(hover[0])}`;
 else if(!search.value)info.innerHTML='<strong>世界你好 · Hello, World!</strong><br>Move your pointer over a greeting to discover its language.';
 count.textContent=`LANGUAGES: ${new Set(greetings.map(g=>g[0])).size}`;
 requestAnimationFrame(draw);
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
canvas.addEventListener('pointerdown',e=>{drag=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId)});
canvas.addEventListener('pointermove',e=>{
 const r=canvas.getBoundingClientRect();canvas._mx=e.clientX-r.left;canvas._my=e.clientY-r.top;
 if(drag){angle+=(e.clientX-lastX)*.008;lastX=e.clientX;lastY=e.clientY}
});
canvas.addEventListener('pointerup',()=>drag=false);canvas.addEventListener('pointercancel',()=>drag=false);
canvas.addEventListener('pointerleave',()=>{if(!drag){canvas._mx=-999;canvas._my=-999}});
document.getElementById('toggle').addEventListener('click',e=>{running=!running;e.currentTarget.textContent=running?'Pause rotation':'Resume rotation'});
document.getElementById('shuffle').addEventListener('click',()=>{greetings.sort(()=>Math.random()-.5);makePoints()});
document.getElementById('speed').addEventListener('input',e=>speed=Number(e.target.value));
search.addEventListener('input',()=>{info.innerHTML=search.value?`Showing matches for <strong>${escapeHtml(search.value)}</strong>`:'<strong>世界你好 · Hello, World!</strong><br>Move your pointer over a greeting to discover its language.'});
document.getElementById('clear').addEventListener('click',()=>{search.value='';info.innerHTML='<strong>世界你好 · Hello, World!</strong><br>Move your pointer over a greeting to discover its language.'});
window.addEventListener('resize',resize);
resize();requestAnimationFrame(draw);
