import React, { Component } from 'react';


class About extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var image = this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }


    return (
      <section id="about">

      <div className="row">

         <div className="three columns">

            <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

         </div>

         <div className="nine columns main-col">

            <h2>About Me</h2>

            <p>
               My education has been recognized by“ the Danish agency for foreign education” as an equivalent to a Danish Bachelor of IT.
               I graduated with “very good degree” 3.0 out of a 4.0 scale from the University of the Arab Academy For Science and Technology.
               I have always been interested in studying and working abroad.
            </p>

            <div className="row">

               <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br/>
						   <span>{zip} {city}<br/>
						         {street}
                     </span><br/>
						   <span>{phone}</span><br/>
                     <span>{email}</span>
					   </p>

               </div>

               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>

            </div> 

         </div> 

      </div>

   </section>
    );
  }
}

export default About;
