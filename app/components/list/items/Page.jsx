import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';

const Page = ({
  page, pageTypes, handlePageDelete, onPageUpdate,
}) => (
  <div className="col-lg-12">
    <ListGroupItem className="list-item__horizontal">
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
          defaultValue={page.publishedOn}
          onChange={(e) => { onPageUpdate(e, page, 'publishedOn'); }}
          dateFormat="YYYY-MM-DD"
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
        <label htmlFor="dropdown-basic" className="input__label input__label--pageType">Page type:
          <DropdownButton
            title={page.type === 0 ? pageTypes[0].type : (page.type === 1 ? pageTypes[1].type : pageTypes[2].type)}
            bsStyle="default"
            id="dropdown-basic"
          >
            {pageTypes.map(type => (
              <MenuItem eventKey={type.id} key={type.id} onSelect={(e) => { onPageUpdate(e, page, 'pageType', type.id); }}>
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

Page.propTypes = {
  page: PropTypes.object,
  pageTypes: PropTypes.array,
  handlePageDelete: PropTypes.func,
  onPageUpdate: PropTypes.func,
};

export default Page;

// export default class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       publishedOn: moment(),
//     };
//   }
//   render() {
//     const { page } = this.props;
//     const pageTypes = this.props.pageTypes;
//     return (
//       <div className="col-lg-4">
//         <ListGroupItem className="list-item__horizontal">
//           <div className="list-item__component">
//             <input
//               className="form-control"
//               type="text"
//               defaultValue={page.title}
//               onBlur={(e) => { this.props.onPageUpdate(e, page, 'title'); }}
//             />
//           </div>
//           <div className="list-item__component">
//             <textarea
//               className="form-control"
//               type="text"
//               defaultValue={page.description}
//               onBlur={(e) => { this.props.onPageUpdate(e, page, 'description'); }}
//             />
//           </div>
//           <div className="list-item__component">
//             <Datetime
//               className="form__input"
//               inputProps={{ placeholder: 'Click to select date of publish' }}
//               defaultValue={page.publishedOn}
//               onChange={(e) => { this.props.onPageUpdate(e, page, 'publishedOn'); }}
//               dateFormat="YYYY-MM-DD"
//             />
//           </div>
//           <div className="list-item__component">
//             <label className="input__label">Active:</label>
//             <Checkbox
//               inline
//               className="list-item__input--active"
//               defaultChecked={page.isActive}
//               onClick={(e) => { this.props.onPageUpdate(e, page, 'isActive'); }}
//             />
//           </div>
//           <div className="list-item__component">
//             <label className="input__label input__label--pageType">Page type:</label>
//             <DropdownButton
//               title={page.type == 0 ? pageTypes[0].type : (page.type == 1 ? pageTypes[1].type : pageTypes[2].type)}
//               bsStyle="default"
//               id="dropdown-basic"
//             >
//               {pageTypes.map(type => (
//                 <MenuItem eventKey={type.id} key={type.id} onSelect={(e) => { this.props.onPageUpdate(e, page, 'pageType', type.id); }}>
//                   {_.capitalize(type.type)}
//                 </MenuItem>
//             ))}
//             </DropdownButton>
//           </div>
//           <div className="list-item__component list-item__component--icons">
//             <i
//               className="fa fa-trash fa-2x fa-fw"
//               value="Delete"
//               title="Delete"
//               onClick={() => { this.props.handlePageDelete(page.id); }}
//             />
//           </div>
//         </ListGroupItem>
//       </div>
//     );
//   }
// }
