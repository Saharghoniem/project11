import Header from "../comp/header";
import Footer from "../comp/Footer";
import Loading from "../comp/Loading";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import Erroe404 from './erroe404';
import img1 from "../images/front1.png";
import lab from "../images/lab.jpg";
import {  NavLink } from "react-router-dom";

const Frontend = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }


    if (error) {
      return <Erroe404 />;
    }

if (user) {
  if (!user.emailVerified) {
    navigate("/");
  }
}



  } );





  if (loading) {
    return <Loading />;
  }



if (user) {



  if (user.emailVerified) {
    return (
      <>
        <Helmet>
          <title>Frontend Page</title>

        </Helmet>
        <Header />
        <img id="img1" src={img1}  alt="ya"/>

        <MainContent pageName="The Road map" />
        <div className="map">
        <button><NavLink className="main-link" to="/Html">
              HTML
        </NavLink></button>

        <button>CSS</button>
        <button>Java script</button>
        <button>React</button>
        < img id="lab" src={lab} alt=""/>
        </div>
        <Footer />
      </>
    );
  }
  
}




};

export default Frontend;
