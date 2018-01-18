import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { storePage, fetchAllPages } from '../actions/page'
import '../style/css/style.scss'
// import '../style/css/react-datepicker.css'

import PageForm from '../components/form/PageForm.js'
import PageList from '../components/list/List.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };

    this.handlePageSubmit = this.handlePageSubmit.bind(this);
  }
  handlePageSubmit(page) {
    this.props.storePage(page);
  }
  componentDidMount() {
    this.props.fetchAllPages();
  }
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-lg-12">
            <h1 className="title">Responsive Pages</h1>
          </div>
        </header>
        <main className="row">
          <div className="col-lg-12">
            {/* {this.props.children} */}
            <PageForm onPageSubmit={this.handlePageSubmit} />
            <PageList pages={this.props.pages} />
          </div>
        </main>
        <footer className="row">

        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  pages: _.map(state.page.collection, item => item)
});

const mapDispatchToProps = (dispatch) => ({
  storePage: (page) => dispatch(storePage(page)),
  fetchAllPages: () => dispatch(fetchAllPages())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
