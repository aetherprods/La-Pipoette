import React from 'react';

class OpenPGP extends React.Component { 
    constructor (props) {
        super(props);

        this.secure = this.secure.bind(this);
    }

    secure() {
        alert("bittds");
    }

    render(){
        return(<div>
            {this.secure()}
        </div>)
    }
}

export default OpenPGP;
