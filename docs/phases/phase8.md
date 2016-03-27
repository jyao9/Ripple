# Phase 8: Add comments (extra)

## Rails
### Models
* Comment

### Controllers
* CommentsController (create, destroy)

### Views

## Flux
### Views (React Components)
* CommentsIndex
  - CommentIndexItem
* CommentForm

### Stores
* Comments

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.createComment

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.createComment
* ApiUtil.deleteComment

## Gems/Libraries
