import "../pages/style.css";
import Lobby from "../components/lobby.js";
import Head from 'next/head';

const Index = () => (<div>
    <Head>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" /> */}
        <title>La Pipoette</title>
    </Head>
    <div>
        <Lobby />
    </div>
    
</div>);

export default Index;

//<div>
//<Game player={{username: "timmy", color: "red"}} players={[{username: "timmy", color: "red"}, {username: "bobby", color: "blue"}]} boardSize={[{x: 4}, {y: 4}]}/>
//</div>

//we use html color names. check: https://htmlcolorcodes.com/color-names/