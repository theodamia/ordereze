import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storePage, fetchAllPages, deletePage, updatePage } from '../actions/page';

import PageForm from '../components/form/PageForm';
import PageList from '../components/list/List';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageSubmit = this.handlePageSubmit.bind(this);
    this.handlePageUpdate = this.handlePageUpdate.bind(this);
    this.handlePageDelete = this.handlePageDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllPages();
  }
  handlePageSubmit(page) {
    this.props.storePage(page);
  }
  handlePageDelete(pageID) {
    this.props.deletePage(pageID);
  }
  handlePageUpdate(page) {
    this.props.updatePage(page);
  }
  render() {
    const pageTypes = [
      { id: '0', type: 'Responsive page that shows the Menu' },
      { id: '1', type: 'Responsive page for the Events' },
      { id: '2', type: 'Responsive page for general content' }];
    return (
      <section>
        <div className="row">
          <div className="col-lg-12">
            <PageForm
              onPageSubmit={this.handlePageSubmit}
              pageTypes={pageTypes}
            />
          </div>
          <div className="col-lg-12">
            <PageList
              pages={this.props.pages}
              pageTypes={pageTypes}
              handlePageDelete={this.handlePageDelete}
              onTitleUpdate={this.handlePageUpdate}
              onPublishedOn={this.handlePageUpdate}
              onDescriptionUpdate={this.handlePageUpdate}
              onActiveUpdate={this.handlePageUpdate}
              onPageTypeUpdate={this.handlePageUpdate}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  pages: _.map(state.page.collection, item => item),
});

const mapDispatchToProps = dispatch => ({
  storePage: page => dispatch(storePage(page)),
  fetchAllPages: () => dispatch(fetchAllPages()),
  deletePage: pageID => dispatch(deletePage(pageID)),
  updatePage: page => dispatch(updatePage(page)),
});

Main.propTypes = {
  fetchAllPages: PropTypes.func,
  storePage: PropTypes.func,
  deletePage: PropTypes.func,
  updatePage: PropTypes.func,
  pages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    publishedOn: PropTypes.object,
    isActive: PropTypes.boolean,
    type: PropTypes.string,
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
