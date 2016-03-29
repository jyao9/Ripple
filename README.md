# Ripple

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Ripple is a web application inspired by KickStarter built using Ruby on Rails and React.js. Ripple allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, edit, and view projects
- [ ] Create rewards for projects
- [ ] Fund/select rewards from projects
- [ ] Search for projects by category or name
- [ ] Click on project icon to see the details about that specific project

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Projects Model, API, and basic APIUtil (1.5 days)

**Objective:** Projects can be created, viewed and edited through the API

- [X] create new project
- [X] create `Project` model
- [X] seed the database with a small amount of test data
- [X] CRUD API for projects (`ProjectsController`)
- [X] jBuilder views for projects
- [X] setup Webpack & Flux scaffold
- [X] setup `APIUtil` to interact with the API
- [X] test out API interaction in the console

### Phase 2: Flux Architecture and Router (2 days)

**Objective:** Projects can be created, read, edited and destroyed through user interface

- [X] setup the flux loop with skeleton files
- [X] setup React Router
- implement each project component, building out the flux loop as needed
  - [X] `ProjectsIndex`
  - [X] `ProjectIndexItem`
  - [ ] `NavBar`
  - [ ] `ProjectForm`
- [ ] save Projects to the DB when the form is submitted

### Phase 3: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] redirect to projects index page after signup/signin

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Rewards (2 days)

**Objective:** Rewards belong to Projects, and can be viewed by project.

- [ ] create `Reward` model
- build out API, Flux loop, and components for:
  - [ ] Reward CRUD
  - [ ] adding rewards requires a project
  - [ ] viewing rewards by project
- [ ] use CSS to style new views
- [ ] pop up on screen when reward is clicked
- [ ] reward amount gets added to project status
- [ ] update project index page of that reward

### Phase 6: Navigation Bar (0.5 day)
- [ ] add real time search to projects index page
- [ ] search through projects for specific words
- [ ] projects index page will render matching projects
- [ ] update project index component based on nav bar
- [ ] add handleChange function to project index component

### Phase 7: Allow Complex Styling in Notes (0.5 days)

**objective:** Enable complex styling of notes.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Users can comment on projects they have funded
- [ ] Create account page for user showing projects they have backed
- [ ] Add category index items to project index page
  - [ ] Category index items render projects with that category
- [ ] See how much projects have been funded thus far via project icon


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
[phase-eight]: ./docs/phases/phase8.md
