import { IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonModal, IonButtons, useIonAlert } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Tab1.css';
// import { info } from 'console';

const Tab1: React.FC = () => {
  // Not really used... good :) 
  let initialData = [
    {
      "Yash":
        {
          "name": "National Park 1", 
          "year": "Month Day, Year",
          "description": "A TA for Haik",
          "address": "Far Far Away",
          "imgURL": "https://media-exp1.licdn.com/dms/image/C4D03AQGmc1ssfkfH2Q/profile-displayphoto-shrink_800_800/0/1613127226688?e=2147483647&v=beta&t=ZsfidAIhoVpELtUNTYtInNiYbaDqCxo9ReJi7JBb90U",
          "map": "https://collider.com/wp-content/uploads/star-wars-galaxy-map.jpg"    
        }
    },
    {
      "Zo": 
        {
          "name": "National Park 2", 
          "year": "Month Day, Year",
          "description": "A soon to be TA for Haik",
          "address": "Far Away",
          "imgURL": "https://avatars.githubusercontent.com/u/70993217?v=4",
          "map": "https://i.pinimg.com/originals/e0/a9/47/e0a9473b31d5ec1af4e34249ce5cb888.png" 
        }
    }
  ];

  // Getting Data from .json file
  const [data, setData] = useState<any[]>(initialData);
  useEffect(() => {
    goGetData();
  }, []);
  function goGetData() {
    let theURL = "assets/content/nationalParks.json"; 
    axios.get(theURL).then(
      (theResponse) => {
        console.log(theResponse.data);
        setData(theResponse.data);
      }
    ).catch(err => {
      console.log(err)}
    );
  }
  // Modal: 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <b>🏔 Hike It 🏔</b> 
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"> 
        <center>
          <h1>The Most Visited National Parks</h1>
          <h4>By State</h4>
        </center>
        {data.map((info, index) => (
              <IonCard> 
                <IonCardHeader key={index}>
                  <h4>{info.state}</h4>
                  <IonCardTitle><b>{info.name}</b></IonCardTitle>
                  <IonCardSubtitle>Established: {info.year}</IonCardSubtitle>
                  <IonCardSubtitle><i>Area: {info.area}</i></IonCardSubtitle>
                  <IonCardContent>
                    <center>
                      <img alt="Image of National Park" src={info.imgURL} />
                    </center>
                    <hr/>
                    {info.description}
                    <hr/>

                    {/* Below tow sections of comments trying to get info from JSON file to load into Modal or Alert... won't work :() */}
                    {/* <center>
                    <IonButton onClick={() => setIsOpen(true)}>
                      View Park Map
                    </IonButton>
                    </center> */}

                    {/* <IonModal isOpen={isOpen}>
                      <IonHeader>
                        <IonToolbar>
                          <IonTitle>{info.name} Map</IonTitle>
                          <IonButtons slot="end">
                            <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
                          </IonButtons>
                        </IonToolbar>
                      </IonHeader>
                      <IonContent className="ion-padding">
                        <center>
                          <img alt="Map of National Park" src={info.map} />
                        </center>
                      </IonContent>
                    </IonModal> */}

                  </IonCardContent>
                </IonCardHeader>
            </IonCard>
          ))} 
        {/* <div className="ion-padding">
        {logs.map((log) => (
          <p>{log}</p>
        ))}
      </div> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;