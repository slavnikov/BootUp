![alt text](https://raw.githubusercontent.com/slavnikov/BootUp/master/app/assets/images/logo.jpg "BootUp Logo")

BootUp is a functional clone of the Kickstarter website. It is designed to allow content creators to apply for crowdfunding directly from their potential customer: instead of raising venture capital and lunching a product on the hope of generating interest, people with ideas can pitch them to the world and get funded ahead of even making their product. 

Creators can initiate projects and offer rewards to users who back them. Users can browse and discover different initiatives that might interest them, and use their money to back the products or caues which they would like to see come to pass. This model allows passion and dedication, not promise of profitability, to support the creation of new and innovative products and see the funding of initiatives which would otherwise die in a bank's loan office.

[Visit the Live BootUp App Now!](https://boot-up-fullstack.herokuapp.com/#/)

---



# Technologies Used

### Ruby on Rails

The backend of the BootUp app is built on the Ruby on Rails framework. Rails starts by managing the routing of http requests to the app's API. It is then also responsible for analyzing those requests, and responding with appropriate data from the Postgresql database.

The Rails ActiveRecord class is already optimized for handling requests for linked resources and so minimizing the number of actual calls to the databse. In the case of BootUp, it allows a single line of code to fetch an index of completed projects along with associated creators, backings, and linked image blobs with a single call to the databse. 

```ruby
Project.with_attached_image.where(complete: true).includes('admin', 'backings')
```

### Redux

The redux 'single source of truth' model ensures that all data coming back from the Rails backend is maintained in a single frontend store. As a user interacts with the application, the interactions set of actions which are pre-built to modify specific data. 

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
...and these modifications to the store state are then distriuted as properties (props) to the page components which display them.
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
The great benefit of sending all data to a single place and then disseminating the data to different components greatly reduces instances of conflicting data persisting in different components when modified in one but not the other and confines all data receit logic to a handful of files. 

### React
The React library supplies the tools for automated re-rendering of pages upon information update. It also allows for very syntactically simple modular page design with heirarchical rendering and child components within the parent. As user interacts with the app, the effects of those interactions are logged as changes in the state of a given component (or possibly the Redux store that passes the changes along to the React component) and the page reacts (see what I did there) to the changes by re-rendering itself or its child components which are affected by the change.
The overall modular structore of React components is made up of a Redux store connected parent rendering children to which it passes the store's information as properties upon rendering.
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
