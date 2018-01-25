import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import { PAGE_TYPES } from '../../../constants/index';

const Page = ({
  page, handlePageDelete, onPageUpdate,
}) => {
  var typeText;
  if (page.type === 0) {
    typeText = PAGE_TYPES[0].type;
  } else if (page.type === 1) {
    typeText = PAGE_TYPES[1].type;
  } else if (page.type === 2) {
    typeText = PAGE_TYPES[2].type;
  } else {
    typeText = 'Types';
  }
  return (
    <div className="col-lg-12">
      <ListGroupItem key={page.id} className="list-item__horizontal">
        <div className="list-item__component">
          <input
            className="form-control"
            type="text"
            defaultValue={page.title}
            onBlur={(e) => { onPageUpdate(e, page, 'title'); }}
          />
        </div>
        <div className="list-item__component">
          <textarea
            className="form-control"
            type="text"
            defaultValue={page.description}
            onBlur={(e) => { onPageUpdate(e, page, 'description'); }}
          />
        </div>
        <div className="list-item__component">
          <Datetime
            className="form__input"
            inputProps={{ placeholder: 'Click to select date of publish' }}
            value={page.publishedOn}
            onChange={(e) => { onPageUpdate(e, page, 'publishedOn'); }}
            dateFormat="YYYY-MM-DD"
            closeOnSelect
          />
        </div>
        <div className="list-item__component">
          <label htmlFor="isActive" className="input__label">Active:
            <Checkbox
              inline
              id="isActive"
              className="list-item__input--active"
              defaultChecked={page.isActive}
              onClick={(e) => { onPageUpdate(e, page, 'isActive'); }}
            />
          </label>
        </div>
        <div className="list-item__component">
          <label htmlFor="dropdown-basic" className="input__label input__label--pageType">
            Page type:
            <DropdownButton
              title={typeText}
              bsStyle="default"
              id="dropdown-basic"
            >
              {PAGE_TYPES.map(type => (
                <MenuItem
                  eventKey={type.id}
                  key={type.id}
                  onSelect={(e) => { onPageUpdate(e, page, 'pageType', type.id); }}
                >
                  {_.capitalize(type.type)}
                </MenuItem>
            ))}
            </DropdownButton>
          </label>
        </div>
        <div className="list-item__component list-item__component--icons">
          <i
            role="button"
            tabIndex={0}
            className="fa fa-trash fa-2x fa-fw"
            value="Delete"
            title="Delete"
            onClick={() => { handlePageDelete(page.id); }}
            onKeyDown={() => { handlePageDelete(page.id); }}
          />
        </div>
      </ListGroupItem>
    </div>
  );
};

Page.propTypes = {
  page: PropTypes.object,
  handlePageDelete: PropTypes.func,
  onPageUpdate: PropTypes.func,
};

export default Page;
