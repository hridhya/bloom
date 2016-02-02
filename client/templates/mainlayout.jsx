
MainLayout = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      //returning alphabetically sorted services
      currentUser: Meteor.user()
    };
  },

  componentDidMount() {
    $(".button-collapse").sideNav({
      closeOnClick: true //closes when we click things
    });
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
    $('head').append('<link rel="shortcut icon" type="image/png" href="favicon.png">');
    $('head').append('<link rel="shortcut icon" type="image/png" href="favicon.png">');
  },
  render() {
    var authBtn;
    if(!Meteor.user()){
      authBtn = <li><a href="/signin">Sign In</a></li>
    }
    else{
      authBtn = <li><a onClick={this.signOut}>Sign Out</a></li>
    }
    return (
      <div className="page-content">
        <title>SNAPSHARE</title>
        <header>
          <nav className="cyan darken-3">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <i className="mdi-image-camera left"></i>SNAPSHARE
            </a>
            <a href="" data-activates="mobile-demo" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/services">Services</a></li>
              {authBtn}
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="/services">Services</a></li>
              {authBtn}
            </ul>
          </div>
        </nav>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="section">
                  {this.props.content}
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="page-footer cyan darken-3">
          <div className="footer-copyright">
            <div className="container">
            © 2016 SNAPSHARE
            <a className="grey-text text-lighten-4 right" href="">Support</a>
            </div>
          </div>
        </footer>
      </div>
    )

  },

  signOut(event){
    event.preventDefault();
    Meteor.logout();
    Materialize.toast('You have been signed out!', 4000);
    FlowRouter.go('/signin');
  }
});