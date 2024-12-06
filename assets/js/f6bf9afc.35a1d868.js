"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[716],{4443:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"advanced/debugging","title":"Debugging","description":"Lyra provides detailed logging to help you understand what\'s happening with your data and diagnose issues. You can access these logs through the logCallback option.","source":"@site/docs/advanced/debugging.md","sourceDirName":"advanced","slug":"/advanced/debugging","permalink":"/docs/advanced/debugging","draft":false,"unlisted":false,"editUrl":"https://github.com/paradoxum-games/lyra/edit/main/docs/advanced/debugging.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"defaultSidebar","previous":{"title":"Network Updates","permalink":"/docs/advanced/networking"}}');var a=s(4848),t=s(8453);const o={sidebar_position:3},i="Debugging",l={},d=[{value:"Understanding Logs",id:"understanding-logs",level:2},{value:"Log Levels",id:"log-levels",level:2},{value:"Development Mode",id:"development-mode",level:2},{value:"See Also",id:"see-also",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"debugging",children:"Debugging"})}),"\n",(0,a.jsxs)(n.p,{children:["Lyra provides detailed logging to help you understand what's happening with your data and diagnose issues. You can access these logs through the ",(0,a.jsx)(n.code,{children:"logCallback"})," option."]}),"\n",(0,a.jsx)(n.h2,{id:"understanding-logs",children:"Understanding Logs"}),"\n",(0,a.jsx)(n.p,{children:"Each log message contains:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A severity level"}),"\n",(0,a.jsx)(n.li,{children:"A descriptive message"}),"\n",(0,a.jsx)(n.li,{children:"Optional context with additional details"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Here's a basic setup that prints all logs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local function handleLogs(message)\r\n    print(`[Lyra][{message.level}] {message.message}`)\r\n    \r\n    if message.context then\r\n        -- Context contains relevant data like keys, session info, etc.\r\n        print("Context:", message.context)\r\n    end\r\nend\r\n\r\nlocal store = Lyra.createPlayerStore({\r\n    name = "PlayerData",\r\n    template = template,\r\n    schema = schema,\r\n    logCallback = handleLogs,\r\n})\n'})}),"\n",(0,a.jsx)(n.h2,{id:"log-levels",children:"Log Levels"}),"\n",(0,a.jsx)(n.p,{children:"Lyra uses different levels to categorize logs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local function handleLogs(message)\r\n    -- Handle based on severity\r\n    if message.level == "fatal" then\r\n        -- Unrecoverable errors (e.g., corrupted data)\r\n        warn("FATAL:", message.message)\r\n        \r\n    elseif message.level == "error" then\r\n        -- Operation failures (e.g., update failed)\r\n        warn("Error:", message.message)\r\n        \r\n    elseif message.level == "warn" then\r\n        -- Potential issues (e.g., slow operations)\r\n        warn("Warning:", message.message)\r\n        \r\n    elseif message.level == "info" then\r\n        -- Important operations (e.g., session started)\r\n        print("Info:", message.message)\r\n        \r\n    elseif message.level == "debug" then\r\n        -- Detailed operation info\r\n        print("Debug:", message.message)\r\n        \r\n    elseif message.level == "trace" then\r\n        -- Very detailed debugging info\r\n        print("Trace:", message.message)\r\n    end\r\nend\n'})}),"\n",(0,a.jsx)(n.h2,{id:"development-mode",children:"Development Mode"}),"\n",(0,a.jsx)(n.p,{children:"You often want more detailed logs in Studio:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local RunService = game:GetService("RunService")\r\n\r\nlocal function createLogger()\r\n    if RunService:IsStudio() then\r\n        -- Show all logs in Studio\r\n        return function(message)\r\n            print(`[Lyra][{message.level}] {message.message}`)\r\n            if message.context then\r\n                print("Context:", message.context)\r\n            end\r\n        end\r\n    else\r\n        -- Only show errors in production\r\n        return function(message)\r\n            if message.level == "error" or message.level == "fatal" then\r\n                warn(`[Lyra] {message.message}`)\r\n            end\r\n        end\r\n    end\r\nend\r\n\r\nlocal store = Lyra.createPlayerStore({\r\n    logCallback = createLogger(),\r\n})\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"The context object often contains useful debugging information like session IDs, keys being operated on, and timing data."})}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/core-concepts",children:"Core Concepts"})," for understanding operations"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/getting-started",children:"Getting Started"})," for basic setup"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(6540);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);