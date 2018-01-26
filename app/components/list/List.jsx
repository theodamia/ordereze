import ListGroup from 'react-bootstrap/lib/ListGroup';
import React from 'react';
import PropTypes from 'prop-types';

import Page from './items/Page';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.onPageUpdate = this.onPageUpdate.bind(this);
  }
  onPageUpdate(e, page, type, pageTypeID) {
    switch (type) {
      case 'title': {
        const title = e.target.value.trim();
        this.props.onTitleUpdate({
          id: page.id,
          title,
          description: page.description,
          type: page.type,
          isActive: page.isActive,
          publishedOn: page.publishedOn,
        });
        break;
      }
      case 'description': {
        const description = e.target.value.trim();
        this.props.onDescriptionUpdate({
          id: page.id,
          title: page.title,
          description,
          publishedOn: page.publishedOn,
          isActive: page.isActive,
          type: page.type,
        });
        break;
      }
      case 'publishedOn': {
        const publishedOn = e._d;
        console.log(publishedOn);
        this.props.onPublishedOn({
          id: page.id,
          title: page.title,
          description: page.description,
          publishedOn,
          isActive: page.isActive,
          type: page.type,
        });
        break;
      }
      case 'isActive': {
        const isActive = e.target.checked;
        this.props.onActiveUpdate({
          id: page.id,
          title: page.title,
          description: page.description,
          publishedOn: page.publishedOn,
          isActive,
          type: page.type,
        });
        break;
      }
      case 'pageType': {
        this.props.onPageTypeUpdate({
          id: page.id,
          title: page.title,
          description: page.description,
          publishedOn: page.publishedOn,
          isActive: page.isActive,
          type: pageTypeID,
        });
        break;
      }
      default:
    }
  }
  render() {
    const reverseList = _.reverse(this.props.pages);
    return (
      <section className="list">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="subtitle">Page List:</h2>
          </div>
          <div className="col-lg-12">
            <ListGroup>
              <div className="row">
                {reverseList.map(page => (
                  <Page
                    key={page.id}
                    page={page}
                    handlePageDelete={this.props.handlePageDelete}
                    onPageUpdate={this.onPageUpdate}
                  />
                ))}
              </div>
            </ListGroup>
          </div>
        </div>
      </section>
    );
  }
}

List.propTypes = {
  pages: PropTypes.array,
  onTitleUpdate: PropTypes.func,
  onDescriptionUpdate: PropTypes.func,
  onPublishedOn: PropTypes.func,
  onActiveUpdate: PropTypes.func,
  onPageTypeUpdate: PropTypes.func,
  handlePageDelete: PropTypes.func,
};
