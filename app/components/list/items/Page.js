import ListGroupItem from 'react-bootstrap/lib/ListGroupItem.js'
import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap'
import Datetime from 'react-datetime';
import moment from 'moment'

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      publishedOn: moment()
    }
  }
  render() {
    const { page } = this.props
    var pageTypes  = this.props.pageTypes;
    return(
      <div className="col-lg-4">
      <ListGroupItem className="list-item__horizontal">
        <div className="list-item__component">
          <input
            className="form-control"
            type="text"
            defaultValue={page.title}
            onBlur={(e) => {this.props.onPageUpdate(e, page, "title")}}
          />
        </div>
        <div className="list-item__component">
          <textarea
            className="form-control"
            type="text"
            defaultValue={page.description}
            onBlur={(e) => {this.props.onPageUpdate(e, page, "description")}}
          />
        </div>
        <div className="list-item__component">
          <Datetime
            className="form__input"
            inputProps={{ placeholder: 'Click to select date of publish' }}
            defaultValue={page.publishedOn}
            onChange={(e) => {this.props.onPageUpdate(e, page, "publishedOn")}}
            dateFormat="YYYY-MM-DD"
          />
        </div>
        <div className="list-item__component">
          <label className="input__label">Active:</label>
          <Checkbox
            inline
            className="list-item__input--active"
            defaultChecked={page.isActive}
            onClick={(e) => {this.props.onPageUpdate(e, page, "isActive")}}
          />
        </div>
        <div className="list-item__component">
          <label className="input__label input__label--pageType">Page type:</label>
          <DropdownButton
            title={page.type == 0 ? pageTypes[0].type : (page.type == 1 ? pageTypes[1].type : pageTypes[2].type) }
            bsStyle="default"
            id="dropdown-basic">
            {pageTypes.map(type => (
              <MenuItem eventKey={type.id} key={type.id} onSelect={(e) => {this.props.onPageUpdate(e, page, "pageType", type.id)}}>
                {_.capitalize(type.type)}
              </MenuItem>
            ))}
          </DropdownButton>
        </div>
        <div className="list-item__component list-item__component--icons">
          <i className="fa fa-trash fa-2x fa-fw"
            value="Delete"
            title="Delete"
            onClick={() => {this.props.handlePageDelete(page.id)}}></i>
        </div>
      </ListGroupItem>
      </div>
    );
  }
}
