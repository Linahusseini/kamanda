import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Profile.css';

const ProfileForm = () => {

    // *** Uploading Photo *** //

    const uploadPhoto = (e) => {
        // collect the files from the e (event)
        const files = Array.from(e.target.files);

        // create FormData()
        const formData = new FormData();

        // append the files to the FormData
        files.forEach( (file, index)=> {
            formData.append(index, file);
        });

        // Fetch request to the send the files
        fetch("http://localhost:8080/users/image-upload", 
            {
                method: 'POST',
                body: formData
            }
        )
        .then(
            (response)=>response.json()
        )
        .then(
            (json) => {
                console.log('from backend', json)
            }
        )
    }



     // *** Updating user *** //

     const [state, setState] = useState(
        {
            updated: false,
        }
    )

    let firstName;
    let lastName;
    let email;
    let dateOfBirth;
    let occupation;
    let basedIn;
    let nationality;
    let interests;


    const updateuser = () => {

        fetch('http://localhost:8080/users/ProfilePage', 
            {
                method: 'POST',
                body: JSON.stringify({
                    // firstName: firstName.value,
                    // lastName: lastName.value,
                    email: email.value,
                    dateOfBirth: dateOfBirth.value,
                    occupation: occupation.value,
                    basedIn: basedIn.value,
                    nationality: nationality.value,
                    interests: interests.value
                }),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(
            (response)=>response.json()
        )
        .then (
            (json) => {
                const { message } = json;
                
                if(message === "Your data has been saved!") {

                    setState(
                        {
                            ...state,
                            updated: true,
                        }
                    )
                    
                } else {
                    
                    setState(
                        {
                            ...state,
                            updated: false
                        }
                    )
                }
            }
        )
    }


    if (state.updated === true) {
        return (<Redirect to="/ProfilePage"/>)
    }

    return(

        <div className="modal fade" id="userModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Profile</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div className="modal-body">
                
                    <form action="#" method="post" className="modal-content">

                        <div className="container form-row">

                            <div className="form-group row">
                                <div className="col">
                                <input 
                                ref={ (comp)=> firstName = comp}
                                type="text" className="form-control" placeholder="First name"/>
                                </div>

                                <div className="col">
                                <input 
                                    ref={ (comp)=> lastName = comp}
                                type="text" className="form-control" placeholder="Last name"/>
                                </div>
                            </div>

                            <div className="form-group col-md-12">
                                <input 
                                    ref={ (comp)=> email = comp}
                                type="email" className="form-control"  placeholder="Email"/>
                            </div>

                            <div className="form-group col-md-12">
                                <input 
                                    ref={ (comp)=> dateOfBirth = comp}
                                type="text" className="form-control" onfocus="(this.type='date')" placeholder="Birth Date"/>
                            </div>

                            <div className="form-group col-md-12">
                                <input 
                                    ref={ (comp)=> occupation = comp}
                                type="text" className="form-control" placeholder="Occupation"/>
                            </div>

                            <div className="form-group col-md-12">
                                <input 
                                    ref={ (comp)=> basedIn = comp}
                                type="text" className="form-control" placeholder="Based In"/>
                            </div>

                            <div className="form-group col-md-12">
                                <input 
                                    ref={ (comp)=> nationality = comp}
                                type="text" className="form-control" placeholder="Nationality"/>
                            </div>

                            <div className="form-group col-md-12">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" onChange={uploadPhoto}/>
                                    <label className="custom-file-label" for="validatedInputGroupCustomFile">Choose image file...</label>
                                </div>
                            </div>

                            <div className="form-group col-md-12">
                                <textarea 
                                    ref={ (comp)=> interests = comp}
                                className="form-control" 
                                placeholder="Interests">
                                </textarea>
                            </div>

                        </div>

                        <button type="button" className="save btn-info" onClick={updateuser}>Save</button>

                    </form>
 

                    </div>
                   
                </div>
            </div>
        </div>

    )          

}

export default ProfileForm;