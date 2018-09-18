import React from 'react';
import HeaderC from '../header_container';
import LoadingSpinner from '../util/loading_spinner';

class Setup1Class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: true,
      chosen: false
    };
    this.menuDrop = this.menuDrop.bind(this);
    this.submitCategory = this.submitCategory.bind(this);
    this.categories = this.props.categories;
  }

  submitCategory (e) {
    this.props.receiveCurrentProjectProps({category_id: parseInt(e.target.id)});
    this.setState({chosen: true});
    this.menuDrop();
  }

  menuDrop () {
    this.setState({hidden: !this.state.hidden});
  }

  componentDidMount() {
    this.props.fetchCategoryIndex();
  }

  componentWillReceiveProps (nextProps) {
    if (this.categories.length !== Object.values(nextProps.categories).length) {
      this.categories = nextProps.categories;
    }
  }

  buttonText () {
    if (this.categories[this.props.tempPrjProps.category_id]) {
      return this.categories[this.props.tempPrjProps.category_id].name;
    } else {
      return "Select your category";
    }
  }

  conditionalMenuDrop () {
    if (!this.state.hidden) {
      this.menuDrop();
    }
  }

  render () {
    if (this.categories.length === 0) {
      return <LoadingSpinner/>;
    }
    return (
      <div>
        <HeaderC/>
        <div className='setup-wrapper' onClick={this.conditionalMenuDrop.bind(this)}>
          <div className="pg-counter">
            <p >1 of 3</p>
          </div>
          <section className='setup-form'>
            <h2>First, let’s get you set up.</h2>
            <h4>Pick a project category to connect with a specific community. You can always update this later.</h4>
            <button
              id='category-button'
              onClick={this.menuDrop}
              className={`${this.state.hidden ? '' : 'black-border'} ddm-button`}
            >
              <p
                id='button-text'
                className={`button-text ${this.props.tempPrjProps.category_id ? 'black-text' : ''}`}>
                {this.buttonText()}</p>
              <i className="fa fa-caret-down" id="button-arrow"></i>
            </button>
            <ul className={this.state.hidden ? 'hidden' : 'drop-down'} id="ddm">
              {
                Object.values(this.categories).map((category, idx) => {
                  if (this.props.tempPrjProps.category_id === category.id) {
                    return <li
                      key={idx}
                      id={category.id}
                      className={'pre-selected'}
                      onClick={
                        this.submitCategory
                      }
                      >
                      <p>{category.name}</p><i className="fa fa-check-circle" id="check"></i></li>;
                  } else {
                    return <li
                      key={idx}
                      id={category.id}
                      onClick={
                        this.submitCategory
                      }
                      >
                      <p>{category.name}</p></li>;
                  }
                })
              }
            </ul>
            <section className='bottom-section'>
              <p>You’re back. This is major.</p>
              <a
                id='next-step'
                href={this.props.tempPrjProps.category_id ? '#/setup/2' : null}
                className={this.props.tempPrjProps.category_id ? 'active' : null}
              >Next: Project Idea
              </a>
            </section>
            <p>To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.</p>
          </section>
        </div>
      </div>
    );
  }
}

export default Setup1Class;
