import { IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Visiting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Trip Planning Guide</IonCardTitle>
            <IonCardSubtitle>No one plans to get hurt or sick while out exploring in a national park. However, nature is unpredictable, structures are historical, and your equipment can unexpectedly fail. Planning ahead can be the key to a fun, safe, and healthy adventure.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <center>
              <img alt="Plan it Out Image" src="https://images.pexels.com/photos/669986/pexels-photo-669986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </center>
            <h4><b><i>Use the NPS Trip Planning Guide and Checklist to help plan your trip.</i></b></h4>
            <p>The guide provides key safety considerations to help you avoid some of the most common mistakes people make when visiting national parks. The guide is divided into the four phases of your trip. Additional articles are there to help you with selecting the Ten Essentials, preparing your Trip Plan, and Emergency Planning. Don't miss out on these important tips to help prepare you for an emergency!</p>
            <center>
              <IonButton href="https://www.nps.gov/articles/10essentials.htm">Ten Essentials</IonButton>
              <IonButton href="https://www.nps.gov/articles/gtgtripplan.htm">Trip Plan</IonButton>
              <IonButton href="https://www.nps.gov/articles/gtgemergencyplan.htm">Emergency Planning</IonButton>
            </center>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Important:</IonCardTitle>
            {/* <IonCardSubtitle>When visiting on of these National Parks, before you go, ask yourself these four questions:</IonCardSubtitle> */}
          </IonCardHeader>
          <IonCardContent>
          <center>
              <img alt="Before, During and After" src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </center>
            <p>When visiting on of these National Parks, before you go, ask yourself these four questions:</p>
            <ul>
              <li>Before the Trip</li>
              <ul>
                <li>What do you need to know before you go?</li>
              </ul>
              <li>Arrival at the Park</li>
              <ul>
                <li>"Ask a Ranger" about alerts, weather and other conditions in the park.</li>
              </ul>
              <li>During the Trip</li>
              <ul>
                <li>Assess and adjust during your adventure</li>
              </ul>
              <li>After the Trip</li>
              <ul>
                <li>How did your trip go? What did you learn?</li>
              </ul>
            </ul>
            <center>
              <IonButton href="https://www.nps.gov/subjects/healthandsafety/before-the-trip.htm">Before the Trip</IonButton>
              <IonButton href="https://www.nps.gov/subjects/healthandsafety/arrival-at-the-park.htm">Arrival at the Park</IonButton>
              <IonButton href="https://www.nps.gov/subjects/healthandsafety/during-the-trip.htm">During the Trip</IonButton>
              <IonButton href="https://www.nps.gov/subjects/healthandsafety/after-the-trip.htm">After the Trip</IonButton>
            </center>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Leave No Trace Seven Principles</IonCardTitle>
            <IonCardSubtitle>Each of us plays a vital role in protecting our national parks. As we spend time outdoors, in the natural world and in wilderness, it’s important to be conscious of the effects our actions may have on plants, animals, other people, and even entire ecosystems. Following the Leave No Trace Seven Principles, summarized below, can help us minimize those impacts. They can be applied anywhere, at any time, while taking part in recreational activities.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <center>
              <img alt="Clean Up After Yourself" src="https://images.pexels.com/photos/3480494/pexels-photo-3480494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </center>
            <p>These principles were established by the Leave No Trace Center for Outdoor Ethics, and built on work by the US Forest Service, National Park Service, and Bureau of Land Management in the mid 1980s. This relationship continues today. The principles are based on and informed by scientific research in the fields of recreation ecology and human dimensions of natural resources.</p>
            <ol>
              <li>Plan Ahead and Prepare</li>
              <li>Travel and Camp on Durable Surfaces</li>
              <li>Dispose of Waste Properly</li>
              <li>Leave What You Find</li>
              <li>Minimize Campfire Impacts</li>
              <li>Respect Wildlife</li>
              <li>Be Considerate of Other Visitors</li>
            </ol>
            <center>
              <IonButton href="https://www.nps.gov/articles/leave-no-trace-seven-principles.htm">Leave No Trace Seven Principles</IonButton>
            </center>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
