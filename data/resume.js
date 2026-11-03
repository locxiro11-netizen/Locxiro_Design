/* =====================================================================
   简历数据 —— 以后改个人信息 / 工作经历只改这个文件
   ---------------------------------------------------------------------
   · log：工作经历时间线，从上到下按时间倒序
       y  = 时间     c = 公司 · 项目组     t = 职位 · 说明
       now: true 表示当前这份工作（高亮）
       go : 点这条能直接跳进对应档案（echo / nba / personal），不填则不可点
   · profile：右侧 PROFILE 面板的字段，可自行增删
   · 联系方式只需改 tel / telFmt，全站四处会自动同步
   ===================================================================== */
window.RESUME = {
  name:  { cn:'刘天翼', en:['LIU','TIANYI'] },
  brand: { en:'LIU TIANYI', role:'GAME INTERFACE DESIGNER', os:'ARCHIVE', osb:'OS' },
  intro: "LIU TIANYI'S PERSONAL ARCHIVE. A CURATED COLLECTION OF GAME INTERFACE, SYSTEM & LIVE-OPS DESIGN WORKS, 2020 — 2026.",

  log: [
    { y:'2026.04 — NOW', c:'上海腾讯子公司腾娱互动 · K项目组', t:'高级游戏UI设计师 · 《Chasing Kaleido》', now:true },
    { y:'2024 — 2026', c:'天抒网络 · 《NBA：王朝崛起》', t:'体育竞技活动 / 商业化 / 港澳台多语言', go:'nba' },
    { y:'2024',        c:'第七大道 · 《弹弹堂：平行时空》', t:'2.0 UI 重构 · 主体风格与各级界面' },
    { y:'2021 — 2023', c:'游族网络 · 《绯色回响》', t:'活动 / 系统界面 · 日本iOS畅销榜前列', go:'echo' },
    { y:'2021',        c:'英澈网络 · 《晴空之下》', t:'前期风格探索 · 基础风格与规范' },
    { y:'2020',        c:'游斐网络 · 界面设计师', t:'界面延展设计 · ICON 制作' }
  ],

  /* 右下角「NOW ONLINE」卡片 */
  current:{ lg:'KALEIDO', dot:'.', sb:'CHASING KALEIDO · K-PROJECT',
            cn:'上海腾讯子公司腾娱互动 · 高级游戏UI设计师', span:'2026.04 —' },

  /* 封面两处标注 */
  node:{ tag:'CAREER NODE', title:'SENIOR GAME UI DESIGNER',
         sub:'上海腾讯子公司腾娱互动 · K项目组 · 2026.04 — NOW' },
  seal:{ tag:'SESSION SEAL', title:'06 YEARS · 05 TITLES',
         sub:'2020 — 2026 · ACG / SPORTS / CASUAL' },

  /* 右侧 PROFILE 面板 */
  profile:[
    ['ROLE','高级游戏UI设计师'],
    ['BIRTH','1997.07.31'],
    ['TEL','132 6265 1128'],
    ['EDU','上海思博职业技术学院'],
    ['MBTI','ENFP']
  ],

  /* 左下角技能标签 */
  skills:['UI','ICON','L10N'],

  /* 联系方式：改这两行，全站同步 */
  tel:'13262651128',
  telFmt:'132 6265 1128',

  /* 感谢页 */
  thanks:{ line:'感谢您的观看 · 期待与您共事',
           operator:'刘天翼 · LIU TIANYI', role:'高级游戏UI设计师' }
};

/* ---------------------------------------------------------------- 渲染 */
(function(){
  const R = window.RESUME; if(!R) return;
  const q = s=>document.querySelector(s), qa = s=>[...document.querySelectorAll(s)];

  /* 品牌抬头（封面与档案柜共用） */
  qa('.brand').forEach(b=>{
    const h1=b.querySelector('h1'),p=b.querySelector('p'),h2=b.querySelector('h2');
    if(h1)h1.textContent=R.brand.en; if(p)p.textContent=R.brand.role;
    if(h2)h2.innerHTML=R.brand.os+'<b>'+R.brand.osb+'</b>';
  });

  const db=q('.dbase p'); if(db) db.textContent=R.intro;

  /* 工作经历时间线 */
  const ol=q('.clog ol');
  if(ol){
    const pill=q('.clog .pill');
    if(pill) pill.textContent='CAREER LOG · '+String(R.log.length).padStart(2,'0')+' ENTRIES';
    ol.innerHTML=R.log.map(e=>
      '<li'+(e.now?' class="now"':'')+(e.go?' data-go="'+e.go+'"':'')+'>'
      +'<p class="y">'+e.y+'</p><p class="c">'+e.c+'</p><p class="t">'+e.t+'</p></li>').join('');
  }

  /* NOW ONLINE 卡片 */
  const cc=q('#curCard');
  if(cc){
    const lg=cc.querySelector('.lg'),sb=cc.querySelector('.sb'),cn=cc.querySelector('.cn'),sp=cc.querySelectorAll('.ft span');
    if(lg) lg.innerHTML=R.current.lg+'<b>'+(R.current.dot||'.')+'</b>';
    if(sb) sb.textContent=R.current.sb;
    if(cn) cn.textContent=R.current.cn;
    if(sp[1]) sp[1].textContent=R.current.span;
  }

  /* 两处标注 */
  const c1=q('.callout.c1');
  if(c1){ const pl=c1.querySelector('.pill'),b=c1.querySelector('b');
    if(pl)pl.textContent=R.node.tag; if(b)b.textContent=R.node.title; c1.lastElementChild.textContent=R.node.sub; }
  const c2=q('.callout.c2');
  if(c2){ const pl=c2.querySelector('.pill'),b=c2.querySelector('b');
    if(pl)pl.textContent=R.seal.tag; if(b)b.textContent=R.seal.title; c2.lastElementChild.textContent=R.seal.sub; }

  /* PROFILE 面板 */
  const dl=q('.prof dl');
  if(dl) dl.innerHTML=R.profile.map(([k,v])=>'<div><dt>'+k+'</dt><dd>'+v+'</dd></div>').join('');

  /* 技能标签 */
  const ind=q('.ind');
  if(ind) ind.innerHTML=R.skills.map(s=>'<span class="on"><i></i>'+s+'</span>').join('');

  /* 姓名 */
  const nm=q('#nmTxt'); if(nm) nm.textContent=R.name.cn;
  const ns=q('.nm span'); if(ns) ns.innerHTML=R.name.en.join('<br>');

  /* 联系方式（封面 + 感谢页） */
  qa('a[href^="tel:"]').forEach(a=>{ a.href='tel:'+R.tel; if(/TEL/.test(a.textContent)) a.textContent='TEL '+R.telFmt; });

  /* 感谢页 */
  const th=q('.tk-th'); if(th) th.innerHTML='<i></i>'+R.thanks.line+'<i></i>';
  const ct=q('.tk-ct');
  if(ct){
    const bs=ct.querySelectorAll('b');
    if(bs[0]) bs[0].textContent=R.thanks.operator;
    if(bs[1]) bs[1].textContent=R.thanks.role;
  }
})();
