(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const B={interview:{id:"interview",name:"Interview",blockedExpression:null,prompt:"Establish what the other person knows."},entertain:{id:"entertain",name:"Entertain",blockedExpression:"demand",prompt:"Keep the exchange light and engaging."},gossip:{id:"gossip",name:"Gossip",blockedExpression:"reason",prompt:"Trade impressions rather than evidence."},convince:{id:"convince",name:"Convince",blockedExpression:"inspire",prompt:"Make a practical, grounded case."},incite:{id:"incite",name:"Incite",blockedExpression:"flattery",prompt:"Press urgency instead of praise."}},Qe=[{id:"terms-on-table",name:"Terms on the Table",role:"comment",expression:"demand",rulesText:"State the boundary and invite a concrete reply.",cost:{demand:1},selfYield:{},opponentFeed:{reason:1},influenceDelta:1,cooldown:[1,2]},{id:"measured-question",name:"Measured Question",role:"comment",expression:"reason",rulesText:"Ask for the detail that makes the story testable.",cost:{reason:1},selfYield:{flattery:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"shared-spark",name:"Shared Spark",role:"comment",expression:"inspire",rulesText:"Connect the discussion to a possibility both can recognize.",cost:{inspire:1},selfYield:{},opponentFeed:{flattery:1},influenceDelta:2,cooldown:[2,3]},{id:"courtesy-noted",name:"Courtesy Noted",role:"evaluation",expression:"flattery",rulesText:"Credit their care before asking for more.",cost:{flattery:1},selfYield:{reason:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"firm-line",name:"Firm Line",role:"assertion",expression:"demand",rulesText:"Name the consequence of leaving the issue unresolved.",cost:{demand:1},selfYield:{},opponentFeed:{inspire:1},influenceDelta:2,cooldown:[2,3]},{id:"clear-example",name:"Clear Example",role:"assertion",expression:"reason",rulesText:"Anchor the claim in one plain example.",cost:{reason:1},selfYield:{demand:1},opponentFeed:{},influenceDelta:2,cooldown:[2,3]},{id:"bright-future",name:"Bright Future",role:"assertion",expression:"inspire",rulesText:"Describe the better outcome that action unlocks.",cost:{inspire:1},selfYield:{},opponentFeed:{demand:1},influenceDelta:2,cooldown:[2,3]},{id:"earned-regard",name:"Earned Regard",role:"evaluation",expression:"flattery",rulesText:"Recognize a choice they made well.",cost:{flattery:1},selfYield:{inspire:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"name-the-gap",name:"Name the Gap",role:"rebuttal",expression:"reason",rulesText:"Point out the part of their account that does not connect.",cost:{reason:1},selfYield:{},opponentFeed:{flattery:1},influenceDelta:3,cooldown:[3,4]},{id:"calm-the-heat",name:"Calm the Heat",role:"rebuttal",expression:"inspire",rulesText:"Lower the temperature and return to shared ground.",cost:{inspire:1},selfYield:{flattery:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"turn-the-mirror",name:"Turn the Mirror",role:"rebuttal",expression:"flattery",rulesText:"Use their stated standards as the frame for a reply.",cost:{flattery:1},selfYield:{},opponentFeed:{reason:1},influenceDelta:2,cooldown:[2,3]},{id:"change-the-frame",name:"Change the Frame",role:"pivot",expression:"demand",rulesText:"Shift from what happened to what must happen next.",cost:{demand:1},selfYield:{reason:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"open-door",name:"Open Door",role:"pivot",expression:"inspire",rulesText:"Offer a constructive path out of the disagreement.",cost:{inspire:1},selfYield:{},opponentFeed:{reason:1},influenceDelta:1,cooldown:[1,2]},{id:"gracious-challenge",name:"Gracious Challenge",role:"pivot",expression:"flattery",rulesText:"Pair respect with a request they cannot dismiss.",cost:{flattery:1},selfYield:{demand:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]}],E=Object.freeze(Object.fromEntries(Qe.map(e=>[e.id,Object.freeze(e)]))),Ve=Object.freeze(["terms-on-table","measured-question","shared-spark","courtesy-noted","firm-line"]),A={auditor:{id:"auditor",name:"The Auditor",description:"Presses the strongest available point and favors short refreshes on ties.",strategy:["measured-question","clear-example","name-the-gap","terms-on-table","change-the-frame"]},host:{id:"host",name:"The Host",description:"Builds your resources while choosing the strongest available follow-up.",strategy:["courtesy-noted","earned-regard","calm-the-heat","open-door","gracious-challenge"]}};function We(e){if(e.length!==5)return"A Strategy must contain exactly five Statements.";if(new Set(e).size!==e.length)return"A Strategy cannot contain duplicate Statements.";const n=e.find(s=>!E[s]);return n?`Unknown Statement: ${n}.`:null}function ve(e,n){return Math.max(D.influenceMin,e.influence-E[n].influenceDelta)}function we(e){return Object.values(E[e].opponentFeed).reduce((n,s)=>n+(s??0),0)}function Je(e,n){const s=A[n].strategy.filter(r=>fe(e,"npc",r)===null);return s.length?{type:"speak",cardId:[...s].sort((r,a)=>{const d=E[r],p=E[a];if(n==="auditor"){const u=ve(e,r)-ve(e,a);if(u!==0)return u;const g=p.influenceDelta-d.influenceDelta;if(g!==0)return g;const k=d.cooldown[0]-p.cooldown[0];if(k!==0)return k}else{const u=we(a)-we(r);if(u!==0)return u;const g=p.influenceDelta-d.influenceDelta;if(g!==0)return g}return r.localeCompare(a)})[0]}:{type:"listen"}}function Xe(e,n){let s=e+Math.imul(n+1,1831565813)>>>0;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),(s^s>>>14)>>>0}function Ze(e,n,s,l){if(!Number.isInteger(s)||!Number.isInteger(l)||s>l)throw new Error(`Invalid inclusive range ${s}..${l}`);const r=l-s+1;return s+Xe(e,n)%r}const G=["demand","reason","inspire","flattery"],D=Object.freeze({startingDialoguePoints:5,influenceMin:-4,influenceMax:4,playerControlThreshold:2,npcControlThreshold:-2,resourceCap:3,startingResource:1,strategySize:5,maxRounds:18});function ke(){return{demand:1,reason:1,inspire:1,flattery:1}}function Re(e,n,s){return Math.min(s,Math.max(n,e))}function de(e){return{...e,player:{...e.player,resources:{...e.player.resources},strategy:[...e.player.strategy]},npc:{...e.npc,resources:{...e.npc.resources},strategy:[...e.npc.strategy]},cooldowns:{...e.cooldowns},log:[...e.log]}}function J(e,n,s,l,r={}){const a={index:e.log.length,round:e.round,actor:n,action:s,text:l,details:r};return e.log.push(a),a}function Ce(e,n){return`${e}:${n}`}function xe(e){const n=We(e.playerStrategy);if(n)throw new Error(n);if(!B[e.mode])throw new Error(`Unknown mode: ${e.mode}`);if(!A[e.npcPreset])throw new Error(`Unknown NPC preset: ${e.npcPreset}`);if(!Number.isSafeInteger(e.seed))throw new Error("Seed must be a safe integer.");const s=A[e.npcPreset],l={seed:e.seed,round:1,phase:"player-action",mode:e.mode,npcPreset:e.npcPreset,player:{dialoguePoints:D.startingDialoguePoints,resources:ke(),strategy:[...e.playerStrategy]},npc:{dialoguePoints:D.startingDialoguePoints,resources:ke(),strategy:[...s.strategy]},influence:0,cooldowns:{},result:null,log:[]};return J(l,"system","start",`Parley begins in ${B[e.mode].name} mode against ${s.name}.`,{seed:e.seed,mode:e.mode,npcPreset:e.npcPreset}),l}function Ee(e){return e==="player"?"player-action":"npc-action"}function fe(e,n,s){if(e.phase==="complete")return"The Parley is complete.";if(e.phase!==Ee(n))return`It is not the ${n}'s action phase.`;const l=e[n];if(!l.strategy.includes(s))return"That Statement is not in this Strategy.";const r=E[s];if(!r)return"Unknown Statement.";const a=e.cooldowns[Ce(n,s)]??0;if(a>0)return`Refreshing for ${a} more settlement${a===1?"":"s"}.`;if(B[e.mode].blockedExpression===r.expression)return`${ue(r.expression)} is blocked in ${B[e.mode].name}.`;for(const d of G){const p=r.cost[d]??0;if(l.resources[d]<p)return`Missing ${ue(d)} (${l.resources[d]}/${p}).`}return null}function ue(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ae(e,n,s){const l={};for(const r of G){const a=(n[r]??0)*s;if(a===0)continue;const d=e[r];e[r]=Re(d+a,0,D.resourceCap),l[r]=e[r]-d}return l}function ie(e){const n=G.filter(s=>(e[s]??0)!==0).map(s=>`${ue(s)} ${Math.abs(e[s]??0)}`);return n.length?n.join(", "):"none"}function en(e){return e.log.filter(n=>n.action==="speak").length}function Pe(e,n,s){if(e.phase==="complete")return{accepted:!1,state:e,reason:"The Parley is complete."};if(e.phase!==Ee(n))return{accepted:!1,state:e,reason:`It is not the ${n}'s action phase.`};if(s.type==="listen"){const R=de(e);R.phase=n==="player"?"npc-action":"settlement";const q=J(R,n,"listen",`${n==="player"?"You listen":"The opponent listens"}, preserving resources and position.`);return{accepted:!0,state:R,event:q}}const l=fe(e,n,s.cardId);if(l)return{accepted:!1,state:e,reason:l};const r=de(e),a=r[n],d=r[n==="player"?"npc":"player"],p=E[s.cardId],u=ae(a.resources,p.cost,-1),g=ae(a.resources,p.selfYield,1),k=ae(d.resources,p.opponentFeed,1),b=Object.values(p.selfYield).reduce((R,q)=>R+(q??0),0),i=Object.values(g).reduce((R,q)=>R+Math.max(0,q??0),0),v=Object.values(p.opponentFeed).reduce((R,q)=>R+(q??0),0),S=Object.values(k).reduce((R,q)=>R+Math.max(0,q??0),0),P=n==="player"?p.influenceDelta:-p.influenceDelta,F=r.influence;r.influence=Re(r.influence+P,D.influenceMin,D.influenceMax);const O=Ze(r.seed,en(e),p.cooldown[0],p.cooldown[1]);r.cooldowns[Ce(n,p.id)]=O,r.phase=n==="player"?"npc-action":"settlement";const M=n==="player"?"You speak":"The opponent speaks",I=[b>i?`${b-i} self-yield capped`:"",v>S?`${v-S} opponent feed capped`:""].filter(Boolean),U=J(r,n,"speak",`${M}: “${p.name}.” Pay ${ie(p.cost)}; gain ${ie(g)}; feed ${ie(k)}. Influence ${F>=0?"+":""}${F} → ${r.influence>=0?"+":""}${r.influence}. Refresh ${O}.${I.length?` ${I.join("; ")}.`:""}`,{cardId:p.id,paid:u,gained:g,fed:k,influenceBefore:F,influenceAfter:r.influence,cooldown:O,cappedSelfYield:b-i,cappedOpponentFeed:v-S});return{accepted:!0,state:r,event:U}}function Se(e){return e>0?"player-win":e<0?"npc-win":"draw"}function nn(e){if(e.phase!=="settlement")return e;const n=de(e),s=[];for(const[d,p]of Object.entries(n.cooldowns)){const u=Math.max(0,p-1);n.cooldowns[d]=u,p>0&&u===0&&s.push(d)}let l="Neither side controls the conversation; no Dialogue Point is lost.",r="neutral";n.influence>=D.playerControlThreshold?(n.npc.dialoguePoints=Math.max(0,n.npc.dialoguePoints-1),r="player",l=`You hold the conversational ground; the opponent loses 1 Dialogue Point (${n.npc.dialoguePoints} remaining).`):n.influence<=D.npcControlThreshold&&(n.player.dialoguePoints=Math.max(0,n.player.dialoguePoints-1),r="npc",l=`The opponent holds the conversational ground; you lose 1 Dialogue Point (${n.player.dialoguePoints} remaining).`),J(n,"system","settlement",l,{scoredFor:r,refreshed:s});let a=null;return n.player.dialoguePoints===0&&n.npc.dialoguePoints===0?a=Se(n.influence):n.npc.dialoguePoints===0?a="player-win":n.player.dialoguePoints===0?a="npc-win":n.round>=D.maxRounds&&(a=Se(n.influence)),a?(n.result=a,n.phase="complete",J(n,"system","complete",a==="player-win"?"Parley won — your position carries the exchange.":a==="npc-win"?"Parley lost — the opponent carries the exchange.":"Parley drawn — neither position prevails.",{result:a})):(n.round+=1,n.phase="player-action"),n}const tn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l14 0" />
  <path d="M13 18l6 -6" />
  <path d="M13 6l6 6" />
</svg>`,sn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-brain"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
  <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
  <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
  <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
  <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
  <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
</svg>`,on=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-ear"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3a4.5 4.5 0 0 1 -6.8 1.4" />
  <path d="M10 10a3 3 0 1 1 5 2.2" />
</svg>`,rn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-gavel"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
  <path d="M6 9l4 4" />
  <path d="M13 10l-4 -4" />
  <path d="M3 21h7" />
  <path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0" />
</svg>`,an=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
  <path d="M12.5 15.5l2 2" />
  <path d="M15 13l2 2" />
</svg>`,ln=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
</svg>`,cn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-message"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M8 9h8" />
  <path d="M8 13h6" />
  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
</svg>`,pn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-refresh"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
</svg>`,dn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-scale"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 20l10 0" />
  <path d="M6 6l6 -1l6 1" />
  <path d="M12 3l0 17" />
  <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
  <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
</svg>`,un=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-sparkles"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />
</svg>`,fn={demand:rn,reason:sn,inspire:un,flattery:an,influence:dn,"dialogue-points":ln,refresh:pn,transfer:tn,speak:cn,listen:on};function m(e,n="default"){return fn[e].replace("<svg",'<svg aria-hidden="true" focusable="false"').replace(/class="[^"]*"/,`class="ui-icon ui-icon-${e} ui-icon-${n}"`)}const le=Object.freeze({playerResult:1600,npcResult:2800,settlementResult:2600}),hn=Object.freeze({relaxed:1.4,standard:1,quick:.6});function mn(e){return e.charAt(0).toUpperCase()+e.slice(1)}function gn(e){return JSON.parse(JSON.stringify(e))}function L(e){if(typeof e!="object"||e===null||Object.isFrozen(e))return e;Object.freeze(e);for(const n of Object.values(e))L(n);return e}function yn(e,n){return n.log.find(s=>s.index>=e.log.length&&s.action==="settlement")}function qe(e){const n=e.frames[e.activeFrameIndex];return{game:n.game,stage:n.stage,actionResult:n.actionResult,settlementResult:n.settlementResult,sequence:e}}function Z(e,n){if(!e.sequence)return e;const s=Object.freeze({...e.sequence,...n});return qe(s)}function ce(e,n){const s=B[n],l=new Set(Object.values(E).filter(u=>u.expression===s.blockedExpression).map(u=>u.id)),r=new Set([...e].filter(u=>!l.has(u))),a=e.size-r.size;if(!s.blockedExpression)return{selectedCardIds:r,blockedCardIds:l,removedCount:a,announcement:`${s.name} blocks no Expressions.`};const d=mn(s.blockedExpression),p=a===0?"":` Removed ${a} ${d} Statement${a===1?"":"s"}; choose ${a} replacement${a===1?"":"s"}.`;return{selectedCardIds:r,blockedCardIds:l,removedCount:a,announcement:`${s.name} blocks ${d}.${p}`}}function Me(e){return e==="relaxed"||e==="quick"||e==="standard"?e:"standard"}function $n(e,n){const s=e==="player-result"?le.playerResult:e==="npc-result"?le.npcResult:le.settlementResult;return Math.round(s*hn[n])}function Te(e){return{game:e,stage:"player-action",actionResult:null,settlementResult:null,sequence:null}}function bn(e,n,s,l){if(e.sequence||e.game.phase!=="player-action")return{accepted:!1,presentation:e,reason:"The current exchange is already being presented."};const r=gn(e.game),a=Pe(r,"player",n);if(!a.accepted||!a.event)return{accepted:!1,presentation:e,reason:a.reason??"That action is not available."};const d=Je(a.state,a.state.npcPreset),p=Pe(a.state,"npc",d);if(!p.accepted||!p.event)throw new Error(`NPC selected an illegal action: ${p.reason??"unknown reason"}`);const u=nn(p.state),g=yn(p.state,u);if(!g)throw new Error("Settlement did not produce an event.");const k={actor:"player",action:n,before:r,after:a.state,event:a.event},b={actor:"npc",action:d,before:a.state,after:p.state,event:p.event},i={before:p.state,after:u,event:g},v=[{stage:"player-result",game:a.state,actionResult:k,settlementResult:null},{stage:"npc-result",game:p.state,actionResult:b,settlementResult:null},{stage:"settlement-result",game:u,actionResult:null,settlementResult:i}];L(r),L(a.state),L(p.state),L(u),L(k),L(b),L(i),L(v);const S=Object.freeze({preTurn:r,finalGame:u,frames:v,activeFrameIndex:0,playback:"playing",sequenceToken:s,speed:l});return{accepted:!0,presentation:qe(S)}}function vn(e,n,s){const l=e.sequence;return!l||l.sequenceToken!==n||l.playback!=="playing"||l.activeFrameIndex!==s?e:s>=l.frames.length-1?De(e):Z(e,{activeFrameIndex:s+1})}function wn(e){return!e.sequence||e.sequence.playback==="paused"?e:Z(e,{playback:"paused"})}function kn(e){return!e.sequence||e.sequence.playback==="playing"?e:Z(e,{playback:"playing"})}function xn(e){const n=e.sequence;return!n||n.activeFrameIndex===n.frames.length-1?e:Z(e,{activeFrameIndex:n.frames.length-1})}function De(e){const n=e.sequence;if(!n)return e;const s=n.frames[n.frames.length-1].settlementResult;return{game:n.finalGame,stage:n.finalGame.phase==="complete"?"settlement-result":"player-action",actionResult:null,settlementResult:s,sequence:null}}function Pn(e,n){return!e.sequence||e.sequence.speed===n?e:Z(e,{speed:n})}function T(e){return e.charAt(0).toUpperCase()+e.slice(1)}function C(e){return e>0?`+${e}`:e<0?`−${Math.abs(e)}`:"0"}function Q(e,n){const s=e[n];return typeof s=="number"?s:0}function V(e,n){const s=e[n];return typeof s=="object"&&s!==null?s:{}}function X(e,n){return n==="player"?"You":A[e.npcPreset].name}function pe(e,n,s,l,r,a,d){const p=Math.max(0,l-r),u=l===r?`${r}`:`${r} of ${l}`,g=p?`; ${p} was capped`:"";return`<li>${e} ${n} ${u} ${T(s)}: ${a} → ${d}${g}.</li>`}function Sn(e){const n=e.actor==="player",s=X(e.after,e.actor),l=n?"1 of 3 — Your action":"2 of 3 — Opponent action";if(e.action.type==="listen")return`<div class="presentation-frame frame-${e.actor}">
      <p class="frame-progress">${l}</p>
      <div class="overlay-heading">${m("listen","large")}<div><p class="eyebrow">${n?"Your action":"Opponent action"}</p><h2 id="current-frame-heading">${s} ${n?"listen":"listens"}</h2></div></div>
      <ul class="effect-list"><li>${s} ${n?"listen":"listens"}.</li><li>No resources were paid, gained, or fed.</li><li>Influence remained ${C(e.before.influence)} → ${C(e.after.influence)}.</li><li>No cooldown was started.</li></ul>
      ${n?'<p class="automatic-note">The opponent responds automatically.</p>':""}
    </div>`;const r=E[e.action.cardId],a=e.event.details,d=V(a,"paid"),p=V(a,"gained"),u=V(a,"fed"),g=e.actor==="player"?"npc":"player",k=X(e.after,g),b=[];for(const M of G){const I=r.cost[M]??0,U=Math.abs(d[M]??0);if(I){const j=e.before[e.actor].resources[M];b.push(pe(s,"paid",M,I,U,j,j-U))}const R=r.selfYield[M]??0,q=Math.max(0,p[M]??0);if(R){const j=e.before[e.actor].resources[M]-U;b.push(pe(s,"gained",M,R,q,j,j+q))}const K=r.opponentFeed[M]??0,ee=Math.max(0,u[M]??0);if(K){const j=e.before[g].resources[M];b.push(pe(k,"received",M,K,ee,j,j+ee))}}const i=Q(a,"influenceBefore"),v=Q(a,"influenceAfter"),S=e.actor==="player"?r.influenceDelta:-r.influenceDelta,P=v-i,F=Math.abs(S)-Math.abs(P),O=F>0?` ${F} additional Influence was capped at ${C(v)}.`:"";return b.push(`<li>Influence ${C(i)} → ${C(v)}.${O}</li>`),b.push(`<li>${r.name} rolled Refresh ${Q(a,"cooldown")}.</li>`),`<div class="presentation-frame frame-${e.actor}">
    <p class="frame-progress">${l}</p>
    <div class="overlay-heading expression-${r.expression}">${m(r.expression,"large")}<div><p class="eyebrow">${n?"Your action":"Opponent reveal"}</p><h2 id="current-frame-heading">${s} ${n?"play":"plays"} “${r.name}”</h2><p>${T(r.role)} · ${T(r.expression)}</p></div></div>
    <article class="overlay-card expression-${r.expression}"><strong>${r.name}</strong><span>${r.rulesText}</span></article>
    <h3>Mechanical effects</h3><ul class="effect-list">${b.join("")}</ul>
    ${n?'<p class="automatic-note">The opponent responds automatically.</p>':""}
  </div>`}function Mn(e){const n=e.finalGame,s=["player","npc"].flatMap(l=>{const r=G.flatMap(a=>{const d=e.preTurn[l].resources[a],p=n[l].resources[a];return d===p?[]:[`<li>${T(a)}: ${d} → ${p} (${C(p-d)})</li>`]});return r.length?[`<section class="net-group"><h4>${X(n,l)}</h4><ul>${r.join("")}</ul></section>`]:[]});return s.length?s.join(""):"<p>No resource totals changed this exchange.</p>"}function Tn(e){return`<ol class="exchange-order">${e.frames.slice(0,2).map(s=>s.actionResult).map(s=>{const l=X(e.finalGame,s.actor);if(s.action.type==="listen")return`<li>${l} listened. No cooldown.</li>`;const r=E[s.action.cardId],a=e.finalGame.cooldowns[`${s.actor}:${r.id}`]??0;return`<li>${l}: ${r.name} — Refresh ${a} remaining after settlement.</li>`}).join("")}</ol>`}function Rn(e){const n=e.sequence,s=n.frames[2].settlementResult,l=n.finalGame,r=A[l.npcPreset].name,a=s.event.details.scoredFor,d=a==="player"?`${r} loses 1 Dialogue Point.`:a==="npc"?"You lose 1 Dialogue Point.":"No Dialogue Point lost.",p=l.influence>=D.playerControlThreshold?"your control":l.influence<=D.npcControlThreshold?"opponent control":"neutral",u=s.event.details.refreshed,g=Array.isArray(u)?u.filter(i=>typeof i=="string"):[],k=g.length?`<ul>${g.map(i=>{const[v,S]=i.split(":");return`<li>${v==="player"?"You":r}: ${E[S]?.name??S}</li>`}).join("")}</ul>`:"<p>No cards refreshed.</p>",b=l.phase==="complete"?l.result==="player-win"?"Final result: Parley won.":l.result==="npc-win"?"Final result: Parley lost.":"Final result: Parley drawn.":`Round ${l.round} is next.`;return`<div class="presentation-frame frame-settlement">
    <p class="frame-progress">3 of 3 — Exchange summary</p>
    <div class="overlay-heading">${m("dialogue-points","large")}<div><p class="eyebrow">Settlement and net effect</p><h2 id="current-frame-heading">${d}</h2></div></div>
    <div class="summary-grid">
      <section><h3>Influence and scoring</h3><p>Final Influence ${C(l.influence)} — ${p}.</p><p>${d}</p><ul><li>You: ${n.preTurn.player.dialoguePoints} → ${l.player.dialoguePoints} DP</li><li>${r}: ${n.preTurn.npc.dialoguePoints} → ${l.npc.dialoguePoints} DP</li></ul></section>
      <section><h3>Net resources</h3>${Mn(n)}</section>
      <section><h3>Exchange order and cooldowns</h3>${Tn(n)}</section>
      <section><h3>Ready Statements</h3>${k}</section>
    </div>
    <p class="next-round-summary">${b}</p>
  </div>`}function Cn(e){return e.sequence?e.stage==="settlement-result"?Rn(e):Sn(e.actionResult):""}function Ie(e){return!e.sequence&&e.game.phase==="player-action"}function En(e,n){const s=e.game,l=Ie(e),r=e.stage==="player-result"&&e.actionResult?.actor==="player"&&e.actionResult.action.type==="speak"?e.actionResult.action.cardId:null;return s.player.strategy.map(a=>{const d=E[a],p=fe(s,"player",a),u=l?p:s.phase==="complete"?"The Parley is complete.":e.sequence?"The automatic exchange is being presented.":"Wait for your next action.",g=s.cooldowns[`player:${a}`]??0,k=Object.keys(d.cost)[0],b=`speak-${d.id}`,i=n?.controlId===b?'aria-describedby="action-error"':"";return`<article class="statement-card expression-${d.expression} ${u?"unavailable":""} ${r===d.id?"played-card":""}">
      <header><span class="role">${T(d.role)}</span><span class="cost">${m(k)} ${d.cost[k]}</span></header>
      <h3>${d.name}</h3>
      <p>${d.rulesText}</p>
      <div class="card-mechanics"><span>${m("influence")} Influence ${C(d.influenceDelta)}</span><span>${m("refresh")} Refresh ${d.cooldown[0]}–${d.cooldown[1]}</span></div>
      <button id="${b}" class="speak-btn" data-card-id="${d.id}" ${u?"disabled":""} ${i}>${m("speak")} ${g?`Refreshing · ${g}`:"Speak"}</button>
      ${u?`<small class="disabled-reason">${u}</small>`:'<small class="disabled-reason ready">Ready to speak</small>'}
    </article>`}).join("")}function qn(){const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root.");const n=e;n.innerHTML='<div id="stage-status" class="sr-only" aria-live="polite" aria-atomic="true"></div><div id="app-content"></div><div id="presentation-layer"></div>';const s=n.querySelector("#app-content"),l=n.querySelector("#stage-status"),r=n.querySelector("#presentation-layer");if(!s||!l||!r)throw new Error("Could not initialize the application regions.");const a=s,d=l,p=r;let u=new Set(Ve),g="interview",k="auditor",b=137,i=null,v="",S="",P="Choose a conversation mode, opponent, seed, and five Statements.",F=0,O=null;const M="common-ground:presentation-speed";let I="standard";try{I=Me(window.localStorage.getItem(M))}catch{I="standard"}function U(){const t=B[g],o=ce(u,g),c=Object.values(B).map(f=>`<option value="${f.id}" ${f.id===g?"selected":""}>${f.name} — ${f.blockedExpression?`${T(f.blockedExpression)} blocked`:"open exchange"}</option>`).join(""),h=Object.values(A).map(f=>`<option value="${f.id}" ${f.id===k?"selected":""}>${f.name}</option>`).join(""),y=Object.values(E).map(f=>{const $=u.has(f.id)?"checked":"",w=o.blockedCardIds.has(f.id),x=w?`${T(f.expression)} Statements cannot be prepared or Spoken in ${t.name}.`:"";return`<label class="setup-card expression-${f.expression} ${w?"blocked":""}">
          <input class="strategy-check" type="checkbox" value="${f.id}" ${$} ${w?"disabled":""} />
          ${w?`<span class="blocked-badge">Blocked in ${t.name}</span>`:""}
          <span class="setup-card-title">${m(f.expression)} ${f.name}</span>
          <span>${T(f.role)} · ${T(f.expression)} · Influence ${C(f.influenceDelta)}</span>
          <small>${f.rulesText}</small>
          ${w?`<small class="blocked-explanation">${x}</small>`:""}
        </label>`}).join("");return`<main class="shell setup-shell">
      <header class="masthead">
        <div><p class="eyebrow">A conversation card duel</p><h1>Common Ground</h1></div>
        <p class="lede">Prepare five Statements. Shape the exchange. Hold enough Influence to wear down the other side's Dialogue Points.</p>
      </header>
      <section class="setup-grid">
        <div class="panel setup-options">
          <div><label for="mode-select">Conversation</label><select id="mode-select">${c}</select></div>
          <div><label for="npc-select">Opponent</label><select id="npc-select">${h}</select></div>
          <div><label for="seed-input">Parley seed</label><input id="seed-input" type="number" step="1" value="${b}" /></div>
          <div class="setup-summary">
            <strong id="selection-count">${u.size} / 5 Statements prepared</strong>
            <span id="selection-hint">${u.size===5?"Your Strategy is ready.":"Choose exactly five available Statements."}</span>
          </div>
          <button id="start-btn" class="primary" ${u.size===5?"":"disabled"}>${m("speak")} Begin Parley</button>
        </div>
        <details class="panel rules-panel" open>
          <summary>How to parley</summary>
          ${q()}
        </details>
      </section>
      <section><div class="section-heading"><p class="eyebrow">Prepared Strategy</p><h2>Choose five Statements</h2><p class="mode-note">${t.blockedExpression?`${m(t.blockedExpression)} ${t.name} blocks ${T(t.blockedExpression)}.`:"Interview allows all four Expressions."}</p></div><div class="setup-cards">${y}</div></section>
    </main>`}function R(){return G.map(t=>`<span class="legend-item expression-${t}">${m(t)} ${T(t)}</span>`).join("")}function q(){return`<div class="rules-copy">
      <p><strong>${m("dialogue-points")} Win:</strong> Reduce the opponent from 5 Dialogue Points to 0. After both sides act, Influence at +2 or higher costs them 1 DP; −2 or lower costs you 1 DP.</p>
      <p><strong>${m("speak")} Speak:</strong> Pay the shown Expression. One activation automatically presents your effect, the opponent reveal, and the settlement/net result.</p>
      <p><strong>${m("listen")} Listen:</strong> Pass without changing resources or Influence. Listening is always legal and the opponent still responds.</p>
      <p><strong>Automatic exchange:</strong> Your action → Opponent action → Exchange summary. Use Pause presentation to hold a frame, Skip to exchange summary to fast-forward, or choose Relaxed, Standard, or Quick pacing.</p>
      <p><strong>Modes:</strong> A blocked Expression cannot be prepared or Spoken. Interview blocks none.</p>
      <p><strong>${m("refresh")} Refresh:</strong> The number is how many settlements a reusable Statement needs before it is ready again.</p>
      <p><strong>${m("transfer")} Feed:</strong> The arrow identifies a resource given to the other speaker.</p>
      <p><strong>${m("influence")} Influence:</strong> The shared balance; positive favors you and negative favors the opponent.</p>
      <p><strong>Expressions:</strong> <span class="expression-legend">${R()}</span> Each resource caps at ${D.resourceCap}.</p>
      <p><strong>Timeout:</strong> After round ${D.maxRounds}, the side favored by Influence wins; neutral Influence is a draw.</p>
    </div>`}function K(t){return t.actionResult??t.settlementResult}function ee(t,o,c){const h=K(t);return h?h.before[o].resources[c]!==h.after[o].resources[c]:!1}function j(t,o){const c=K(t);return c?c.before[o].dialoguePoints!==c.after[o].dialoguePoints:!1}function he(t,o){const c=o.game;return G.map(h=>`<div class="resource expression-${h} ${ee(o,t,h)?"value-changed":""}" title="${T(h)}">
        ${m(h)}<strong>${c[t].resources[h]}</strong><small>${T(h)}</small>
      </div>`).join("")}function Ae(t){const o=t.game,h=K(t)?.before.influence??o.influence,y=h!==o.influence,f=Array.from({length:9},(x,N)=>N-4),$=(h+4)/8*100,w=(o.influence+4)/8*100;return`<div class="influence-wrap ${y?"value-changed":""}">
      <div class="influence-labels"><span>Opponent control</span><strong>${m("influence")} Influence ${C(o.influence)}</strong><span>Your control</span></div>
      <div class="influence-track" role="img" aria-label="Influence moved from ${C(h)} to ${C(o.influence)}">
        ${f.map(x=>`<div class="influence-step ${x<=-2?"npc-band":x>=2?"player-band":""}"><span>${C(x)}</span></div>`).join("")}
        <span class="influence-marker ${y?"marker-moved":""}" style="--marker-from: ${$}%; --marker-to: ${w}%; left: ${w}%" aria-hidden="true"></span>
      </div>
    </div>`}function Fe(t){if(!t.result)return"";const o=t.result==="player-win"?["Parley won","Your position carried the exchange."]:t.result==="npc-win"?["Parley lost","The opponent carried the exchange."]:["Parley drawn","Neither position prevailed."];return`<section class="result-banner result-${t.result}"><p class="eyebrow">Final result</p><h2 id="final-result-heading" tabindex="-1">${o[0]}</h2><p>${o[1]}</p><button id="result-new-btn" class="primary">Prepare another Parley</button></section>`}function se(t,o,c){return G.flatMap(h=>{const y=t[h]??0;if(y===0)return[];const f=c?`<span class="transfer-route"><span>${c.source}</span><span class="transfer-direction">${m("transfer")}</span><span class="sr-only">to</span><span>${c.recipient}</span></span>`:"";return[`<li class="delta-chip expression-${h} ${c?`transfer-chip transfer-from-${c.actor}`:""}">${f}${m(h)} <strong>${C(y)}</strong> ${T(h)}${o}</li>`]})}function Oe(t){const o=t.actionResult;if(!o)return"";const c=o.actor==="player",h=c?"You":A[t.game.npcPreset].name,y=c?'<button id="resolve-npc-btn" class="primary progression-btn">Resolve opponent</button>':'<button id="settle-btn" class="primary progression-btn">Settle round</button>';if(o.action.type==="listen")return`<section class="action-tray panel tray-${o.actor}" aria-labelledby="action-result-heading">
        <div class="tray-heading">${m("listen","large")}<div><p class="eyebrow">${c?"Your action":"Opponent action"}</p><h2 id="action-result-heading" tabindex="-1">${h} ${c?"listen":"listens"}</h2></div></div>
        <p class="neutral-result">No resources or Influence changed.</p>
        ${y}
      </section>`;const f=E[o.action.cardId],$=o.event.details,w=V($,"paid"),x=V($,"gained"),N=V($,"fed"),z=[...se(w," paid"),...se(x," gained"),...se(N," fed",{actor:o.actor,source:h,recipient:c?A[t.game.npcPreset].name:"you"}),`<li class="delta-chip">${m("influence")} Influence <strong>${C(Q($,"influenceBefore"))} → ${C(Q($,"influenceAfter"))}</strong></li>`,`<li class="delta-chip">${m("refresh")} Refresh <strong>${Q($,"cooldown")}</strong></li>`];return`<section class="action-tray panel tray-${o.actor}" aria-labelledby="action-result-heading">
      <div class="tray-heading expression-${f.expression}">${m(f.expression,"large")}<div><p class="eyebrow">${c?"Your action":"Opponent reveal"}</p><h2 id="action-result-heading" tabindex="-1">${h} ${c?"play":"plays"} “${f.name}”</h2><p>${T(f.role)} · ${T(f.expression)}</p></div></div>
      <article class="revealed-card expression-${f.expression}"><strong>${f.name}</strong><span>${f.rulesText}</span></article>
      <ul class="delta-list">${z.join("")}</ul>
      ${y}
    </section>`}function je(t){const o=t.settlementResult;if(!o)return"";const c=o.event.details.scoredFor,h=o.before.player.dialoguePoints,y=o.after.player.dialoguePoints,f=o.before.npc.dialoguePoints,$=o.after.npc.dialoguePoints,w=c==="player"?`${A[t.game.npcPreset].name} loses 1 Dialogue Point: ${f} → ${$}.`:c==="npc"?`You lose 1 Dialogue Point: ${h} → ${y}.`:"No Dialogue Point lost.",x=o.event.details.refreshed,N=Array.isArray(x)?x.filter(te=>typeof te=="string"):[],z=["player","npc"].flatMap(te=>{const $e=N.map(H=>H.split(":")).filter(([H])=>H===te).map(([,H])=>H);if($e.length===0)return[];const be=te==="player"?"You":A[t.game.npcPreset].name;return[`<section class="refresh-group" aria-label="${be} ready Statements"><strong>${be}</strong><ul class="refresh-list">${$e.map(H=>`<li>${E[H]?.name??H}</li>`).join("")}</ul></section>`]}),_e=z.length?`<div class="refresh-groups">${z.join("")}</div>`:"<p>No cards refreshed.</p>",Ke=t.game.phase==="complete"?"The Parley is complete.":`Round ${t.game.round} is ready. Choose your next action.`;return`<section class="action-tray settlement-tray panel" aria-labelledby="settlement-heading">
      <div class="tray-heading">${m("dialogue-points","large")}<div><p class="eyebrow">Settlement result</p><h2 id="settlement-heading" tabindex="-1">${w}</h2></div></div>
      <div class="settlement-grid"><div><strong>${m("refresh")} Ready Statements</strong>${_e}</div><p class="next-round">${Ke}</p></div>
    </section>`}function Ye(t){return t.sequence?`<section class="action-tray panel awaiting-action" aria-labelledby="action-result-heading"><div class="tray-heading">${m("refresh","large")}<div><p class="eyebrow">Automatic exchange</p><h2 id="action-result-heading">Presenting ${t.sequence.activeFrameIndex+1} of 3</h2></div></div><p>Use the presentation controls to pause or skip to the exchange summary.</p></section>`:Oe(t)||je(t)||`<section class="action-tray panel awaiting-action" aria-labelledby="action-result-heading"><div class="tray-heading">${m("speak","large")}<div><p class="eyebrow">Your action</p><h2 id="action-result-heading">Choose a Statement or Listen</h2></div></div><p>One action automatically presents both speakers and the exchange summary.</p></section>`}function Ne(t){return t.sequence?t.stage==="player-result"?"Automatic · your action":t.stage==="npc-result"?"Automatic · opponent action":"Automatic · exchange summary":t.game.phase==="complete"?"Complete":"Your action"}function ze(t){return t.log.map(o=>{const c=o.action==="speak"?m("speak"):o.action==="listen"?m("listen"):o.action==="settlement"?m("dialogue-points"):m("influence");return`<li class="log-${o.action}"><span>R${o.round}</span><p>${c}${o.text}</p></li>`}).join("")}function Le(t){const o=t.game,c=B[o.mode],h=A[o.npcPreset],y=Ie(t),f=v?{controlId:S}:void 0,$=S==="listen-btn"&&v?'aria-describedby="action-error"':"";return`<main class="shell game-shell stage-${t.stage}">
      <header class="game-header">
        <div><p class="eyebrow">${c.name} · seed ${o.seed}</p><h1>Common Ground</h1><p>${c.prompt}</p></div>
        <div class="header-actions"><button id="reset-btn">Reset Parley</button><button id="new-btn">New setup</button></div>
      </header>
      ${t.sequence?"":Fe(o)}
      <section class="scoreboard panel">
        <div class="combatant npc-side"><p class="eyebrow">Opponent</p><h2>${h.name}</h2><div class="dp ${j(t,"npc")?"value-changed":""}" aria-label="Opponent Dialogue Points: ${o.npc.dialoguePoints}">${Array.from({length:5},(w,x)=>`<span class="${x<o.npc.dialoguePoints?"full":""}"></span>`).join("")}<strong>${m("dialogue-points")} ${o.npc.dialoguePoints} DP</strong></div><div class="resources">${he("npc",t)}</div></div>
        ${Ae(t)}
        <div class="combatant player-side"><p class="eyebrow">Your position</p><h2>You</h2><div class="dp ${j(t,"player")?"value-changed":""}" aria-label="Your Dialogue Points: ${o.player.dialoguePoints}">${Array.from({length:5},(w,x)=>`<span class="${x<o.player.dialoguePoints?"full":""}"></span>`).join("")}<strong>${m("dialogue-points")} ${o.player.dialoguePoints} DP</strong></div><div class="resources">${he("player",t)}</div></div>
      </section>
      ${Ye(t)}
      <div class="status-strip"><span>Round <strong>${o.round}</strong> / ${D.maxRounds}</span><span>${c.blockedExpression?`${m(c.blockedExpression)} ${T(c.blockedExpression)} is blocked`:"No Expression blocked"}</span><span>${Ne(t)}</span></div>
      <section class="play-layout">
        <div class="hand-area"><div class="section-heading"><p class="eyebrow">Prepared Strategy</p><h2>${y?"Choose your Statement":"Action held"}</h2></div><div class="hand">${En(t,f)}</div><button id="listen-btn" class="listen" ${y?"":"disabled"} ${$}>${m("listen")} Listen <span>Pass without changing resources or Influence</span></button>${v?`<p id="action-error" class="action-error">${v}</p>`:""}</div>
        <aside class="sidebar"><details class="panel rules-panel"><summary>Rules reference</summary>${q()}</details><section class="panel log-panel"><div class="log-heading"><p class="eyebrow">Transcript</p><h2>Event log</h2></div><ol id="event-log">${ze(o)}</ol></section></aside>
      </section>
    </main>`}function _(){O!==null&&window.clearTimeout(O),O=null}function oe(t){return t>0?`plus ${t}`:t<0?`minus ${Math.abs(t)}`:"zero"}function ne(t){const o=t.sequence;if(!o)return"";if(t.stage==="settlement-result"){const w=t.settlementResult?.event.details.scoredFor,x=w==="player"?`${A[t.game.npcPreset].name} lost one Dialogue Point.`:w==="npc"?"You lost one Dialogue Point.":"No Dialogue Point was lost.",N=o.finalGame.phase==="complete"?"The Parley is complete.":`Round ${o.finalGame.round} is next.`;return`Exchange summary, 3 of 3. Influence is ${oe(t.game.influence)}. ${x} ${N}`}const c=t.actionResult,h=c.actor==="player"?"Your action, 1 of 3.":"Opponent action, 2 of 3.",y=X(t.game,c.actor),f=c.action.type==="listen"?`${y} ${c.actor==="player"?"listen":"listens"}.`:`${y} ${c.actor==="player"?"played":"plays"} ${E[c.action.cardId].name}.`,$=c.actor==="player"?" The opponent responds automatically.":"";return`${h} ${f} Influence moved from ${oe(c.before.influence)} to ${oe(c.after.influence)}.${$}`}function re(t=!1){const o=i?.sequence;if(!i||!o){a.removeAttribute("inert"),p.innerHTML="";return}a.setAttribute("inert",""),p.querySelector("#presentation-dialog")||(p.innerHTML=`<div class="presentation-backdrop">
        <section id="presentation-dialog" class="presentation-dialog panel" role="dialog" aria-modal="true" aria-labelledby="current-frame-heading" aria-describedby="presentation-description">
          <p id="presentation-description" class="sr-only"></p>
          <div id="presentation-frame-content" class="presentation-scroll"></div>
          <div class="presentation-controls" aria-label="Presentation controls">
            <button id="pause-presentation-btn" class="primary">Pause presentation</button>
            <button id="skip-presentation-btn">Skip to exchange summary</button>
            <label for="presentation-speed">Presentation speed</label>
            <select id="presentation-speed"><option value="relaxed">Relaxed</option><option value="standard">Standard</option><option value="quick">Quick</option></select>
          </div>
        </section>
      </div>`);const c=p.querySelector("#presentation-frame-content")?.contains(document.activeElement)??!1,h=p.querySelector("#presentation-frame-content"),y=p.querySelector("#presentation-description"),f=p.querySelector("#pause-presentation-btn"),$=p.querySelector("#skip-presentation-btn"),w=p.querySelector("#presentation-speed");if(!h||!y||!f||!$||!w)throw new Error("Could not initialize presentation controls.");h.innerHTML=Cn(i),y.textContent=`${ne(i)} Automatic presentation. Use Pause presentation to hold this frame or Skip to exchange summary.`,f.textContent=o.playback==="paused"?"Resume presentation":"Pause presentation",$.textContent=o.activeFrameIndex===o.frames.length-1?"Continue now":"Skip to exchange summary",w.value=o.speed,(t||c)&&f.focus()}function Y(t,o=!1){a.innerHTML=i?Le(i):U(),d.textContent=P;const c=a.querySelector("#event-log");c&&(c.scrollTop=c.scrollHeight),re(o),t&&a.querySelector(t)?.focus()}function me(){if(!i)return;const t=i.game.phase==="complete"?"#final-result-heading":".speak-btn:not(:disabled), #listen-btn";Y(t)}function Be(){i?.sequence&&(_(),i=De(i),P=i.game.phase==="complete"?"Automatic presentation complete. The Parley is complete.":`Automatic presentation complete. Round ${i.game.round}. Choose a Statement or Listen.`,me())}function W(){_();const t=i,o=t?.sequence;if(!t||!o||o.playback!=="playing"||document.hidden)return;const c=o.sequenceToken,h=o.activeFrameIndex,y=$n(t.stage,o.speed);O=window.setTimeout(()=>{if(O=null,!i)return;const f=vn(i,c,h);if(f!==i){if(i=f,!i.sequence){P=i.game.phase==="complete"?"Automatic presentation complete. The Parley is complete.":`Automatic presentation complete. Round ${i.game.round}. Choose a Statement or Listen.`,me();return}P=ne(i),Y(),W()}},y)}function He(){const t=xe({seed:b,mode:g,npcPreset:k,playerStrategy:[...u]});i=Te(t),v="",S="",P=`Parley begins in ${B[g].name}. Round 1. Choose a Statement or Listen.`,Y(".speak-btn:not(:disabled)")}function ge(t,o){if(!i||i.sequence)return;F+=1;const c=bn(i,t,F,I);if(!c.accepted){v=c.reason??"That action is not available.",S=o,P=v,Y(`#${o}`);return}i=c.presentation,v="",S="",P=ne(i),Y(void 0,!0),W()}function Ge(){if(i?.sequence){if(i.sequence.playback==="playing"){_(),i=wn(i),P=`Presentation paused on ${i.stage==="player-result"?"your action":i.stage==="npc-result"?"opponent action":"exchange summary"}.`,re(),d.textContent=P;return}i=kn(i),P="Presentation resumed.",re(),d.textContent=P,W()}}function ye(){if(i?.sequence){if(i.sequence.activeFrameIndex===i.sequence.frames.length-1){Be();return}_(),i=xn(i),P=ne(i),Y(),W()}}function Ue(){if(_(),F+=1,i){g=i.game.mode,k=i.game.npcPreset,b=i.game.seed;const t=ce(new Set(i.game.player.strategy),g);u=new Set(t.selectedCardIds),P=t.announcement}i=null,v="",S="",Y("#mode-select")}n.addEventListener("change",t=>{const o=t.target,c=o.closest("#presentation-speed");if(c&&i?.sequence){I=Me(c.value),i=Pn(i,I);try{window.localStorage.setItem(M,I)}catch{}return}const h=o.closest("#mode-select");if(h){g=h.value;const z=ce(u,g);u=new Set(z.selectedCardIds),P=z.announcement,Y("#mode-select");return}const y=o.closest("#npc-select");if(y){k=y.value;return}const f=o.closest("#seed-input");if(f){const z=Number(f.value);b=Number.isSafeInteger(z)?z:137;return}const $=o.closest(".strategy-check");if(!$)return;if($.checked){if(u.size>=5){$.checked=!1;return}u.add($.value)}else u.delete($.value);const w=document.querySelector("#selection-count"),x=document.querySelector("#selection-hint"),N=document.querySelector("#start-btn");w&&(w.textContent=`${u.size} / 5 Statements prepared`),x&&(x.textContent=u.size===5?"Your Strategy is ready.":"Choose exactly five available Statements."),N&&(N.disabled=u.size!==5)}),n.addEventListener("click",t=>{const o=t.target;if(o.closest("#pause-presentation-btn")){Ge();return}if(o.closest("#skip-presentation-btn")){ye();return}o.closest("#start-btn")&&He(),o.closest("#listen-btn")&&ge({type:"listen"},"listen-btn");const c=o.closest(".speak-btn");c?.dataset.cardId&&ge({type:"speak",cardId:c.dataset.cardId},c.id),o.closest("#reset-btn")&&i&&(_(),F+=1,i=Te(xe({seed:i.game.seed,mode:i.game.mode,npcPreset:i.game.npcPreset,playerStrategy:i.game.player.strategy})),v="",S="",P="Parley reset. Round 1. Choose a Statement or Listen.",Y(".speak-btn:not(:disabled)")),(o.closest("#new-btn")||o.closest("#result-new-btn"))&&Ue()}),n.addEventListener("keydown",t=>{if(!i?.sequence)return;if(t.key==="Escape"){t.preventDefault(),ye();return}if(t.key!=="Tab")return;const o=[...p.querySelectorAll("button:not(:disabled), select:not(:disabled)")];if(o.length===0)return;const c=o.indexOf(document.activeElement);if(c===-1){t.preventDefault(),o[0].focus();return}t.shiftKey&&c===0?(t.preventDefault(),o[o.length-1].focus()):!t.shiftKey&&c===o.length-1&&(t.preventDefault(),o[0].focus())}),document.addEventListener("visibilitychange",()=>{document.hidden?_():W()}),Y()}qn();
