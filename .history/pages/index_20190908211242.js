import "../pages/style.css";
import Lobby from "../components/Lobby/index.js";
import Head from 'next/head';


class Index extends React.Component {
    constructor(props) {
        super(props);

    }

    static async getInitialProps({ req }) {
        if (req) {
            console.log("teest: in server");
            return { butts: true };
        }
        
        console.log("teest: in client");
        return { butts: false };
    }

    componentDidMount(){
        console.log("teest2: in client");
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
