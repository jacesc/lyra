"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[558],{3245:e=>{e.exports=JSON.parse('{"functions":[{"name":"createStore","desc":"Creates a new Store with the given configuration.\\n\\n```lua\\nlocal store = Store.createStore({\\n\\tname = \\"PlayerData\\",\\n\\ttemplate = { coins = 0 },\\n\\tschema = function(data)\\n\\t\\treturn type(data.coins) == \\"number\\", \\"coins must be a number\\"\\n\\tend,\\n\\t\\n\\t-- Optional: Runs whenever data changes\\n\\tchangedCallbacks = {\\n\\t\\tfunction(key, newData, oldData)\\n\\t\\t\\tprint(key, \\"changed from\\", oldData.coins, \\"to\\", newData.coins)\\n\\t\\tend,\\n\\t},\\n\\n\\t-- Optional: Called if lock is lost during session\\n\\tonLockLost = function(key)\\n\\t\\twarn(\\"Lost lock for\\", key)\\n\\tend,\\n})\\n```\\n\\n:::caution\\nIf schema validation fails at any point, operations will be rejected with the error message.\\n:::","params":[{"name":"config","desc":"Configuration for the store","lua_type":"StoreConfig<T>"}],"returns":[{"desc":"","lua_type":"Store<T>"}],"function_type":"static","source":{"line":214,"path":"src/Store.luau"}},{"name":"_processOrphanedFile","desc":"Processes an orphaned file in the store\'s queue.","params":[{"name":"item","desc":"","lua_type":"Types.OrphanedFileQueueItem"}],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"method","private":true,"source":{"line":303,"path":"src/Store.luau"}},{"name":"load","desc":"Loads data for the given key into memory and establishes a session.\\nMust be called before using any other methods with this key.\\n\\n```lua\\nstore:load(\\"player_1\\"):andThen(function()\\n\\tprint(\\"Data loaded!\\")\\nend):catch(function(err)\\n\\twarn(\\"Failed to load:\\", err)\\nend)\\n```","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"userIds","desc":"","lua_type":"{ number }?"}],"returns":[{"desc":"Resolves when data is loaded","lua_type":"Promise"}],"function_type":"method","errors":[{"lua_type":"\\"Load already in progress\\"","desc":"Another load is already in progress for this key"},{"lua_type":"\\"Store is closed\\"","desc":"The store has been closed"}],"source":{"line":372,"path":"src/Store.luau"}},{"name":"loadAsync","desc":"Syntactic sugar for `store:load(key):expect()`.\\n\\nSee [Store:load]","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"userIds","desc":"","lua_type":"{ number }?"}],"returns":[],"function_type":"method","source":{"line":450,"path":"src/Store.luau"}},{"name":"unload","desc":"Unloads data for the given key from memory and ends the session.\\n\\n```lua\\nstore:unload(\\"player_1\\"):andThen(function()\\n\\tprint(\\"Data unloaded!\\")\\nend)\\n```","params":[{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"Resolves when data is unloaded","lua_type":"Promise"}],"function_type":"method","errors":[{"lua_type":"\\"Store is closed\\"","desc":"The store has been closed"}],"source":{"line":467,"path":"src/Store.luau"}},{"name":"unloadAsync","desc":"Syntactic sugar for `store:unload(key):expect()`.\\n\\nSee [Store:unload]","params":[{"name":"key","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","source":{"line":509,"path":"src/Store.luau"}},{"name":"_withSession","desc":"Internal helper to manage sessions.","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"callback","desc":"","lua_type":"(session: Session.Session<any>) -> any"}],"returns":[{"desc":"Resolves with the result of the callback","lua_type":"Promise"}],"function_type":"method","private":true,"source":{"line":520,"path":"src/Store.luau"}},{"name":"_getKeyInfo","desc":"Returns the DataStoreKeyInfo associated with the given key, if available.","params":[{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"Resolves with the key info, or nil if not available","lua_type":"Promise<DataStoreKeyInfo?>"}],"function_type":"method","private":true,"source":{"line":564,"path":"src/Store.luau"}},{"name":"get","desc":"Gets the current data for the given key.\\n\\n```lua\\nstore:get(\\"player_1\\"):andThen(function(data)\\n\\tprint(\\"Current coins:\\", data.coins)\\nend):catch(function(err)\\n\\twarn(\\"Failed to get data:\\", err)\\nend)\\n```","params":[{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"Resolves with the current data","lua_type":"Promise<T>"}],"function_type":"method","errors":[{"lua_type":"\\"Key not loaded\\"","desc":"The key hasn\'t been loaded with store:load()"},{"lua_type":"\\"Store is closed\\"","desc":"The store has been closed"}],"source":{"line":586,"path":"src/Store.luau"}},{"name":"getAsync","desc":"Syntactic sugar for `store:get(key):expect()`.\\n\\nSee [Store:get]","params":[{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"T\\n"}],"function_type":"method","source":{"line":599,"path":"src/Store.luau"}},{"name":"update","desc":"Updates data for the given key using a transform function.\\nThe transform function receives the current data and can modify it.\\nMust return true to commit changes, or false to abort.\\n\\n```lua\\nstore:update(\\"player_1\\", function(data)\\n\\tif data.coins < 100 then\\n\\t\\tdata.coins += 50\\n\\t\\treturn true -- Commit changes\\n\\tend\\n\\treturn false -- Don\'t commit changes\\nend):andThen(function()\\n\\tprint(\\"Update successful!\\")\\nend):catch(function(err)\\n\\twarn(\\"Update failed:\\", err)\\nend)\\n```","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"transformFunction","desc":"","lua_type":"(data: T) -> boolean"}],"returns":[{"desc":"Resolves when the update is complete, with a boolean indicating success","lua_type":"Promise<boolean>"}],"function_type":"method","errors":[{"lua_type":"\\"Key not loaded\\"","desc":"The key hasn\'t been loaded with store:load()"},{"lua_type":"\\"Store is closed\\"","desc":"The store has been closed"},{"lua_type":"\\"Schema validation failed\\"","desc":"The transformed data failed schema validation"}],"source":{"line":628,"path":"src/Store.luau"}},{"name":"updateAsync","desc":"Syntactic sugar for `store:update(key, transformFunction):expect()`.\\n\\nSee [Store:update]","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"transformFunction","desc":"","lua_type":"(data: T) -> boolean"}],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"method","source":{"line":642,"path":"src/Store.luau"}},{"name":"tx","desc":"Performs a transaction across multiple keys atomically.\\nAll keys must be loaded first. Either all changes are applied, or none are.\\n\\n```lua\\nstore:tx({\\"player_1\\", \\"player_2\\"}, function(state)\\n\\t-- Transfer coins between players\\n\\tif state.player_1.coins >= 100 then\\n\\t\\tstate.player_1.coins -= 100\\n\\t\\tstate.player_2.coins += 100\\n\\t\\treturn true -- Commit transaction\\n\\tend\\n\\treturn false -- Abort transaction\\nend):andThen(function()\\n\\tprint(\\"Transaction successful!\\")\\nend):catch(function(err)\\n\\twarn(\\"Transaction failed:\\", err)\\nend)\\n```","params":[{"name":"keys","desc":"","lua_type":"{ string }"},{"name":"transformFunction","desc":"","lua_type":"(state: { [string]: T }) -> boolean"}],"returns":[{"desc":"Resolves when the transaction is complete","lua_type":"Promise"}],"function_type":"method","errors":[{"lua_type":"\\"Key not loaded\\"","desc":"One or more keys haven\'t been loaded"},{"lua_type":"\\"Store is closed\\"","desc":"The store has been closed"},{"lua_type":"\\"Schema validation failed\\"","desc":"The transformed data failed schema validation"},{"lua_type":"\\"Keys changed in transaction\\"","desc":"The transform function modified the keys table"}],"source":{"line":673,"path":"src/Store.luau"}},{"name":"txAsync","desc":"Syntactic sugar for `store:tx(keys, transformFunction):expect()`.\\n\\nSee [Store:tx]","params":[{"name":"keys","desc":"","lua_type":"{ string }"},{"name":"transformFunction","desc":"","lua_type":"(state: { [string]: T }) -> boolean"}],"returns":[],"function_type":"method","source":{"line":888,"path":"src/Store.luau"}},{"name":"save","desc":"Forces an immediate save of the given key\'s data.\\n\\n:::info\\nData is automatically saved periodically, so manual saves are usually only useful in scenarios where you need to guarantee data has saved, such as ProcessReceipt.\\n:::","params":[{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"Resolves when the save is complete","lua_type":"Promise"}],"function_type":"method","errors":[{"lua_type":"\\"Key not loaded\\"","desc":"The key hasn\'t been loaded with store:load()"},{"lua_type":"\\"Store is closed\\"","desc":"The store has been closed"}],"source":{"line":904,"path":"src/Store.luau"}},{"name":"saveAsync","desc":"Syntactic sugar for `store:save(key):expect()`.\\n\\nSee [Store:save]","params":[{"name":"key","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","source":{"line":917,"path":"src/Store.luau"}},{"name":"close","desc":"Closes the store and unloads all active sessions.\\nThe store cannot be used after closing","params":[],"returns":[{"desc":"Resolves when the store is closed","lua_type":"Promise"}],"function_type":"method","source":{"line":928,"path":"src/Store.luau"}},{"name":"closeAsync","desc":"Syntactic sugar for `store:close():expect()`.\\n\\nSee [Store:close]","params":[],"returns":[],"function_type":"method","source":{"line":970,"path":"src/Store.luau"}},{"name":"probeLockActive","desc":"Checks if a lock is currently active for the given key.","params":[{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":980,"path":"src/Store.luau"}},{"name":"probeLockActiveAsync","desc":"Syntactic sugar for `store:probeLockActive(key):expect()`.\\n\\nSee [Store:probeLockActive]","params":[{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"method","source":{"line":992,"path":"src/Store.luau"}},{"name":"listVersions","desc":"Returns DataStoreVersionPages for the given key.","params":[{"name":"params","desc":"","lua_type":"ListVersionParams"}],"returns":[{"desc":"","lua_type":"Promise<DataStoreVersionPages>"}],"function_type":"method","source":{"line":1002,"path":"src/Store.luau"}},{"name":"listVersionsAsync","desc":"Syntactic sugar for `store:listVersions(params):expect()`.\\n\\nSee [Store:listVersions]","params":[{"name":"params","desc":"","lua_type":"ListVersionParams"}],"returns":[{"desc":"","lua_type":"DataStoreVersionPages\\n"}],"function_type":"method","source":{"line":1019,"path":"src/Store.luau"}},{"name":"readVersion","desc":"Reads a specific version of data for the given key.","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"version","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Promise<T, DataStoreKeyInfo>"}],"function_type":"method","source":{"line":1029,"path":"src/Store.luau"}},{"name":"readVersionAsync","desc":"Syntactic sugar for `store:readVersion(key, version):expect()`.\\n\\nSee [Store:readVersion]","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"version","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"T"},{"desc":"","lua_type":"DataStoreKeyInfo"}],"function_type":"method","source":{"line":1059,"path":"src/Store.luau"}}],"properties":[],"types":[{"name":"StoreConfig","desc":"Configuration for creating a new Store.\\n\\n\\nExample usage:\\n```lua\\nlocal config: StoreConfig<PlayerData> = {\\n\\tname = \\"PlayerData\\",\\n\\ttemplate = {\\n\\t\\tcoins = 0,\\n\\t\\titems = {},\\n\\t},\\n\\tschema = function(value)\\n\\t\\treturn type(value.coins) == \\"number\\", \\"coins must be a number\\"\\n\\tend,\\n}\\n```","fields":[{"name":"name","lua_type":"string","desc":"Name of the store"},{"name":"template","lua_type":"T","desc":"Template/default value for new data"},{"name":"schema","lua_type":"(value: any) -> (boolean, string?)","desc":"Validates data format"},{"name":"migrationSteps?","lua_type":"{ MigrationStep }","desc":"Steps to migrate old data formats"},{"name":"importLegacyData?","lua_type":"(key: string) -> any?","desc":"Function to import legacy data"},{"name":"dataStoreService?","lua_type":"DataStoreService","desc":"Custom DataStore implementation"},{"name":"useMock?","lua_type":"boolean","desc":"Use mock DataStore (Studio only)"},{"name":"changedCallbacks?","lua_type":"{ (key: string, newData: T, oldData: T?) -> () -> () }","desc":"Run when data changes"},{"name":"logCallback?","lua_type":"(logMessage: LogMessage) -> ()","desc":"Custom logging function"},{"name":"onLockLost?","lua_type":"(key: string) -> ()","desc":"Called if DataStore lock is lost"}],"source":{"line":92,"path":"src/Store.luau"}}],"name":"Store","desc":"A Store coordinates Sessions and provides a safe way to interact with persistent data.\\n\\n```lua\\nlocal store = Store.createStore({\\n\\tname = \\"PlayerData\\",\\n\\ttemplate = {\\n\\t\\tcoins = 0,\\n\\t\\titems = {},\\n\\t},\\n\\tschema = function(data)\\n\\t\\treturn type(data.coins) == \\"number\\" and type(data.items) == \\"table\\", \\n\\t\\t\\"Invalid data format\\"\\n\\tend,\\n})\\n\\n-- Load data for a player\\nstore:load(\\"player_1\\"):andThen(function()\\n\\t-- Get current data\\n\\treturn store:get(\\"player_1\\")\\nend):andThen(function(data)\\n\\tprint(data.coins) -- 0\\n\\t\\n\\t-- Update data\\n\\treturn store:update(\\"player_1\\", function(data)\\n\\t\\tdata.coins += 100\\n\\t\\treturn true -- Must return true to commit changes\\n\\tend)\\nend)\\n```","source":{"line":36,"path":"src/Store.luau"}}')}}]);