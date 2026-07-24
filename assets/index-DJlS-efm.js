(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const I={interview:{id:"interview",name:"Interview",blockedExpression:null,prompt:"Establish what the other person knows."},entertain:{id:"entertain",name:"Entertain",blockedExpression:"demand",prompt:"Keep the exchange light and engaging."},gossip:{id:"gossip",name:"Gossip",blockedExpression:"reason",prompt:"Trade impressions rather than evidence."},convince:{id:"convince",name:"Convince",blockedExpression:"inspire",prompt:"Make a practical, grounded case."},incite:{id:"incite",name:"Incite",blockedExpression:"flattery",prompt:"Press urgency instead of praise."}},Re=[{id:"terms-on-table",name:"Terms on the Table",role:"comment",expression:"demand",rulesText:"State the boundary and invite a concrete reply.",cost:{demand:1},selfYield:{},opponentFeed:{reason:1},influenceDelta:1,cooldown:[1,2]},{id:"measured-question",name:"Measured Question",role:"comment",expression:"reason",rulesText:"Ask for the detail that makes the story testable.",cost:{reason:1},selfYield:{flattery:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"shared-spark",name:"Shared Spark",role:"comment",expression:"inspire",rulesText:"Connect the discussion to a possibility both can recognize.",cost:{inspire:1},selfYield:{},opponentFeed:{flattery:1},influenceDelta:2,cooldown:[2,3]},{id:"courtesy-noted",name:"Courtesy Noted",role:"evaluation",expression:"flattery",rulesText:"Credit their care before asking for more.",cost:{flattery:1},selfYield:{reason:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"firm-line",name:"Firm Line",role:"assertion",expression:"demand",rulesText:"Name the consequence of leaving the issue unresolved.",cost:{demand:1},selfYield:{},opponentFeed:{inspire:1},influenceDelta:2,cooldown:[2,3]},{id:"clear-example",name:"Clear Example",role:"assertion",expression:"reason",rulesText:"Anchor the claim in one plain example.",cost:{reason:1},selfYield:{demand:1},opponentFeed:{},influenceDelta:2,cooldown:[2,3]},{id:"bright-future",name:"Bright Future",role:"assertion",expression:"inspire",rulesText:"Describe the better outcome that action unlocks.",cost:{inspire:1},selfYield:{},opponentFeed:{demand:1},influenceDelta:2,cooldown:[2,3]},{id:"earned-regard",name:"Earned Regard",role:"evaluation",expression:"flattery",rulesText:"Recognize a choice they made well.",cost:{flattery:1},selfYield:{inspire:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"name-the-gap",name:"Name the Gap",role:"rebuttal",expression:"reason",rulesText:"Point out the part of their account that does not connect.",cost:{reason:1},selfYield:{},opponentFeed:{flattery:1},influenceDelta:3,cooldown:[3,4]},{id:"calm-the-heat",name:"Calm the Heat",role:"rebuttal",expression:"inspire",rulesText:"Lower the temperature and return to shared ground.",cost:{inspire:1},selfYield:{flattery:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"turn-the-mirror",name:"Turn the Mirror",role:"rebuttal",expression:"flattery",rulesText:"Use their stated standards as the frame for a reply.",cost:{flattery:1},selfYield:{},opponentFeed:{reason:1},influenceDelta:2,cooldown:[2,3]},{id:"change-the-frame",name:"Change the Frame",role:"pivot",expression:"demand",rulesText:"Shift from what happened to what must happen next.",cost:{demand:1},selfYield:{reason:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]},{id:"open-door",name:"Open Door",role:"pivot",expression:"inspire",rulesText:"Offer a constructive path out of the disagreement.",cost:{inspire:1},selfYield:{},opponentFeed:{reason:1},influenceDelta:1,cooldown:[1,2]},{id:"gracious-challenge",name:"Gracious Challenge",role:"pivot",expression:"flattery",rulesText:"Pair respect with a request they cannot dismiss.",cost:{flattery:1},selfYield:{demand:1},opponentFeed:{},influenceDelta:1,cooldown:[1,2]}],M=Object.freeze(Object.fromEntries(Re.map(e=>[e.id,Object.freeze(e)]))),Te=Object.freeze(["terms-on-table","measured-question","shared-spark","courtesy-noted","firm-line"]),D={auditor:{id:"auditor",name:"The Auditor",description:"Presses the strongest available point and favors short refreshes on ties.",strategy:["measured-question","clear-example","name-the-gap","terms-on-table","change-the-frame"]},host:{id:"host",name:"The Host",description:"Builds your resources while choosing the strongest available follow-up.",strategy:["courtesy-noted","earned-regard","calm-the-heat","open-door","gracious-challenge"]}};function Ee(e){if(e.length!==5)return"A Strategy must contain exactly five Statements.";if(new Set(e).size!==e.length)return"A Strategy cannot contain duplicate Statements.";const n=e.find(o=>!M[o]);return n?`Unknown Statement: ${n}.`:null}function re(e,n){return Math.max(C.influenceMin,e.influence-M[n].influenceDelta)}function ae(e){return Object.values(M[e].opponentFeed).reduce((n,o)=>n+(o??0),0)}function De(e,n){const o=D[n].strategy.filter(r=>ee(e,"npc",r)===null);return o.length?{type:"speak",cardId:[...o].sort((r,a)=>{const l=M[r],u=M[a];if(n==="auditor"){const g=re(e,r)-re(e,a);if(g!==0)return g;const $=u.influenceDelta-l.influenceDelta;if($!==0)return $;const d=l.cooldown[0]-u.cooldown[0];if(d!==0)return d}else{const g=ae(a)-ae(r);if(g!==0)return g;const $=u.influenceDelta-l.influenceDelta;if($!==0)return $}return r.localeCompare(a)})[0]}:{type:"listen"}}function je(e,n){let o=e+Math.imul(n+1,1831565813)>>>0;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),(o^o>>>14)>>>0}function Ie(e,n,o,i){if(!Number.isInteger(o)||!Number.isInteger(i)||o>i)throw new Error(`Invalid inclusive range ${o}..${i}`);const r=i-o+1;return o+je(e,n)%r}const F=["demand","reason","inspire","flattery"],C=Object.freeze({startingDialoguePoints:5,influenceMin:-4,influenceMax:4,playerControlThreshold:2,npcControlThreshold:-2,resourceCap:3,startingResource:1,strategySize:5,maxRounds:18});function le(){return{demand:1,reason:1,inspire:1,flattery:1}}function de(e,n,o){return Math.min(o,Math.max(n,e))}function J(e){return{...e,player:{...e.player,resources:{...e.player.resources},strategy:[...e.player.strategy]},npc:{...e.npc,resources:{...e.npc.resources},strategy:[...e.npc.strategy]},cooldowns:{...e.cooldowns},log:[...e.log]}}function L(e,n,o,i,r={}){const a={index:e.log.length,round:e.round,actor:n,action:o,text:i,details:r};return e.log.push(a),a}function ue(e,n){return`${e}:${n}`}function ie(e){const n=Ee(e.playerStrategy);if(n)throw new Error(n);if(!I[e.mode])throw new Error(`Unknown mode: ${e.mode}`);if(!D[e.npcPreset])throw new Error(`Unknown NPC preset: ${e.npcPreset}`);if(!Number.isSafeInteger(e.seed))throw new Error("Seed must be a safe integer.");const o=D[e.npcPreset],i={seed:e.seed,round:1,phase:"player-action",mode:e.mode,npcPreset:e.npcPreset,player:{dialoguePoints:C.startingDialoguePoints,resources:le(),strategy:[...e.playerStrategy]},npc:{dialoguePoints:C.startingDialoguePoints,resources:le(),strategy:[...o.strategy]},influence:0,cooldowns:{},result:null,log:[]};return L(i,"system","start",`Parley begins in ${I[e.mode].name} mode against ${o.name}.`,{seed:e.seed,mode:e.mode,npcPreset:e.npcPreset}),i}function he(e){return e==="player"?"player-action":"npc-action"}function ee(e,n,o){if(e.phase==="complete")return"The Parley is complete.";if(e.phase!==he(n))return`It is not the ${n}'s action phase.`;const i=e[n];if(!i.strategy.includes(o))return"That Statement is not in this Strategy.";const r=M[o];if(!r)return"Unknown Statement.";const a=e.cooldowns[ue(n,o)]??0;if(a>0)return`Refreshing for ${a} more settlement${a===1?"":"s"}.`;if(I[e.mode].blockedExpression===r.expression)return`${Z(r.expression)} is blocked in ${I[e.mode].name}.`;for(const l of F){const u=r.cost[l]??0;if(i.resources[l]<u)return`Missing ${Z(l)} (${i.resources[l]}/${u}).`}return null}function Z(e){return e.charAt(0).toUpperCase()+e.slice(1)}function K(e,n,o){const i={};for(const r of F){const a=(n[r]??0)*o;if(a===0)continue;const l=e[r];e[r]=de(l+a,0,C.resourceCap),i[r]=e[r]-l}return i}function V(e){const n=F.filter(o=>(e[o]??0)!==0).map(o=>`${Z(o)} ${Math.abs(e[o]??0)}`);return n.length?n.join(", "):"none"}function Ae(e){return e.log.filter(n=>n.action==="speak").length}function fe(e,n,o){if(e.phase==="complete")return{accepted:!1,state:e,reason:"The Parley is complete."};if(e.phase!==he(n))return{accepted:!1,state:e,reason:`It is not the ${n}'s action phase.`};if(o.type==="listen"){const P=J(e);P.phase=n==="player"?"npc-action":"settlement";const R=L(P,n,"listen",`${n==="player"?"You listen":"The opponent listens"}, preserving resources and position.`);return{accepted:!0,state:P,event:R}}const i=ee(e,n,o.cardId);if(i)return{accepted:!1,state:e,reason:i};const r=J(e),a=r[n],l=r[n==="player"?"npc":"player"],u=M[o.cardId],g=K(a.resources,u.cost,-1),$=K(a.resources,u.selfYield,1),d=K(l.resources,u.opponentFeed,1),m=Object.values(u.selfYield).reduce((P,R)=>P+(R??0),0),k=Object.values($).reduce((P,R)=>P+Math.max(0,R??0),0),x=Object.values(u.opponentFeed).reduce((P,R)=>P+(R??0),0),N=Object.values(d).reduce((P,R)=>P+Math.max(0,R??0),0),U=n==="player"?u.influenceDelta:-u.influenceDelta,Y=r.influence;r.influence=de(r.influence+U,C.influenceMin,C.influenceMax);const O=Ie(r.seed,Ae(e),u.cooldown[0],u.cooldown[1]);r.cooldowns[ue(n,u.id)]=O,r.phase=n==="player"?"npc-action":"settlement";const G=n==="player"?"You speak":"The opponent speaks",z=[m>k?`${m-k} self-yield capped`:"",x>N?`${x-N} opponent feed capped`:""].filter(Boolean),B=L(r,n,"speak",`${G}: “${u.name}.” Pay ${V(u.cost)}; gain ${V($)}; feed ${V(d)}. Influence ${Y>=0?"+":""}${Y} → ${r.influence>=0?"+":""}${r.influence}. Refresh ${O}.${z.length?` ${z.join("; ")}.`:""}`,{cardId:u.id,paid:g,gained:$,fed:d,influenceBefore:Y,influenceAfter:r.influence,cooldown:O,cappedSelfYield:m-k,cappedOpponentFeed:x-N});return{accepted:!0,state:r,event:B}}function ce(e){return e>0?"player-win":e<0?"npc-win":"draw"}function Oe(e){if(e.phase!=="settlement")return e;const n=J(e),o=[];for(const[l,u]of Object.entries(n.cooldowns)){const g=Math.max(0,u-1);n.cooldowns[l]=g,u>0&&g===0&&o.push(l)}let i="Neither side controls the conversation; no Dialogue Point is lost.",r="neutral";n.influence>=C.playerControlThreshold?(n.npc.dialoguePoints=Math.max(0,n.npc.dialoguePoints-1),r="player",i=`You hold the conversational ground; the opponent loses 1 Dialogue Point (${n.npc.dialoguePoints} remaining).`):n.influence<=C.npcControlThreshold&&(n.player.dialoguePoints=Math.max(0,n.player.dialoguePoints-1),r="npc",i=`The opponent holds the conversational ground; you lose 1 Dialogue Point (${n.player.dialoguePoints} remaining).`),L(n,"system","settlement",i,{scoredFor:r,refreshed:o});let a=null;return n.player.dialoguePoints===0&&n.npc.dialoguePoints===0?a=ce(n.influence):n.npc.dialoguePoints===0?a="player-win":n.player.dialoguePoints===0?a="npc-win":n.round>=C.maxRounds&&(a=ce(n.influence)),a?(n.result=a,n.phase="complete",L(n,"system","complete",a==="player-win"?"Parley won — your position carries the exchange.":a==="npc-win"?"Parley lost — the opponent carries the exchange.":"Parley drawn — neither position prevails.",{result:a})):(n.round+=1,n.phase="player-action"),n}const Ye=`<svg
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
</svg>`,Fe=`<svg
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
</svg>`,Ne=`<svg
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
</svg>`,ze=`<svg
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
</svg>`,Le=`<svg
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
</svg>`,Be=`<svg
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
</svg>`,He=`<svg
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
</svg>`,qe=`<svg
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
</svg>`,Ue=`<svg
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
</svg>`,Ge=`<svg
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
</svg>`,_e={demand:ze,reason:Fe,inspire:Ge,flattery:Le,influence:Ue,"dialogue-points":Be,refresh:qe,transfer:Ye,speak:He,listen:Ne};function h(e,n="default"){return _e[e].replace("<svg",'<svg aria-hidden="true" focusable="false"').replace(/class="[^"]*"/,`class="ui-icon ui-icon-${e} ui-icon-${n}"`)}function Ke(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Q(e,n){const o=I[n],i=new Set(Object.values(M).filter(g=>g.expression===o.blockedExpression).map(g=>g.id)),r=new Set([...e].filter(g=>!i.has(g))),a=e.size-r.size;if(!o.blockedExpression)return{selectedCardIds:r,blockedCardIds:i,removedCount:a,announcement:`${o.name} blocks no Expressions.`};const l=Ke(o.blockedExpression),u=a===0?"":` Removed ${a} ${l} Statement${a===1?"":"s"}; choose ${a} replacement${a===1?"":"s"}.`;return{selectedCardIds:r,blockedCardIds:i,removedCount:a,announcement:`${o.name} blocks ${l}.${u}`}}function pe(e){return{game:e,stage:"player-action",actionResult:null,settlementResult:null}}function Ve(e,n){if(!(e.game.phase==="player-action"&&(e.stage==="player-action"||e.stage==="settlement-result")))return{accepted:!1,presentation:e,reason:"Resolve the current round stage before taking another action."};const i=e.game,r=fe(i,"player",n);return!r.accepted||!r.event?{accepted:!1,presentation:e,reason:r.reason??"That action is not available."}:{accepted:!0,presentation:{game:r.state,stage:"player-result",actionResult:{actor:"player",action:n,before:i,after:r.state,event:r.event},settlementResult:null}}}function Qe(e){if(e.stage!=="player-result"||e.game.phase!=="npc-action")return{accepted:!1,presentation:e,reason:"The opponent cannot be resolved during this stage."};const n=e.game,o=De(n,n.npcPreset),i=fe(n,"npc",o);return!i.accepted||!i.event?{accepted:!1,presentation:e,reason:i.reason??"The opponent could not take an action."}:{accepted:!0,presentation:{game:i.state,stage:"npc-result",actionResult:{actor:"npc",action:o,before:n,after:i.state,event:i.event},settlementResult:null}}}function We(e){if(e.stage!=="npc-result"||e.game.phase!=="settlement")return{accepted:!1,presentation:e,reason:"The round cannot be settled during this stage."};const n=e.game,o=Oe(n),i=o.log.find(r=>r.index>=n.log.length&&r.action==="settlement");return i?{accepted:!0,presentation:{game:o,stage:"settlement-result",actionResult:null,settlementResult:{before:n,after:o,event:i}}}:{accepted:!1,presentation:e,reason:"Settlement did not produce an event."}}function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}function E(e){return e>0?`+${e}`:e<0?`−${Math.abs(e)}`:"0"}function W(e,n){const o=e[n];return typeof o=="number"?o:0}function X(e,n){const o=e[n];return typeof o=="object"&&o!==null?o:{}}function ge(e){return e.game.phase==="player-action"&&(e.stage==="player-action"||e.stage==="settlement-result")}function Xe(e,n){const o=e.game,i=ge(e),r=e.stage==="player-result"&&e.actionResult?.actor==="player"&&e.actionResult.action.type==="speak"?e.actionResult.action.cardId:null;return o.player.strategy.map(a=>{const l=M[a],u=ee(o,"player",a),g=i?u:o.phase==="complete"?"The Parley is complete.":e.stage==="player-result"?"Resolve the opponent before taking another action.":"Settle the round before taking another action.",$=o.cooldowns[`player:${a}`]??0,d=Object.keys(l.cost)[0],m=`speak-${l.id}`,k=n?.controlId===m?'aria-describedby="action-error"':"";return`<article class="statement-card expression-${l.expression} ${g?"unavailable":""} ${r===l.id?"played-card":""}">
      <header><span class="role">${S(l.role)}</span><span class="cost">${h(d)} ${l.cost[d]}</span></header>
      <h3>${l.name}</h3>
      <p>${l.rulesText}</p>
      <div class="card-mechanics"><span>${h("influence")} Influence ${E(l.influenceDelta)}</span><span>${h("refresh")} Refresh ${l.cooldown[0]}–${l.cooldown[1]}</span></div>
      <button id="${m}" class="speak-btn" data-card-id="${l.id}" ${g?"disabled":""} ${k}>${h("speak")} ${$?`Refreshing · ${$}`:"Speak"}</button>
      ${g?`<small class="disabled-reason">${g}</small>`:'<small class="disabled-reason ready">Ready to speak</small>'}
    </article>`}).join("")}function Je(){const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root.");const n=e;n.innerHTML='<div id="stage-status" class="sr-only" aria-live="polite" aria-atomic="true"></div><div id="app-content"></div>';const o=n.querySelector("#app-content"),i=n.querySelector("#stage-status");if(!o||!i)throw new Error("Could not initialize the application regions.");const r=o,a=i;let l=new Set(Te),u="interview",g="auditor",$=137,d=null,m="",k="",x="Choose a conversation mode, opponent, seed, and five Statements.";function N(){const t=I[u],s=Q(l,u),c=Object.values(I).map(p=>`<option value="${p.id}" ${p.id===u?"selected":""}>${p.name} — ${p.blockedExpression?`${S(p.blockedExpression)} blocked`:"open exchange"}</option>`).join(""),f=Object.values(D).map(p=>`<option value="${p.id}" ${p.id===g?"selected":""}>${p.name}</option>`).join(""),y=Object.values(M).map(p=>{const v=l.has(p.id)?"checked":"",w=s.blockedCardIds.has(p.id),b=w?`${S(p.expression)} Statements cannot be prepared or Spoken in ${t.name}.`:"";return`<label class="setup-card expression-${p.expression} ${w?"blocked":""}">
          <input class="strategy-check" type="checkbox" value="${p.id}" ${v} ${w?"disabled":""} />
          ${w?`<span class="blocked-badge">Blocked in ${t.name}</span>`:""}
          <span class="setup-card-title">${h(p.expression)} ${p.name}</span>
          <span>${S(p.role)} · ${S(p.expression)} · Influence ${E(p.influenceDelta)}</span>
          <small>${p.rulesText}</small>
          ${w?`<small class="blocked-explanation">${b}</small>`:""}
        </label>`}).join("");return`<main class="shell setup-shell">
      <header class="masthead">
        <div><p class="eyebrow">A conversation card duel</p><h1>Common Ground</h1></div>
        <p class="lede">Prepare five Statements. Shape the exchange. Hold enough Influence to wear down the other side's Dialogue Points.</p>
      </header>
      <section class="setup-grid">
        <div class="panel setup-options">
          <div><label for="mode-select">Conversation</label><select id="mode-select">${c}</select></div>
          <div><label for="npc-select">Opponent</label><select id="npc-select">${f}</select></div>
          <div><label for="seed-input">Parley seed</label><input id="seed-input" type="number" step="1" value="${$}" /></div>
          <div class="setup-summary">
            <strong id="selection-count">${l.size} / 5 Statements prepared</strong>
            <span id="selection-hint">${l.size===5?"Your Strategy is ready.":"Choose exactly five available Statements."}</span>
          </div>
          <button id="start-btn" class="primary" ${l.size===5?"":"disabled"}>${h("speak")} Begin Parley</button>
        </div>
        <details class="panel rules-panel" open>
          <summary>How to parley</summary>
          ${Y()}
        </details>
      </section>
      <section><div class="section-heading"><p class="eyebrow">Prepared Strategy</p><h2>Choose five Statements</h2><p class="mode-note">${t.blockedExpression?`${h(t.blockedExpression)} ${t.name} blocks ${S(t.blockedExpression)}.`:"Interview allows all four Expressions."}</p></div><div class="setup-cards">${y}</div></section>
    </main>`}function U(){return F.map(t=>`<span class="legend-item expression-${t}">${h(t)} ${S(t)}</span>`).join("")}function Y(){return`<div class="rules-copy">
      <p><strong>${h("dialogue-points")} Win:</strong> Reduce the opponent from 5 Dialogue Points to 0. After both sides act, Influence at +2 or higher costs them 1 DP; −2 or lower costs you 1 DP.</p>
      <p><strong>${h("speak")} Speak:</strong> Pay the shown Expression, apply yields and Influence, then hold the result. Resolve the opponent, then settle the round.</p>
      <p><strong>${h("listen")} Listen:</strong> Pass without changing resources or Influence. Listening is always legal and the opponent still responds.</p>
      <p><strong>Round stages:</strong> Speak or Listen → Resolve opponent → Settle round. Nothing advances on a timer.</p>
      <p><strong>Modes:</strong> A blocked Expression cannot be prepared or Spoken. Interview blocks none.</p>
      <p><strong>${h("refresh")} Refresh:</strong> The number is how many settlements a reusable Statement needs before it is ready again.</p>
      <p><strong>${h("transfer")} Feed:</strong> The arrow identifies a resource given to the other speaker.</p>
      <p><strong>${h("influence")} Influence:</strong> The shared balance; positive favors you and negative favors the opponent.</p>
      <p><strong>Expressions:</strong> <span class="expression-legend">${U()}</span> Each resource caps at ${C.resourceCap}.</p>
      <p><strong>Timeout:</strong> After round ${C.maxRounds}, the side favored by Influence wins; neutral Influence is a draw.</p>
    </div>`}function O(t){return t.actionResult??t.settlementResult}function G(t,s,c){const f=O(t);return f?f.before[s].resources[c]!==f.after[s].resources[c]:!1}function z(t,s){const c=O(t);return c?c.before[s].dialoguePoints!==c.after[s].dialoguePoints:!1}function B(t,s){const c=s.game;return F.map(f=>`<div class="resource expression-${f} ${G(s,t,f)?"value-changed":""}" title="${S(f)}">
        ${h(f)}<strong>${c[t].resources[f]}</strong><small>${S(f)}</small>
      </div>`).join("")}function P(t){const s=t.game,f=O(t)?.before.influence??s.influence,y=f!==s.influence,p=Array.from({length:9},(b,T)=>T-4),v=(f+4)/8*100,w=(s.influence+4)/8*100;return`<div class="influence-wrap ${y?"value-changed":""}">
      <div class="influence-labels"><span>Opponent control</span><strong>${h("influence")} Influence ${E(s.influence)}</strong><span>Your control</span></div>
      <div class="influence-track" role="img" aria-label="Influence moved from ${E(f)} to ${E(s.influence)}">
        ${p.map(b=>`<div class="influence-step ${b<=-2?"npc-band":b>=2?"player-band":""}"><span>${E(b)}</span></div>`).join("")}
        <span class="influence-marker ${y?"marker-moved":""}" style="--marker-from: ${v}%; --marker-to: ${w}%; left: ${w}%" aria-hidden="true"></span>
      </div>
    </div>`}function R(t){if(!t.result)return"";const s=t.result==="player-win"?["Parley won","Your position carried the exchange."]:t.result==="npc-win"?["Parley lost","The opponent carried the exchange."]:["Parley drawn","Neither position prevailed."];return`<section class="result-banner result-${t.result}"><p class="eyebrow">Final result</p><h2 id="final-result-heading" tabindex="-1">${s[0]}</h2><p>${s[1]}</p><button id="result-new-btn" class="primary">Prepare another Parley</button></section>`}function _(t,s,c){return F.flatMap(f=>{const y=t[f]??0;if(y===0)return[];const p=c?`<span class="transfer-route"><span>${c.source}</span><span class="transfer-direction">${h("transfer")}</span><span class="sr-only">to</span><span>${c.recipient}</span></span>`:"";return[`<li class="delta-chip expression-${f} ${c?`transfer-chip transfer-from-${c.actor}`:""}">${p}${h(f)} <strong>${E(y)}</strong> ${S(f)}${s}</li>`]})}function me(t){const s=t.actionResult;if(!s)return"";const c=s.actor==="player",f=c?"You":D[t.game.npcPreset].name,y=c?'<button id="resolve-npc-btn" class="primary progression-btn">Resolve opponent</button>':'<button id="settle-btn" class="primary progression-btn">Settle round</button>';if(s.action.type==="listen")return`<section class="action-tray panel tray-${s.actor}" aria-labelledby="action-result-heading">
        <div class="tray-heading">${h("listen","large")}<div><p class="eyebrow">${c?"Your action":"Opponent action"}</p><h2 id="action-result-heading" tabindex="-1">${f} ${c?"listen":"listens"}</h2></div></div>
        <p class="neutral-result">No resources or Influence changed.</p>
        ${y}
      </section>`;const p=M[s.action.cardId],v=s.event.details,w=X(v,"paid"),b=X(v,"gained"),T=X(v,"fed"),H=[..._(w," paid"),..._(b," gained"),..._(T," fed",{actor:s.actor,source:f,recipient:c?D[t.game.npcPreset].name:"you"}),`<li class="delta-chip">${h("influence")} Influence <strong>${E(W(v,"influenceBefore"))} → ${E(W(v,"influenceAfter"))}</strong></li>`,`<li class="delta-chip">${h("refresh")} Refresh <strong>${W(v,"cooldown")}</strong></li>`];return`<section class="action-tray panel tray-${s.actor}" aria-labelledby="action-result-heading">
      <div class="tray-heading expression-${p.expression}">${h(p.expression,"large")}<div><p class="eyebrow">${c?"Your action":"Opponent reveal"}</p><h2 id="action-result-heading" tabindex="-1">${f} ${c?"play":"plays"} “${p.name}”</h2><p>${S(p.role)} · ${S(p.expression)}</p></div></div>
      <article class="revealed-card expression-${p.expression}"><strong>${p.name}</strong><span>${p.rulesText}</span></article>
      <ul class="delta-list">${H.join("")}</ul>
      ${y}
    </section>`}function ye(t){const s=t.settlementResult;if(!s)return"";const c=s.event.details.scoredFor,f=s.before.player.dialoguePoints,y=s.after.player.dialoguePoints,p=s.before.npc.dialoguePoints,v=s.after.npc.dialoguePoints,w=c==="player"?`${D[t.game.npcPreset].name} loses 1 Dialogue Point: ${p} → ${v}.`:c==="npc"?`You lose 1 Dialogue Point: ${f} → ${y}.`:"No Dialogue Point lost.",b=s.event.details.refreshed,T=Array.isArray(b)?b.filter(q=>typeof q=="string"):[],H=["player","npc"].flatMap(q=>{const se=T.map(A=>A.split(":")).filter(([A])=>A===q).map(([,A])=>A);if(se.length===0)return[];const oe=q==="player"?"You":D[t.game.npcPreset].name;return[`<section class="refresh-group" aria-label="${oe} ready Statements"><strong>${oe}</strong><ul class="refresh-list">${se.map(A=>`<li>${M[A]?.name??A}</li>`).join("")}</ul></section>`]}),Me=H.length?`<div class="refresh-groups">${H.join("")}</div>`:"<p>No cards refreshed.</p>",Ce=t.game.phase==="complete"?"The Parley is complete.":`Round ${t.game.round} is ready. Choose your next action.`;return`<section class="action-tray settlement-tray panel" aria-labelledby="settlement-heading">
      <div class="tray-heading">${h("dialogue-points","large")}<div><p class="eyebrow">Settlement result</p><h2 id="settlement-heading" tabindex="-1">${w}</h2></div></div>
      <div class="settlement-grid"><div><strong>${h("refresh")} Ready Statements</strong>${Me}</div><p class="next-round">${Ce}</p></div>
    </section>`}function be(t){return me(t)||ye(t)||`<section class="action-tray panel awaiting-action" aria-labelledby="action-result-heading"><div class="tray-heading">${h("speak","large")}<div><p class="eyebrow">Your action</p><h2 id="action-result-heading">Choose a Statement or Listen</h2></div></div><p>The result will remain here until you explicitly resolve the opponent.</p></section>`}function $e(t){return t.game.phase==="complete"?"Complete":t.stage==="player-result"?"Player result · resolve opponent":t.stage==="npc-result"?"Opponent result · settle round":t.stage==="settlement-result"?"Settlement shown · your action":"Your action"}function ve(t){return t.log.map(s=>{const c=s.action==="speak"?h("speak"):s.action==="listen"?h("listen"):s.action==="settlement"?h("dialogue-points"):h("influence");return`<li class="log-${s.action}"><span>R${s.round}</span><p>${c}${s.text}</p></li>`}).join("")}function we(t){const s=t.game,c=I[s.mode],f=D[s.npcPreset],y=ge(t),p=m?{controlId:k}:void 0,v=k==="listen-btn"&&m?'aria-describedby="action-error"':"";return`<main class="shell game-shell stage-${t.stage}">
      <header class="game-header">
        <div><p class="eyebrow">${c.name} · seed ${s.seed}</p><h1>Common Ground</h1><p>${c.prompt}</p></div>
        <div class="header-actions"><button id="reset-btn">Reset Parley</button><button id="new-btn">New setup</button></div>
      </header>
      ${R(s)}
      <section class="scoreboard panel">
        <div class="combatant npc-side"><p class="eyebrow">Opponent</p><h2>${f.name}</h2><div class="dp ${z(t,"npc")?"value-changed":""}" aria-label="Opponent Dialogue Points: ${s.npc.dialoguePoints}">${Array.from({length:5},(w,b)=>`<span class="${b<s.npc.dialoguePoints?"full":""}"></span>`).join("")}<strong>${h("dialogue-points")} ${s.npc.dialoguePoints} DP</strong></div><div class="resources">${B("npc",t)}</div></div>
        ${P(t)}
        <div class="combatant player-side"><p class="eyebrow">Your position</p><h2>You</h2><div class="dp ${z(t,"player")?"value-changed":""}" aria-label="Your Dialogue Points: ${s.player.dialoguePoints}">${Array.from({length:5},(w,b)=>`<span class="${b<s.player.dialoguePoints?"full":""}"></span>`).join("")}<strong>${h("dialogue-points")} ${s.player.dialoguePoints} DP</strong></div><div class="resources">${B("player",t)}</div></div>
      </section>
      ${be(t)}
      <div class="status-strip"><span>Round <strong>${s.round}</strong> / ${C.maxRounds}</span><span>${c.blockedExpression?`${h(c.blockedExpression)} ${S(c.blockedExpression)} is blocked`:"No Expression blocked"}</span><span>${$e(t)}</span></div>
      <section class="play-layout">
        <div class="hand-area"><div class="section-heading"><p class="eyebrow">Prepared Strategy</p><h2>${y?"Choose your Statement":"Action held"}</h2></div><div class="hand">${Xe(t,p)}</div><button id="listen-btn" class="listen" ${y?"":"disabled"} ${v}>${h("listen")} Listen <span>Pass without changing resources or Influence</span></button>${m?`<p id="action-error" class="action-error">${m}</p>`:""}</div>
        <aside class="sidebar"><details class="panel rules-panel"><summary>Rules reference</summary>${Y()}</details><section class="panel log-panel"><div class="log-heading"><p class="eyebrow">Transcript</p><h2>Event log</h2></div><ol id="event-log">${ve(s)}</ol></section></aside>
      </section>
    </main>`}function j(t){r.innerHTML=d?we(d):N(),a.textContent=x;const s=document.querySelector("#event-log");s&&(s.scrollTop=s.scrollHeight),t&&document.querySelector(t)?.focus()}function ke(){const t=ie({seed:$,mode:u,npcPreset:g,playerStrategy:[...l]});d=pe(t),m="",k="",x=`Parley begins in ${I[u].name}. Round 1. Choose a Statement or Listen.`,j(".speak-btn:not(:disabled)")}function ne(t){const s=t.actor==="player"?"You":D[t.after.npcPreset].name;if(t.action.type==="listen")return`${s} ${t.actor==="player"?"listen":"listens"}. No resources or Influence changed.`;const c=M[t.action.cardId];return`${s} ${t.actor==="player"?"played":"plays"} ${c.name}. Influence is now ${E(t.after.influence)}.`}function te(t,s){if(!d)return;const c=Ve(d,t);if(!c.accepted){m=c.reason??"That action is not available.",k=s,x=m,j(`#${s}`);return}d=c.presentation,m="",k="",x=`${ne(d.actionResult)} Resolve the opponent when ready.`,j("#resolve-npc-btn")}function xe(){if(!d)return;const t=Qe(d);t.accepted&&(d=t.presentation,m="",k="",x=`${ne(d.actionResult)} Settle the round when ready.`,j("#settle-btn"))}function Pe(){if(!d)return;const t=We(d);if(!t.accepted)return;d=t.presentation,x=`${d.settlementResult.event.text} ${d.game.phase==="complete"?"The Parley is complete.":`Round ${d.game.round}. Choose your next action.`}`,j(d.game.phase==="complete"?"#final-result-heading":".speak-btn:not(:disabled), #listen-btn")}function Se(){if(d){u=d.game.mode,g=d.game.npcPreset,$=d.game.seed;const t=Q(new Set(d.game.player.strategy),u);l=new Set(t.selectedCardIds),x=t.announcement}d=null,m="",k="",j("#mode-select")}n.addEventListener("change",t=>{const s=t.target,c=s.closest("#mode-select");if(c){u=c.value;const T=Q(l,u);l=new Set(T.selectedCardIds),x=T.announcement,j("#mode-select");return}const f=s.closest("#npc-select");if(f){g=f.value;return}const y=s.closest("#seed-input");if(y){const T=Number(y.value);$=Number.isSafeInteger(T)?T:137;return}const p=s.closest(".strategy-check");if(!p)return;if(p.checked){if(l.size>=5){p.checked=!1;return}l.add(p.value)}else l.delete(p.value);const v=document.querySelector("#selection-count"),w=document.querySelector("#selection-hint"),b=document.querySelector("#start-btn");v&&(v.textContent=`${l.size} / 5 Statements prepared`),w&&(w.textContent=l.size===5?"Your Strategy is ready.":"Choose exactly five available Statements."),b&&(b.disabled=l.size!==5)}),n.addEventListener("click",t=>{const s=t.target;s.closest("#start-btn")&&ke(),s.closest("#listen-btn")&&te({type:"listen"},"listen-btn");const c=s.closest(".speak-btn");c?.dataset.cardId&&te({type:"speak",cardId:c.dataset.cardId},c.id),s.closest("#resolve-npc-btn")&&xe(),s.closest("#settle-btn")&&Pe(),s.closest("#reset-btn")&&d&&(d=pe(ie({seed:d.game.seed,mode:d.game.mode,npcPreset:d.game.npcPreset,playerStrategy:d.game.player.strategy})),m="",k="",x="Parley reset. Round 1. Choose a Statement or Listen.",j(".speak-btn:not(:disabled)")),(s.closest("#new-btn")||s.closest("#result-new-btn"))&&Se()}),j()}Je();
