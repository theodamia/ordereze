import { FormGroup, FormControl, ControlLabel,
  MenuItem, DropdownButton, Checkbox } from 'react-bootstrap'
import Button from '../button/Button'
import moment from 'moment'
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

export default class PageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      publishedOn: null,
      active: '',
      type: ''
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
  handlePublishedOnChange(publishedOn) {
    this.setState({ publishedOn: publishedOn });
  }
  handleActiveChange(e) {
    this.setState({ active: e.target.checked });
    console.log(e.target.checked);
  }
  handlePageTypeChange(pageTypeID) {
    this.setState({ type: pageTypeID});
    console.log(pageTypeID);
  }
  handleSubmit(e) {
    e.preventDefault();
    var title       = this.state.title.trim();
    var description = this.state.description.trim();
    var publishedOn = this.state.publishedOn;
    var active      = this.state.active;
    var type        = this.state.type;

    if(!title) {
      return;
    }

    this.props.onPageSubmit({
      title: title,
      description: description,
      publishedOn: publishedOn,
      active: active,
      type: type
    });

    this.setState({
      title: '',
      description: '',
      publishedOn: '',
      active: '',
      type: ''
    });
  }
  render() {
    var pageTypes = [
      {id: "0", type: "Responsive page that shows the Menu"},
      {id: "1", type: "Responsive page for the Events"},
      {id: "2", type: "Responsive page for general content"}];
    return (
      <section className="form row">
          <form onSubmit={this.handleSubmit}>
            <div className="col-lg-12">
              <h2 className="subtitle">Page Creation Form:</h2>
            </div>
            <div className="col-lg-12">
              <FormGroup>
                <div className="row">
                  <div className="col-lg-6">
                    <FormControl
                      type="text"
                      className="form__input"
                      placeholder="Write a page title"
                      value={this.state.title}
                      onChange={this.handleTitleChange}
                    />
                    <DatePicker
                      className="form-control form__input form__input--datepicker"
                      placeholderText="Click to select date of publish"
                      showTimeSelect
                      selected={this.state.publishedOn}
                      onChange={this.handlePublishedOnChange}
                      dateFormat="YYYY/MM/DD"
                    />
                    <FormControl
                      className="form__input "
                      componentClass="textarea"
                      placeholder="Write a page description"
                      value={this.state.description}
                      onChange={this.handleDescriptionChange}
                    />
                    <label className="form__label">Active:</label>
                    <Checkbox
                      inline
                      className="form__input form__input--active"
                      value={this.state.active}
                      onClick={this.handleActiveChange}
                    />
                    <div>
                      <label className="form__label form__label--pageType">Page type:</label>
                      <DropdownButton title="Types" bsStyle="default" id="dropdown-basic">
                        {pageTypes.map(type => (
                          <MenuItem eventKey={type.id} key={type.id} onSelect={this.handlePageTypeChange}>
                            {_.capitalize(type.type)}
                          </MenuItem>
                        ))}
                      </DropdownButton>
                    </div>
                  </div>
                </div>
              </FormGroup>
              <Button bsStyle="primary" type="submit" value="Post" text="Add Page" />
            </div>
        </form>
      </section>
    );
  }
}
