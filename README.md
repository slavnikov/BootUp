![alt text](/app/assets/images/logo.jpg "BootUp Logo")

BootUp is a web application inspired by Kickstarter. It is designed to allow content creators to apply for crowdfunding directly from their potential customer: instead of raising venture capital and launching a product on the hope of generating interest, people with ideas can pitch them to the world and get funded ahead of even making their product.

Creators can initiate projects and offer rewards to users who back them. Users can browse and discover different initiatives that might interest them, and use their money to back the products or cause which they would like to see come to pass. This model allows passion and dedication, not promise of profitability, to support the creation of new and innovative products and see the funding of initiatives which would otherwise die in a bank's loan office.

[Visit the Live BootUp App Now!](https://boot-up-fullstack.herokuapp.com/#/)

---



# Technologies Used

### Ruby on Rails

The backend of the BootUp app is built on the Ruby on Rails framework. Rails starts by managing the routing of http requests to the app's API. It is then also responsible for analyzing those requests, and responding with appropriate data from the Postgresql database.

The Rails ActiveRecord class is already optimized for handling requests for linked resources and so minimizing the number of actual calls to the database. In the case of BootUp, it allows a single line of code to fetch an index of completed projects along with associated creators, backings, and linked image blobs with a single call to the database.

```ruby
Project.with_attached_image.where(complete: true).includes('admin', 'backings')
```

### Redux

The Redux 'single source of truth' model ensures that all data coming back from the Rails backend is maintained in a single frontend store. As a user interacts with the application, the interactions set of actions which are pre-built to modify specific data.

These actions are caught and parsed to modify the state of the store ...
```javascript
const ProjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.project.id]: action.payload.project});
    case RECEIVE_PROJECTS:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      return merge({}, state, action.payload.projects);
 ...
```
...and these modifications to the store state are then distributed as properties (props) to the page components which display them.
```javascript
const mapStateToProps = (state) => {
...
  return ({
    ...
    currentUser: state.entities.users[state.session.currentUserId],
    currentProject: state.entities.projects[state.session.currentProjectId],
    ...
    categories: state.entities.categories,
    rewardsArr: rewardsArr,
    projectErrors: state.errors.projectsErrors,
    ...
```
The great benefit of sending all data to a single place and then disseminating the data to different components greatly reduces instances of conflicting data persisting in different components when modified in one but not the other and confines all data receiving logic to a handful of files.

### React
The React library supplies the tools for automated re-rendering of pages upon information update. It also allows for very syntactically simple modular page design with hierarchical rendering and child components within the parent. As user interacts with the app, the effects of those interactions are logged as changes in the state of a given component (or possibly the Redux store that passes the changes along to the React component) and the page reacts (see what I did there) to the changes by re-rendering itself or its child components which are affected by the change.
The overall modular structure of React components is made up of a Redux store connected parent rendering children to which it passes the store's information as properties upon rendering.
```javascript
render () {
    return (
      <div id='rewards-page-wrapper'>
        <HeaderC/> //rendering of an imported child component without passing of properties
        <main className='basics-wrapper'>
          <header>
            <h1>Add your rewards</h1>
            <h2>Offer simple, meaningful rewards that bring backers closer to your project. ...</h2>
          </header>
          <RewardsSubheader
            activateForm={this.activateForm}
          />
          <RewardsListing  //rendering a child compoent with passing of properties
            rewards={this.props.rewardsArr} //passing a property received via parent's store connection
            activateForm={this.activateForm}
            deleteReward={this.props.deleteReward}
            deactivateForm={this.deactivateForm}
            populateState={this.populateState}
          />
          <RewardForm
            formActive={this.state.formActive}
            edit={this.edit}
            name={this.state.name}
            description={this.state.description}
            value={this.state.value}
            delivery_date={this.state.delivery_date}
          />
```
---


# Features

### Delayed Login

One relatively hard to notice feature is the ability for a user to start a project without being signed in or even having an account. This allows users to get their imagination flowing and get them hyped to start a project instead of having them get dissuaded by facing them with a sign up process right off the bat.

The difficulty with implementing this feature was the need to send two asynchronous requests to the server  seemingly at the same time, but having one depend on the response of the first. After a user is done with the first three steps of the project creation process, he or she is asked to log in or sign up. Once they are signed up, they are sent to a page which contains information from the already created project. This last step is where the issue comes in since the creation of the project requires a user's id to be recorded in the database.

To solve this, first the log-in and sign-up pages were put into a conditional AuthRoute which would normally direct users to the homepage, but would direct them to the project setup overview page if the sessions state contained the filled out preliminary project parameters.

```javascript
// /frontend/util/route_util.jsx

const Auth = ({component: Component, path, loggedIn, exact, tempPrjProps}) => {
  return <Route path={path} exact={exact} render={(props) => {
    if (loggedIn && Object.values(tempPrjProps).length === 3) {
      return <Redirect to="/setup/project/overview" />;
    } else if (loggedIn) {
      return <Redirect to="/" />;
    } else {
      return <Component {...props} />;
    }
  }}/>;
};
```

Next the overview page would check if it was being rendered from an already created project, in which it would send a fetch request for the project to the database, or if it was being called for a just started project, in which case it would send a create request to the database with the temporary project parameters in the session state.

```javascript
// /frontend/components/project_forms/new_prj_overview.jsx

componentDidMount () {
  if (this.props.currentUser && Object.values(this.props.tempPrjProps).length === 3) {
    this.props.createProject(merge(this.props.tempPrjProps, {admin_id: this.props.currentUser.id}));
  } else if (this.props.currentProjectId) {
    this.props.fetchProject(this.props.currentProjectId);
  }
  this.props.fetchCategoryIndex();
}
```

Since the page could potentially be called for a project that had not been created yet and had no id, this project page could not rely on a wildcard value in the url to identify the project being worked on. Instead, the session slice of the state was made to contain a current project id which would be bootstrapped to the page along with the current user id to allow for maintenance of state upon page reload.

```ruby
# /app/views/static_pages.html.erb

<% if logged_in? %>
  <script type="text/javascript">
    window.current_user = <%= render('api/users/user.json.jbuilder', user: current_user).html_safe %>;
    window.projects = <%= render('api/projects/index.json.jbuilder', projects: current_user.projects).html_safe %>;
    <% if current_user.current_project_id %>
      window.current_project = <%= render('api/projects/project.json.jbuilder', project: Project.find_by(id: current_user.current_project_id)).html_safe %>
      window.current_project_id = <%= current_user.current_project_id %>;
    <% else %>
      window.current_project = {};
    <% end %>
  </script>
<% end %>
```

### Intuitive Validations

Because projects on BootUp can take a long time to complete, and it would not be unusual for users to take more than one day to work on them, it would be inefficient to handle the validation for project completeness via a call to the database. If that was a requirement, the implication would be that a project has to be completed in a single sitting.

Instead of posting error messages about missing project parameters, users are allowed to fill out the forms partially and get intuitive feedback on the project overview page about whether they are done with a particular section.

![alt text](/app/assets/images/screengrabs/validations.jpg "Intuitive Validations")

This is handled by conditional React rendering. A separate method takes in a set of parameters that it checks for completion with the current project.

```javascript
// /frontend/components/project_forms/new_prj_overview.jsx

checkForCompleteness (prj_params, idx) {
  const all_done = prj_params.every((param) => {
    return this.props.currentProject[param];
  });
  let completeClass = "";

  if (all_done) {
    this.completeCount[idx] = true;
    completeClass = "nav-item-complete"
  }

  return <i className=`fa fa-check ${completeClass}`></i>;
}
```

It also modifies an object in the page's local state with indices of each of the pages when they are complete. This part of the local state is then read to determine whether the submit button should be displayed at the bottom of the page.

```javascript
// /frontend/components/project_forms/new_prj_overview.jsx

submitButton () {
  if ([1,2,3].every(idx => return this.completeCount[idx])) {
    return <Link to ={`/project/${this.props.currentProject.id}`} onClick={() => {return this.props.submitProject(this.props.currentProject.id);}}>Submit Project</Link>;
  } else {
    return null;
  }
}
```

Since the project has already been created in the database and has simply been being updated by the completeness of the different forms, the project submit button sends an update request that modifies the complete field in the project's database row which marks it available for being displayed on the homepage or coming back as a search result for the public.
