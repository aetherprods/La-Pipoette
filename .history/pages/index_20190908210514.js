import "../pages/style.css";
import Lobby from "../components/Lobby/index.js";
import Head from 'next/head';


class Index extends React.Component {
    constructor(props) {
        super(props);

    }

    static async getInitialProps({ req }) {
        console.log("teest");
        return { butts: true };
    }

    render(){
        return(<div>
            <Head>
                <title>La Pipoette</title>
            </Head>
            <div>
                <Lobby />
            </div>
        </div>);
    }
}



export default Index;
