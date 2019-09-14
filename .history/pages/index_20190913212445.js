import "../pages/style.css";
//import Lobby from "../components/Lobby/index.js";
import Head from 'next/head';

const Lobby = dynamic(
    () => import("../components/Lobby/index.js"),
    { ssr: false }
)


class Index extends React.Component {
    constructor(props) {
        super(props);

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
