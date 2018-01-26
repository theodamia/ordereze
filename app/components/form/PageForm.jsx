import { FormGroup, FormControl,
  MenuItem, DropdownButton, Checkbox } from 'react-bootstrap';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import Button from '../button/button';
import { PAGE_TYPES } from '../../constants/index';

export default class PageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      publishedOn: moment(),
      isActive: false,
      type: '',
      typeText: 'Types',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePublishedOnChange = this.handlePublishedOnChange.bind(this);
    this.handleActiveChange = this.handleActiveChange.bind(this);
    this.handlePageTypeChange = this.handlePageTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handlePublishedOnChange(publishedOn) {
    this.setState({ publishedOn });
  }
  handleActiveChange(e) {
    this.setState({ isActive: e.target.checked });
  }
  handlePageTypeChange(pageTypeID) {
    this.setState({ type: pageTypeID });

    switch (pageTypeID) {
      case 0:
        return this.setState({ typeText: PAGE_TYPES[0].type });
      case 1:
        return this.setState({ typeText: PAGE_TYPES[1].type });
      case 2:
        return this.setState({ typeText: PAGE_TYPES[2].type });
      default:
        return this.setState({ typeText: 'Types' });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title.trim();
    const description = this.state.description.trim();
    const { publishedOn } = this.state;
    const { isActive } = this.state;
    const { type } = this.state;

    if (!title) {
      return;
    }

    this.props.onPageSubmit({
      title,
      description,
      publishedOn,
      isActive,
      type,
    });

    this.setState({
      title: '',
      description: '',
      publishedOn: null,
      isActive: false,
      type: '',
      typeText: 'Types',
    });
  }
  render() {
    return (
      <section className="form">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="subtitle">Page Creation Form:</h2>
          </div>
          <div className="col-lg-12">
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormControl
                  type="text"
                  className="form__input"
                  placeholder="Write a page title"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
                <Datetime
                  className="form__input"
                  inputProps={{ placeholder: 'Click to select date of publish' }}
                  value={this.state.publishedOn}
                  onChange={this.handlePublishedOnChange}
                  dateFormat="YYYY-MM-DD"
                  closeOnSelect
                />
                <FormControl
                  className="form__input "
                  componentClass="textarea"
                  placeholder="Write a page description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
                <label htmlFor="isActive" className="input__label">Active:
                  <Checkbox
                    inline
                    id="isActive"
                    className="form__input form__input--active"
                    checked={this.state.isActive}
                    onClick={this.handleActiveChange}
                  />
                </label>
                <div>
                  <label htmlFor="dropdown-basic" className="input__label">Page type:
                    <DropdownButton title={this.state.typeText} bsStyle="default" id="dropdown-basic">
                      {PAGE_TYPES.map(type => (
                        <MenuItem eventKey={type.id} key={type.id} onSelect={this.handlePageTypeChange}>
                          {_.capitalize(type.type)}
                        </MenuItem>
                          ))}
                    </DropdownButton>
                  </label>
                </div>
              </FormGroup>
              <div className="button-wrapper">
                <Button type="submit" text="Add Page" />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

PageForm.propTypes = {
  onPageSubmit: PropTypes.func,
};
