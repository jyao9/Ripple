# Phase 2: Flux Architecture and Project CRUD

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* ProjectsIndex
  - ProjectsIndexItem
* ProjectForm

### Stores
* Project

### Actions
* ApiActions.receiveAllProjects -> triggered by ApiUtil
* ApiActions.receiveSingleProject -> triggered by ApiUtil
* ProjectActions.fetchAllProjects -> triggers ApiUtil
* ProjectActions.fetchSingleProject -> triggers ApiUtil
* ProjectActions.createProject
* ProjectActions.editProject

### ApiUtil
* ApiUtil.fetchAllProjects
* ApiUtil.fetchSingleProject
* ApiUtil.createProject
* ApiUtil.editProject

## Gems/Libraries
* Flux Dispatcher (npm)
