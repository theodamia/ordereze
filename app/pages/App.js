import '../style/css/style.scss'

export default class App extends React.Component {
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
            {/* {React.cloneElement(this.props.children, { ...this.pageTypes })} */}
            {this.props.children}
          </div>
        </main>
        <footer className="row">

        </footer>
      </div>
    );
  }
}
