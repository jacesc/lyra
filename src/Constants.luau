--!strict

local INTERNAL_SPACE_RESERVE_BYTES = 10_000

local Constants = {
	RECORD_SCOPE = "lyra/records",
	TX_SCOPE = "lyra/tx",
	SHARD_SCOPE = "lyra/shards",
	LOCK_SCOPE = "lyra/locks",
	MAX_CHUNK_SIZE = 4_000_000 - INTERNAL_SPACE_RESERVE_BYTES,
	LOCK_REFRESH_INTERVAL_SECONDS = 60,
	LOCK_DURATION_SECONDS = 90,
	LOCK_ACQUIRE_ATTEMPTS = 8,
	AUTOSAVE_INTERVAL_SECONDS = 5 * 60,
}

return Constants
