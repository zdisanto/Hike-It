import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Careers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonCard>
        <IonCardHeader>
            <IonCardTitle>Opportunities for All</IonCardTitle>
            <IonCardSubtitle>There are many different ways you can become involved.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <center>
              <img alt="Person Holding A Compass" src="https://images.pexels.com/photos/3832684/pexels-photo-3832684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </center>
            <p>Are you looking for a full-time, permanent job? We've got those. Or maybe you'd prefer to work in parks for a few months as a seasonal ranger? We've got some of those, too. (See USAJOBs for listings of both permanent and seasonal jobs.) Are you a student looking for a meaningful internship or someone with some extra time who'd like to volunteer? You can find internship and volunteer opportunities to suit your needs and interests. Come work with us—in an "office" like no other.</p>
            <center>
              <IonButton href="https://www.usajobs.gov/Search?k=%27national%20park%20service%27">USAJOBs</IonButton>
              <IonButton href="https://www.nps.gov/getinvolved/volunteer.htm">Volunteer</IonButton>
              <IonButton href="https://www.nps.gov/subjects/youthprograms/jobs-and-internships.htm">Jobs and Internships</IonButton>
            </center>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Apply</IonCardTitle>
            <IonCardSubtitle>Learn more about applying for permanent and seasonal jobs in the National Park Service and other federal agencies.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <center>
              <img alt="Exploration And Mountain Climbing" src="https://images.pexels.com/photos/3669288/pexels-photo-3669288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </center>
            <h4>Tips When Applying to Seasonal Positions</h4>
            <ul>
              <li>The park service accepts applications for summer positions between October and February and for winter positions between July and August.</li>
              <li>We post all seasonal vacancies on USAJobs. Search "National Park Service" and select "Temporary" in the Work Type field.</li>
              <li>Some of the larger parks receive hundreds of applications for only a handful of openings, so your chances for selection may improve if you apply to a smaller park. Consider volunteering or interning with some of our youth program partners to gain additional experience.</li>
              <li>For more information, see frequently asked questions about seasonal hiring.</li>
            </ul>
            <center>
              <IonButton href="https://www.nps.gov/aboutus/how-to-apply.htm">Current Job Opportunities</IonButton>
              <IonButton href="https://www.nps.gov/aboutus/seasonal-hiring-faqs.htm">Frequently Asked Questions</IonButton>
            </center>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Jobs for Students</IonCardTitle>
            <IonCardSubtitle>Young people ages 30 and younger and veterans 35 and younger are invited to discover internship opportunities in national parks.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <center>
              <img alt="Men's Blue Leather Jacket and Brown Backpack" src="https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </center>  
              <p>YOU could be the next generation to preserve and protect these great places! Learn more about National Park Service Youth Programs in the list below.</p>
            <center>
              <IonButton href="https://www.nps.gov/subjects/youthprograms/jobs-and-internships.htm#CP_JUMP_5459014">Job Opportunities</IonButton>
            </center>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Jobs for 55+</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <center>
              <img alt="Couple Standing Near Body of Water" src="https://images.pexels.com/photos/404960/pexels-photo-404960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </center>  
              <p>The Experienced Services Program offers temporary employment opportunities for individuals 55 years or older to work on specific projects.</p>
            <center>
              <IonButton href="https://www.nps.gov/aboutus/experienced-services-program.htm">Experienced Services Program</IonButton>
            </center>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Volunteer</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <center>
              <img alt="Opportunities for all" src="https://images.pexels.com/photos/7656742/pexels-photo-7656742.jpeg?auto=compress&cs=tinysrgb&w=400"/>
            </center>
            <p>Discover the many ways to volunteer, from one-time to recurring opportunities for youth, families, groups, and individuals.</p>
            <center>  
              <IonButton href="https://www.nps.gov/getinvolved/volunteer.htm">Experienced Services Program</IonButton>
            </center>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
