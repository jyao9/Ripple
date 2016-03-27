# Flux Stores

### ProjectStore

Holds all persisted project data.

##### Actions:
- `receiveAllProjects`
- `receiveSingleProject`
- `editProject`

##### Listeners:
- `ProjectsIndex` (passes to `ProjectIndexItem` via props)


### ProjectFormStore

Holds un-persisted note data to send to the API.

##### Actions:
- `receiveProjectFormParams`

##### Listeners:
- `ProjectForm`

### RewardStore

Holds all persisted reward data.

##### Actions:
- `receiveAllRewards`
- `createReward`

##### Listeners:
- `RewardIndex`

### NotebookFormStore

Holds un-persisted notebook data to send to the API.

##### Actions:
- `receiveRewardFormParams`

##### Listeners:
- `RewardForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
