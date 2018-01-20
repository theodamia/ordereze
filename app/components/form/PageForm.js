import { FormGroup, FormControl, ControlLabel,
  MenuItem, DropdownButton, Checkbox } from 'react-bootstrap'
import Button from '../button/Button'
import moment from 'moment'
import DatePicker from 'react-datepicker';
import Datetime from 'react-datetime';

export default class PageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      publishedOn: moment(),
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
  }
  handlePageTypeChange(pageTypeID) {
    this.setState({ type: pageTypeID });

    switch (pageTypeID) {
      case '0':
        return this.setState({ typeText: this.props.pageTypes[0].type});
        break;
      case '1':
        return this.setState({ typeText: this.props.pageTypes[1].type });
        break;
      case '2':
         return this.setState({ typeText: this.props.pageTypes[2].type });
        break;
      default:
        return this.setState({ typeText: 'Types' });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    var title       = this.state.title.trim();
    var description = this.state.description.trim();
    var publishedOn = this.state.publishedOn;
    var active      = this.state.active;
    var type        = this.state.type;
    var typeText    = this.state.typeText;

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
                    <Datetime
                      className="form__input"
                      inputProps={{ placeholder: 'Click to select date of publish' }}
                      value={this.state.publishedOn}
                      onChange={this.handlePublishedOnChange}
                      dateFormat="YYYY-MM-DD"
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
                        {this.props.pageTypes.map(type => (
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
