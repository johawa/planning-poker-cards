import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import Cards from "../components/Cards";

const Home: React.FC = () => {
    const [number, setNumber] = useState("1");
    const [showActionSheet, setShowActionSheet] = useState(false);

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <Cards />
            </IonContent>
        </IonPage>
    );
};

export default Home;
