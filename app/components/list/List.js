import ListGroup from 'react-bootstrap/lib/ListGroup.js'
import { connect } from 'react-redux'
import moment from 'moment'

import Page from './items/Page.js'

export default class PageList extends React.Component {
  constructor(props) {
    super(props);

    this.onPageUpdate = this.onPageUpdate.bind(this);
  }
  onPageUpdate(e, page, type, pageTypeID) {
    switch (type) {
      case 'title':
        var title = e.target.value.trim();
        this.props.onTitleUpdate({
          id: page.id,
          title: title,
          description: page.description,
          publishedOn: page.publishedOn,
          isActive: page.isActive,
          type: page.type
        });
        break;
      case 'description':
        var description = e.target.value.trim();
        this.props.onDescriptionUpdate({
          id: page.id,
          title: page.title,
          description: description,
          publishedOn: page.publishedOn,
          isActive: page.isActive,
          type: page.type
        });
        break;
      case 'publishedOn':
        var publishedOn = e;
        this.props.onPublishedOn({
          id: page.id,
          title: page.title,
          description: page.description,
          publishedOn: publishedOn,
          isActive: page.isActive,
          type: page.type
        });
        break;
      case 'isActive':
        var isActive = e.target.checked;
        this.props.onActiveUpdate({
          id: page.id,
          title: page.title,
          description: page.description,
          publishedOn: page.publishedOn,
          isActive: isActive,
          type: page.type
        });
        break;
      case 'pageType':
        console.log(pageTypeID);
        this.props.onPageTypeUpdate({
          id: page.id,
          title: page.title,
          description: page.description,
          publishedOn: page.publishedOn,
          isActive: page.isActive,
          type: pageTypeID
        });
        break;
    }
  }
  render() {
    return(
      <section className="list">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="subtitle">Pages List:</h2>
          </div>
          <div className="col-lg-12">
            <ListGroup>
              <div className="row">
                {this.props.pages.map(page =>(
                  <Page
                    key={page.id}
                    page={page}
                    pageTypes={this.props.pageTypes}
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
