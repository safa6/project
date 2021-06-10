import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getProfile } from "../redux/actions";

import "./Profile.css"




const Profile = () => {
  const { isAuth, user, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return loading ? (
    <h1>loading...</h1>
  ) : !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <div className="All">
    <div className="page-content-page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src="https://img.pngio.com/png-login-15-clip-arts-for-free-download-on-een-2019-login-png-199_199.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                <h6 className="f-w-600">{user.name}</h6>
                                
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h5 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h5>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{user.email}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">{user.phoneNumber}</h6>
                                    </div>
                                </div>
                                <h5 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Courses</h5>
                                <div className="row">
                                    
                                      <h6 className="text-muted f-w-400"><a href="#" > {user.cours}</a></h6>  
                      </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 
    </div>
    </div>
    


  );
};

export default Profile;