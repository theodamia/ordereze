import { FormGroup, FormControl, ControlLabel, MenuItem, DropdownButton, Checkbox } from 'react-bootstrap'
import Button from '../button/Button'

export default class PageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      publishedOn: '',
      active: '',
      pageType: ''
    };

    this.handleTitleChange       = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePublishedOnChange = this.handlePublishedOnChange.bind(this);
    this.handleActiveChange      = this.handleActiveChange.bind(this);
    this.handlePageTypeChange    = this.handlePageTypeChange.bind(this);
    this.handleSubmit            = this.handleSubmit.bind(this);
  }
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handlePublishedOnChange(e) {
    this.setState({ publishedOn: e.target.value });
  }
  handleActiveChange(e) {
    this.setState({ active: e.target.checked });
  }
  handlePageTypeChange(e) {
    this.setState({ pageType: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    var title       = this.state.title.trim();
    var description = this.state.description.trim();
    var publishedOn = this.state.publishedOn.trim();
    var active      = this.state.active;

    if(!title) {
      return;
    }

    this.props.onPageSubmit({
      title: title,
      description: description,
      publishedOn: publishedOn,
      active: active
    });

    this.setState({
      title: '',
      description: '',
      publishedOn: '',
      active: ''
    });
  }
  render() {
    var pageTypes = [
      {id: "0", type: "Responsive page that shows the Menu"},
      {id: "1", type: "Responsive page for the Events"},
      {id: "2", type: "Responsive page for general content"}];
    return (
      <section id="form">
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <div>
              <ControlLabel className="form__label">Page Title:</ControlLabel>
              <FormControl
                type="text"
                className="form__title"
                placeholder="Write a page title"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
              <ControlLabel className="form__alert">Page Description:</ControlLabel>
              <FormControl
                className="form__description"
                componentClass="textarea"
                placeholder="Write a page description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
              <ControlLabel className="form__alert">Published On:</ControlLabel>
              <FormControl
                className="form__date"
                type="text"
                placeholder="Date of publish"
                value={this.state.date}
                onChange={this.handlePublishedOnChange}
              />
            </div>
            <div>
              <ControlLabel className="form__alert">Active:</ControlLabel>
              <Checkbox
                className="form__active"
                placeholder="Date of publish"
                value={this.state.active}
                onClick={this.handleActiveChange}
              />
              <ControlLabel className="form__alert">Type:</ControlLabel>
              <DropdownButton title="Types" bsStyle="default"  id="dropdown-basic">
                {pageTypes.map(type => (
                  <MenuItem eventKey={type.id} key={type.id} >
                    {_.capitalize(type.type)}
                  </MenuItem>
                ))}
              </DropdownButton>
            </div>
            <Button bsStyle="primary" type="submit" value="Post" text="Add Page" />
          </FormGroup>
        </form>
      </section>
    );
  }
}
