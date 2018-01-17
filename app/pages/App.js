import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { storePage } from '../actions/page'

import PageForm from '../components/form/PageForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };

    this.handlePageSubmit = this.handlePageSubmit.bind(this);
  }
  handlePageSubmit(page) {
    this.props.storePage(page);
  }
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-lg-12">
            <h1>Responsive Pages</h1>
          </div>
        </header>
        <main className="row">
          <div className="col-lg-12">
            {/* {this.props.children} */}
            <PageForm onPageSubmit={this.handlePageSubmit} />
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
  storePage: (page) => dispatch(storePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
