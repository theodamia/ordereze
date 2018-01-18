import ListGroup from 'react-bootstrap/lib/ListGroup.js'
import Table from 'react-bootstrap'
import { connect } from 'react-redux'
import Page from './items/Page.js'

export default class PageList extends React.Component {
  constructor(props) {
    super(props);

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
