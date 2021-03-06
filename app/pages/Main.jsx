import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storePage, fetchAllPages, deletePage, updatePage } from '../actions/page';
import PageForm from '../components/form/PageForm';

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
    return (
      <PageForm
        onPageSubmit={this.handlePageSubmit}
      />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
