"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[184],{8202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"core-concepts","title":"Core Concepts","description":"To effectively use Lyra, it\'s important to understand how it thinks about data. Let\'s explore the core concepts that make up the foundation of the library.","source":"@site/docs/core-concepts.md","sourceDirName":".","slug":"/core-concepts","permalink":"/docs/core-concepts","draft":false,"unlisted":false,"editUrl":"https://github.com/paradoxum-games/lyra/edit/main/docs/core-concepts.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"defaultSidebar","previous":{"title":"Getting Started","permalink":"/docs/getting-started"},"next":{"title":"Data Migrations","permalink":"/docs/advanced/migrations"}}');var r=t(4848),i=t(8453);const s={sidebar_position:3},o="Core Concepts",l={},c=[{value:"Understanding Sessions",id:"understanding-sessions",level:2},{value:"Working with Data",id:"working-with-data",level:2},{value:"Handling Multiple Players",id:"handling-multiple-players",level:2},{value:"Data Validation",id:"data-validation",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"core-concepts",children:"Core Concepts"})}),"\n",(0,r.jsx)(n.p,{children:"To effectively use Lyra, it's important to understand how it thinks about data. Let's explore the core concepts that make up the foundation of the library."}),"\n",(0,r.jsx)(n.h2,{id:"understanding-sessions",children:"Understanding Sessions"}),"\n",(0,r.jsx)(n.p,{children:"When a player joins your game, you need a way to work with their data. A session is Lyra's way of managing this connection between your game and a player's saved data."}),"\n",(0,r.jsx)(n.p,{children:"Sessions utilize 'session locking' to keep data safe. When you load a player's data, Lyra 'locks' it, which gives your server exclusive access to that data. This is crucial - without session locking, multiple servers might try to modify the same player's data simultaneously, leading to race conditions and lost data."}),"\n",(0,r.jsx)(n.p,{children:"Here's how you work with sessions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Players.PlayerAdded:Connect(function(player)\r\n    -- Establish exclusive access to the player's data\r\n    store:load(player):expect()\r\nend)\r\n\r\nPlayers.PlayerRemoving:Connect(function(player)\r\n    -- Release the lock and save any pending changes\r\n    store:unload(player)\r\nend)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Loading a session is always your first step. Any attempts to access or modify data before establishing a session will fail, as Lyra needs to ensure exclusive access before allowing operations."}),"\n",(0,r.jsx)(n.h2,{id:"working-with-data",children:"Working with Data"}),"\n",(0,r.jsx)(n.p,{children:"Once you have a session, you can start working with the player's data. Lyra provides a structured way to make changes through updates."}),"\n",(0,r.jsx)(n.p,{children:"An update is a function that receives the current data and can modify it mutably. The function must return true to commit the changes, providing an atomic way to perform conditional updates:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"store:update(player, function(data)\r\n    if data.coins < itemPrice then\r\n        return false -- Abort the update\r\n    end\r\n    \r\n    data.coins -= itemPrice\r\n    table.insert(data.inventory, itemId)\r\n    return true\r\nend)\n"})}),"\n",(0,r.jsx)(n.p,{children:"This pattern enables you to encapsulate your game's logic within updates while ensuring data consistency. The update either succeeds completely or fails entirely - there's no possibility of partial changes."}),"\n",(0,r.jsx)(n.admonition,{title:"Don't Yield!",type:"warning",children:(0,r.jsx)(n.p,{children:"Lyra enforces that updates are synchronous and non-blocking - if you yield inside the update function, it will error and abort the operation."})}),"\n",(0,r.jsx)(n.h2,{id:"handling-multiple-players",children:"Handling Multiple Players"}),"\n",(0,r.jsx)(n.p,{children:"Sometimes you need to coordinate changes across multiple players, like in a trading system."}),"\n",(0,r.jsx)(n.p,{children:"If you update each player individually, there's no guarantee that one player's changes will succeed while the other's fail - imagine a server crashing at exactly the right moment."}),"\n",(0,r.jsx)(n.p,{children:"This is where transactions come in."}),"\n",(0,r.jsx)(n.p,{children:"A transaction lets you modify multiple players' data atomically. Either all the changes succeed, or none of them do. This is crucial for maintaining data consistency:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"store:tx({player1, player2}, function(state)\r\n    local item = table.remove(state[player1].inventory, 1)\r\n    if not item then\r\n        return false -- Abort the transaction\r\n    end\r\n    \r\n    table.insert(state[player2].inventory, item)\r\n    return true\r\nend)\n"})}),"\n",(0,r.jsx)(n.p,{children:"The transaction ensures the atomicity of multi-player operations. You'll never end up in a state where an item has been removed from one player but not added to another, which is essential for maintaining the integrity of your game's economy."}),"\n",(0,r.jsx)(n.h2,{id:"data-validation",children:"Data Validation"}),"\n",(0,r.jsx)(n.p,{children:"Data validation in Lyra works through schemas. When you create a store, you define what valid data looks like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local store = Lyra.createPlayerStore({\r\n    name = "PlayerData",\r\n    template = {\r\n        coins = 0,\r\n        inventory = {},\r\n    },\r\n    schema = t.strictInterface({\r\n        coins = t.number,\r\n        inventory = t.table,\r\n    }),\r\n})\n'})}),"\n",(0,r.jsx)(n.p,{children:"Lyra enforces this schema on every operation, creating a safe boundary between your game logic and DataStores. If an operation would result in invalid data, Lyra rejects it before it can be saved."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We recommend using ",(0,r.jsx)(n.a,{href:"https://github.com/osyrisrblx/t",children:"'t', a Runtime Typechecker for Roblox"})," for defining schemas!"]})}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsx)(n.p,{children:"Now that you understand the core concepts, you might want to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Learn about ",(0,r.jsx)(n.a,{href:"/docs/advanced/migrations",children:"migrations"})," for updating your data format"]}),"\n",(0,r.jsxs)(n.li,{children:["Explore ",(0,r.jsx)(n.a,{href:"/docs/advanced/debugging",children:"debugging"})," for troubleshooting"]}),"\n",(0,r.jsxs)(n.li,{children:["See how to ",(0,r.jsx)(n.a,{href:"/docs/advanced/networking",children:"handle network updates"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);