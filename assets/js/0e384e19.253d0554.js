"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[976],{2053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"intro","title":"Introduction","description":"Lyra makes it easy to save player data in your Roblox game. It handles all the tricky parts - data loss prevention, trading items safely, validating data formats, and smoothly updating your data structure as your game evolves.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/paradoxum-games/lyra/edit/main/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"defaultSidebar","next":{"title":"Getting Started","permalink":"/docs/getting-started"}}');var a=t(4848),s=t(8453);const i={sidebar_position:1},o="Introduction",l={},d=[{value:"Features",id:"features",level:2},{value:"Quick Example",id:"quick-example",level:2},{value:"Importing Existing Data",id:"importing-existing-data",level:2},{value:"Installation",id:"installation",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,a.jsx)(n.p,{children:"Lyra makes it easy to save player data in your Roblox game. It handles all the tricky parts - data loss prevention, trading items safely, validating data formats, and smoothly updating your data structure as your game evolves."}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Data Safety"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\ud83d\udd12 ",(0,a.jsx)(n.strong,{children:"Session Locking"})," - Prevents multiple servers from corrupting each other's data"]}),"\n",(0,a.jsxs)(n.li,{children:["\u2694\ufe0f ",(0,a.jsx)(n.strong,{children:"Transactions"})," - Safe trading between players - no more item duplication bugs"]}),"\n",(0,a.jsxs)(n.li,{children:["\ud83d\udc41\ufe0f ",(0,a.jsx)(n.strong,{children:"Validation"})," - Catches bad data before it gets saved"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Performance"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\ud83d\udc8e ",(0,a.jsx)(n.strong,{children:"Auto-Sharding"})," - Handles large data by automatically splitting across multiple keys"]}),"\n",(0,a.jsxs)(n.li,{children:["\u26a1 ",(0,a.jsx)(n.strong,{children:"Efficient"})," - Minimizes DataStore calls and bandwidth usage"]}),"\n",(0,a.jsxs)(n.li,{children:["\ud83c\udfaf ",(0,a.jsx)(n.strong,{children:"Auto-Retry"})," - Handles DataStore errors and throttling automatically"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Development"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\ud83e\udd8b ",(0,a.jsx)(n.strong,{children:"Migrations"})," - Update your data format without breaking existing saves"]}),"\n",(0,a.jsxs)(n.li,{children:["\ud83d\udd04 ",(0,a.jsx)(n.strong,{children:"Drop-in"})," - Import your existing data and switch over seamlessly"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"quick-example",children:"Quick Example"}),"\n",(0,a.jsx)(n.p,{children:"Here's what using Lyra looks like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local store = Lyra.createPlayerStore({\r\n    name = "PlayerData",\r\n    template = {\r\n        coins = 0,\r\n        inventory = {},\r\n    },\r\n    schema = t.strictInterface({\r\n        coins = t.number,\r\n        inventory = t.table,\r\n    }),\r\n})\r\n\r\n-- Load data when players join\r\nPlayers.PlayerAdded:Connect(function(player)\r\n    store:load(player):expect()\r\nend)\r\n\r\n-- Safe updates with validation\r\nstore:update(player, function(data)\r\n    if data.coins < itemPrice then\r\n        return false -- Abort if can\'t afford\r\n    end\r\n    data.coins -= itemPrice\r\n    table.insert(data.inventory, itemId)\r\n    return true\r\nend):expect()\r\n\r\n-- Atomic trades between players\r\nstore:tx({player1, player2}, function(state)\r\n    -- Either both changes happen or neither does\r\n    state[player1].coins -= 100\r\n    state[player2].coins += 100\r\n    return true\r\nend):expect()\n'})}),"\n",(0,a.jsxs)(n.admonition,{title:"Avoid Stale Data",type:"warning",children:[(0,a.jsxs)(n.p,{children:["Always modify data through update functions. Never use data from a previous ",(0,a.jsx)(n.code,{children:":get()"})," call:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"-- \ud83d\udeab Don't do this:\r\nlocal oldData = store:get(player):expect()\r\nstore:update(player, function(newData)\r\n    if not oldData.claimedDailyReward then -- This data might be stale!\r\n        return false\r\n    end\r\n    newData.coins += 500\r\n    newData.claimedDailyReward = true\r\n    return true\r\nend)\r\n\r\n-- \u2705 Do this instead:\r\nstore:update(player, function(data)\r\n    if not data.claimedDailyReward then -- This data is always current\r\n        return false\r\n    end\r\n    data.coins += 500\r\n    data.claimedDailyReward = true\r\n    return true\r\nend)\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"importing-existing-data",children:"Importing Existing Data"}),"\n",(0,a.jsx)(n.p,{children:"When switching to Lyra, you can bring your existing data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local store = Lyra.createPlayerStore({\r\n    name = "PlayerData",\r\n    template = template,\r\n    schema = schema,\r\n    importLegacyData = function(key)\r\n        local success, data = pcall(function()\r\n            return YourCurrentSystem.getData(key)\r\n        end)\r\n        \r\n        if not success then\r\n            -- If there\'s an error, Lyra will kick the player and prompt them\r\n            -- to rejoin to try again.\r\n            error("Failed to reach data system")\r\n        end\r\n\r\n        if data ~= nil then\r\n            return data -- Return existing data to import\r\n        end\r\n        \r\n        return nil -- Return nil for new players to use template\r\n    end,\r\n})\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["Add to your ",(0,a.jsx)(n.code,{children:"wally.toml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[dependencies]\r\nLyra = "paradoxum-games/lyra@0.1.0"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Check out ",(0,a.jsx)(n.a,{href:"/docs/getting-started",children:"Getting Started"})," for a complete setup guide"]}),"\n",(0,a.jsxs)(n.li,{children:["Read ",(0,a.jsx)(n.a,{href:"/docs/core-concepts",children:"Core Concepts"})," to understand how Lyra works"]}),"\n",(0,a.jsxs)(n.li,{children:["See the Advanced Features section for ",(0,a.jsx)(n.a,{href:"/docs/advanced/migrations",children:"migration guides"})," and ",(0,a.jsx)(n.a,{href:"/docs/advanced/debugging",children:"debugging"})," tips"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);