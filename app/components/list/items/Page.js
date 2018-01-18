import ListGroupItem from 'react-bootstrap/lib/ListGroupItem.js'
import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap'

export default class Page extends React.Component {
  render() {
    const { page } = this.props

    var pageTypes = [
      {id: "0", type: "Responsive page that shows the Menu"},
      {id: "1", type: "Responsive page for the Events"},
      {id: "2", type: "Responsive page for general content"}];
    return(
      <div className="col-lg-4">
      <ListGroupItem className="list-item__horizontal">
        <div className="list-item__component">
          <input
            className="form-control"
            type="text"
            defaultValue={page.title}
          />
        </div>
        <div className="list-item__component">
          <textarea
            className="form-control"
            type="text"
            defaultValue={page.description}
          />
        </div>
        <div className="list-item__component">
          <input
            className="form-control"
            type="text"
            defaultValue={page.publishedOn}
          />
        </div>
        <div className="list-item__component">
          <label className="input__label">Active:</label>
          <Checkbox
            inline
            className="list-item__input list-item__input--active"
            checked={page.active}
          />
        </div>
        <div className="list-item__component">
          <label className="input__label input__label--pageType">Page type:</label>
          <DropdownButton title="Types" bsStyle="default"  id="dropdown-basic">
            {pageTypes.map(type => (
              <MenuItem eventKey={type.id} key={type.id} >
                {_.capitalize(type.type)}
              </MenuItem>
            ))}
          </DropdownButton>
        </div>
      </ListGroupItem>
      </div>
    );
  }
}
