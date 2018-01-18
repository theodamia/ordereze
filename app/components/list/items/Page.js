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
      <ListGroupItem>
        <div className="list__item-title">
          <input
            type="text"
            defaultValue={page.title}
          />
        </div>
        <div className="list__item-description">
          <input
            type="text"
            defaultValue={page.description}
          />
        </div>
        <div className="list__item-publishedOn">
          <input
            type="text"
            defaultValue={page.publishedOn}
          />
        </div>
        <div className="list__item-active">
          <Checkbox
            checked={page.active}
          />
        </div>
        <div className="list__item-pageType">
          <DropdownButton title="Types" bsStyle="default"  id="dropdown-basic">
            {pageTypes.map(type => (
              <MenuItem eventKey={type.id} key={type.id} >
                {_.capitalize(type.type)}
              </MenuItem>
            ))}
          </DropdownButton>
        </div>
      </ListGroupItem>
    );
  }
}
