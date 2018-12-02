import React, { Component } from "react";
import "../../App.css";
import * as firebase from "firebase";
import swal from "sweetalert";
// import background from "../../images";
import pic from "../../images/logo1.png"

class Home extends Component {
    constructor(props) {
        super(props);

        this.user = this.user.bind(this);
    }

    user(){
        this.props.history.push("/User/SignUp");
    }


    render(){

        return <div>
            {/* <img src={pic} /> */}
            <div className="row">
              <div className="col-6">
                <center>
                    <button className="btn btn-primary" id="btn_user" onClick={this.user}>
                        LogIn as User
                    </button>
                </center>
              </div>
              <div className="col-6">
                    <center>
                        <button className="btn btn-primary" id="btn_vender" onClick={this.vender}>
                            LogIn as Vender
                    </button>
                    </center>
              </div>
            </div>
          </div>;
    }

}

export default Home;