import react, { Component } from 'react';

import {
    isBrowser,
    isMobile
} from "react-device-detect";

class Index extends Component {
    render() {
        let welc;
        if (isBrowser) {
            welc = <div>Welcome to Next.js on Browser</div>
        }
        if (isMobile) {
            welc = <div>Welcome to Next.js on Mobile</div>
        }
        return (
           <div>Hi {welc}</div>
        );
    }
}

export default Index;
