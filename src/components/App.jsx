import ProfileCard from "./ProfileCard";
import AlexaImage from "../images/alexa.png";
import CortanaImage from "../images/cortana.png";
import SiriImage from "../images/siri.png";
import "bulma/css/bulma.css";
// import "bulma/css/versions/bulma-no-dark-mode.min.css";

function App() {

    return (<div>
        <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">Pesonal Digital Assistance</p>
            </div>
        </section>

        <div className="container">
            <section className="section">

                <div class="columns">
                    <div class="column is-4"> <ProfileCard
                        title="Alexa"
                        handle="@alexa99"
                        description="Personal Assistance by Amazon"
                        imageSrc={AlexaImage}
                    /></div>
                    <div class="column is-4"><ProfileCard
                        title="Cortana"
                        handle="@cortana12"
                        description="Personal Assistance by Microsoft"
                        imageSrc={CortanaImage}
                    /></div>
                    <div class="column is-4"><ProfileCard
                        title="Siri"
                        handle="@siri44"
                        description="Personal Assistance by Apple"
                        imageSrc={SiriImage}
                    /></div>
                </div>
            </section>
        </div>




    </div>);
}

export default App;