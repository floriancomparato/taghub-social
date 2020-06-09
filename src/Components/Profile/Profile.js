import React, { Component } from "react";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Profile extends Component {
  render() {
    return (
      <div className="containercard">
        <div className="card">
          <div class="container emp-profile">
            <form method="post">
              <div class="row">
                <div class="col-md-4">
                  <div class="profile-img">
                    <img
                      src="https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/hide-the-pain-harold-meme.jpg"
                      alt=""
                    />

                    <div class="file btn btn-lg btn-primary">Changer Photo</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="profile-head">
                    <h5>Harold Smile</h5>
                    <h6>Web Developer fullstack</h6>

                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Infos
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-2">
                  <input
                    type="submit"
                    class="profile-edit-btn"
                    name="btnAddMore"
                    value="Edit"
                  />{" "}
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="profile-work">
                    <p>WORK</p>
                    <a href="https://gitlab.lebocal.academy/">Website</a>
                    <br />
                    <a href="https://gitlab.lebocal.academy/">Github</a>
                    <br />
                    <a href="https://gitlab.lebocal.academy/">Gitlab</a>
                    <p>SKILLS</p>
                    <a href="">HTML, CSS</a>
                    <br />
                    <a href="">ReactJS</a>
                    <br />

                    <a href="">Paint 3D</a>

                    <br />
                    <a href="">Javascript</a>
                    <br />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="tab-content profile-tab" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div class="row">
                        <div class="col-md-6">
                          <label>User Id</label>
                        </div>
                        <div class="col-md-6">
                          <p>Harold JS</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Nom</label>
                        </div>
                        <div class="col-md-6">
                          <p>Harold Smile</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Email</label>
                        </div>
                        <div class="col-md-6">
                          <p>haroldS@mail.io</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Tel</label>
                        </div>
                        <div class="col-md-6">
                          <p>3.14159265359</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div class="col-md-6">
                          <p>Web Developer fullstack</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div class="row">
                        <div class="col-md-6">
                          <label>Experience</label>
                        </div>
                        <div class="col-md-6">
                          <p>Expert</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Hourly Rate</label>
                        </div>
                        <div class="col-md-6">
                          <p>10$/hr</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Total Projects</label>
                        </div>
                        <div class="col-md-6">
                          <p>230</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>English Level</label>
                        </div>
                        <div class="col-md-6">
                          <p>Expert</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Availability</label>
                        </div>
                        <div class="col-md-6">
                          <p>6 months</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <label>Your Bio</label>
                          <br />
                          <p>Your detail description</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
