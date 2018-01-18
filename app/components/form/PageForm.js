import { FormGroup, FormControl, ControlLabel,
  MenuItem, DropdownButton, Checkbox } from 'react-bootstrap'
import Button from '../button/Button'
// import moment from 'moment'
import DatePicker from 'react-datepicker';

export default class PageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      publishedOn: null,
      active: false,
      type: '',
      typeText: 'Types'
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
  handlePageTypeChange(pageTypeID, typeText) {
    this.setState({
      type: pageTypeID
    });

    if(pageTypeID == 0) {
      this.setState({ typeText: 'Responsive page that shows the Menu'});
    } else if (pageTypeID == 1) {
      this.setState({ typeText: 'Responsive page for the Events' });
    } else if (pageTypeID == 2) {
      this.setState({ typeText: 'Responsive page for general content' });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    var title       = this.state.title.trim();
    var description = this.state.description.trim();
    var publishedOn = this.state.publishedOn;
    var active      = this.state.active;
    var type        = this.state.type;
    var typeText  = this.state.typeText;

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
      publishedOn: null,
      active: false,
      type: '',
      typeText:'Types'
    });
  }
  render() {
    var pageTypes = [
      {id: "0", type: "Responsive page that shows the Menu"},
      {id: "1", type: "Responsive page for the Events"},
      {id: "2", type: "Responsive page for general content"}];
    return (
      <section className="form">
        <div className="row">
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
                      selected={this.state.publishedOn}
                      onChange={this.handlePublishedOnChange}
                      dateFormat="YYYY/MM/DD"
                      showTimeSelect
                      timeFormat="HH:mm"
                    />
                    <FormControl
                      className="form__input "
                      componentClass="textarea"
                      placeholder="Write a page description"
                      value={this.state.description}
                      onChange={this.handleDescriptionChange}
                    />
                    <label className="input__label">Active:</label>
                    <Checkbox
                      inline
                      className="form__input form__input--active"
                      checked={this.state.active}
                      onClick={this.handleActiveChange}
                    />
                    <div>
                      <label className="input__label input__label--pageType">Page type:</label>
                      <DropdownButton title={this.state.typeText} bsStyle="default" id="dropdown-basic">
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
        </div>
      </section>
    );
  }
}
