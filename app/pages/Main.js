import { storePage, fetchAllPages, deletePage, updatePage } from '../actions/page'
import { connect } from 'react-redux'

import PageForm from '../components/form/PageForm.js'
import PageList from '../components/list/List.js'

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };

    this.handlePageSubmit = this.handlePageSubmit.bind(this);
    this.handlePageUpdate = this.handlePageUpdate.bind(this);
    this.handlePageDelete = this.handlePageDelete.bind(this);
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
  componentDidMount() {
    this.props.fetchAllPages();
  }
  render() {
    const pageTypes =  [
        {id: "0", type: "Responsive page that shows the Menu"},
        {id: "1", type: "Responsive page for the Events"},
        {id: "2", type: "Responsive page for general content"}]
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

const mapStateToProps = (state, props) => ({
  pages: _.map(state.page.collection, item => item)
});

const mapDispatchToProps = (dispatch) => ({
  storePage: (page) => dispatch(storePage(page)),
  fetchAllPages: () => dispatch(fetchAllPages()),
  deletePage: (pageID) => dispatch(deletePage(pageID)),
  updatePage: (page) => dispatch(updatePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
