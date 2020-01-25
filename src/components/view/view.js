import React, {Component} from 'react';
import './view.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as viewActions from "../../store/view/actions";
export default class view extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-view">Hello! component view</div>;
    }
  }
// export default connect(
//     ({ view }) => ({ ...view }),
//     dispatch => bindActionCreators({ ...viewActions }, dispatch)
//   )( view );