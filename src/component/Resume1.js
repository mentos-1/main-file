import Dupnav from './Dupnav';
import React, { Component } from 'react';

export class Resume1 extends Component {
    render() {
      return(
    <div>
        <body>
            
    
            <section id = "about-sc" className = "">
                <div className = "container">
                    <div className = "about-cnt">
                        <form action="" className="cv-form" id = "cv-form">
                            <div className = "cv-form-blk">
                                <div className = "cv-form-row-title">
                                    <h3>about section</h3>
                                </div>
                                <div className = "cv-form-row cv-form-row-about">
                                    <div className = "cols-3">
                                        <div className = "form-elem">
                                            <label for = "" className = "form-label">First Name</label>
                                            <input name = "firstname" type = "text" className = "form-control firstname" id = "" onkeyup="generateCV()" placeholder="e.g. John"/>
                                            <span className="form-text"></span>
                                        </div>
                                        <div className = "form-elem">
                                            <label for = "" className = "form-label">Middle Name <span className = "opt-text">(optional)</span></label>
                                            <input name = "middlename" type = "text" className = "form-control middlename" id = "" onkeyup="generateCV()" placeholder="e.g. Herbert"/>
                                            <span className="form-text"></span>
                                        </div>
                                        <div className = "form-elem">
                                            <label for = "" className = "form-label">Last Name</label>
                                            <input name = "lastname" type = "text" className = "form-control lastname" id = "" onkeyup="generateCV()" placeholder="e.g. Doe"/>
                                            <span className="form-text"></span>
                                        </div>
                                    </div>
    
                                    <div className="cols-3">
                                        <div className = "form-elem">
                                            <label for = "" className = "form-label">Your Image</label>
                                            <input name = "image" type = "file" className = "form-control image" id = "" accept = "image/*" onchange="previewImage()"/>
                                        </div>
                                        <div className = "form-elem">
                                            <label for = "" className = "form-label">Designation</label>
                                            <input name = "designation" type = "text" className = "form-control designation" id = "" onkeyup="generateCV()" placeholder="e.g. Sr.Accountants"/>
                                            <span className="form-text"></span>
                                        </div>
                                        <div className = "form-elem">
                                            <label for = "" className = "form-label">Address</label>
                                            <input name = "address" type = "text" className = "form-control address" id = "" onkeyup="generateCV()" placeholder="e.g. Lake Street-23"/>
                                            <span className="form-text"></span>
                                        </div>
                                    </div>
    
                                    <div className = "cols-3">
                                        <div className = "form-elem">
                                            <label for = "" className = "form-label">Email</label>
                                            <input name = "email" type = "text" className = "form-control email" id = "" onkeyup="generateCV()" placeholder="e.g. johndoe@gmail.com"/>
                                            <span className="form-text"></span>
                                        </div>
                                        <div className = "form-elem">
                                            <label for = "" className = "form-label">Phone No:</label>
                                            <input name = "phoneno" type = "text" className = "form-control phoneno" id = "" onkeyup="generateCV()" placeholder="e.g. 456-768-798, 567.654.002"/>
                                            <span className="form-text"></span>
                                        </div>
                                        <div className = "form-elem">
                                            <label for = "" className = "form-label">Summary</label>
                                            <input name = "summary" type = "text" className = "form-control summary" id = "" onkeyup="generateCV()" placeholder="e.g. Doe"/>
                                            <span className="form-text"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="cv-form-blk">
                                <div className = "cv-form-row-title">
                                    <h3>achievements</h3>
                                </div>
    
                                <div className = "row-separator repeater">
                                    <div className = "repeater" data-repeater-list = "group-a">
                                        <div data-repeater-item>
                                            <div className = "cv-form-row cv-form-row-achievement">
                                                <div className = "cols-2">
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Title</label>
                                                        <input name = "achieve_title" type = "text" className = "form-control achieve_title" id = "" onkeyup="generateCV()" placeholder="e.g. johndoe@gmail.com"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Description</label>
                                                        <input name = "achieve_description" type = "text" className = "form-control achieve_description" id = "" onkeyup="generateCV()" placeholder="e.g. johndoe@gmail.com"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                </div>
                                                <button data-repeater-delete type = "button" className = "repeater-remove-btn">-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type = "button" data-repeater-create value = "Add" className = "repeater-add-btn">+</button>
                                </div>
                            </div>
    
                            <div className="cv-form-blk">
                                <div className = "cv-form-row-title">
                                    <h3>experience</h3>
                                </div>
    
                                <div className = "row-separator repeater">
                                    <div className = "repeater" data-repeater-list = "group-b">
                                        <div data-repeater-item>
                                            <div className = "cv-form-row cv-form-row-experience">
                                                <div className = "cols-3">
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Title</label>
                                                        <input name = "exp_title" type = "text" className = "form-control exp_title" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Company / Organization</label>
                                                        <input name = "exp_organization" type = "text" className = "form-control exp_organization" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Location</label>
                                                        <input name = "exp_location" type = "text" className = "form-control exp_location" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                </div>
    
                                                <div className = "cols-3">
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Start Date</label>
                                                        <input name = "exp_start_date" type = "date" className = "form-control exp_start_date" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">End Date</label>
                                                        <input name = "exp_end_date" type = "date" className = "form-control exp_end_date" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Description</label>
                                                        <input name = "exp_description" type = "text" className = "form-control exp_description" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                </div>
    
                                                <button data-repeater-delete type = "button" className = "repeater-remove-btn">-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type = "button" data-repeater-create value = "Add" className = "repeater-add-btn">+</button>
                                </div>
                            </div>
    
                            <div className="cv-form-blk">
                                <div className = "cv-form-row-title">
                                    <h3>education</h3>
                                </div>
    
                                <div className = "row-separator repeater">
                                    <div className = "repeater" data-repeater-list = "group-c">
                                        <div data-repeater-item>
                                            <div className = "cv-form-row cv-form-row-experience">
                                                <div className = "cols-3">
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">School</label>
                                                        <input name = "edu_school" type = "text" className = "form-control edu_school" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Qualification/Degree</label>
                                                        <input name = "edu_degree" type = "text" className = "form-control edu_degree" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">City</label>
                                                        <input name = "edu_city" type = "text" className = "form-control edu_city" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                </div>
    
                                                <div className = "cols-3">
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Start Date</label>
                                                        <input name = "edu_start_date" type = "date" className = "form-control edu_start_date" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">End Date</label>
                                                        <input name = "edu_graduation_date" type = "date" className = "form-control edu_graduation_date" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Description</label>
                                                        <input name = "edu_description" type = "text" className = "form-control edu_description" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                </div>
    
                                                <button data-repeater-delete type = "button" className = "repeater-remove-btn">-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type = "button" data-repeater-create value = "Add" className = "repeater-add-btn">+</button>
                                </div>
                            </div>
    
                            <div className="cv-form-blk">
                                <div className = "cv-form-row-title">
                                    <h3>projects</h3>
                                </div>
    
                                <div className = "row-separator repeater">
                                    <div className = "repeater" data-repeater-list = "group-d">
                                        <div data-repeater-item>
                                            <div className = "cv-form-row cv-form-row-experience">
                                                <div className = "cols-3">
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Project Name</label>
                                                        <input name = "proj_title" type = "text" className = "form-control proj_title" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Project link</label>
                                                        <input name = "proj_link" type = "text" className = "form-control proj_link" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                    <div className = "form-elem">
                                                        <label for = "" className = "form-label">Description</label>
                                                        <input name = "proj_description" type = "text" className = "form-control proj_description" id = "" onkeyup="generateCV()"/>
                                                        <span className="form-text"></span>
                                                    </div>
                                                </div>
                                                <button data-repeater-delete type = "button" className = "repeater-remove-btn">-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type = "button" data-repeater-create value = "Add" className = "repeater-add-btn">+</button>
                                </div>
                            </div>
    
                            <div className="cv-form-blk">
                                <div className = "cv-form-row-title">
                                    <h3>skills</h3>
                                </div>
    
                                <div className = "row-separator repeater">
                                    <div className = "repeater" data-repeater-list = "group-e">
                                        <div data-repeater-item>
                                            <div className = "cv-form-row cv-form-row-skills">
                                                <div className = "form-elem">
                                                    <label for = "" className = "form-label">Skill</label>
                                                    <input name = "skill" type = "text" className = "form-control skill" id = "" onkeyup="generateCV()"/>
                                                    <span className="form-text"></span>
                                                </div>
                                                
                                                <button data-repeater-delete type = "button" className = "repeater-remove-btn">-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type = "button" data-repeater-create value = "Add" className = "repeater-add-btn">+</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
    
            <section id = "preview-sc" className = "print_area">
                <div className = "container">
                    <div className = "preview-cnt">
                        <div className = "preview-cnt-l bg-green text-white">
                            <div className = "preview-blk">
                                <div className = "preview-image">
                                    <img src = "assets/images/dummy.png" alt = "" id = "image_dsp"/> 
                                </div>
                                <div className = "preview-item preview-item-name">
                                    <span className = "preview-item-val fw-6" id = "fullname_dsp"></span>
                                </div>
                                <div className = "preview-item">
                                    <span className = "preview-item-val text-uppercase fw-6 ls-1" id = "designation_dsp"></span>
                                </div>
                            </div>
    
                            <div className = "preview-blk">
                                <div className = "preview-blk-title">
                                    <h3>about</h3>
                                </div>
                                <div className = "preview-blk-list">
                                    <div className = "preview-item">
                                        <span className = "preview-item-val" id = "phoneno_dsp"></span>
                                    </div>
                                    <div className = "preview-item">
                                        <span className = "preview-item-val" id = "email_dsp"></span>
                                    </div>
                                    <div className = "preview-item">
                                        <span className = "preview-item-val" id = "address_dsp"></span>
                                    </div>
                                    <div className = "preview-item">
                                        <span className = "preview-item-val" id = "summary_dsp"></span>
                                    </div>
                                </div>
                            </div>
    
                            <div className = "preview-blk">
                                <div className = "preview-blk-title">
                                    <h3>skills</h3>
                                </div>
                                <div className = "skills-items preview-blk-list" id = "skills_dsp">
                           
                                </div>
                            </div>
                        </div>
    
                        <div className = "preview-cnt-r bg-white">
                            <div className = "preview-blk">
                                <div className = "preview-blk-title">
                                    <h3>Achievements</h3>
                                </div>
                                <div className = "achievements-items preview-blk-list" id = "achievements_dsp"></div>
                            </div>
    
                            <div className = "preview-blk">
                                <div className = "preview-blk-title">
                                    <h3>educations</h3>
                                </div>
                                <div className = "educations-items preview-blk-list" id = "educations_dsp"></div>
                            </div>
    
                            <div className = "preview-blk">
                                <div className = "preview-blk-title">
                                    <h3>experiences</h3>
                                </div>
                                <div className = "experiences-items preview-blk-list" id = "experiences_dsp"></div>
                            </div>
    
                            <div className = "preview-blk">
                                <div className = "preview-blk-title">
                                    <h3>projects</h3>
                                </div>
                                <div className = "projects-items preview-blk-list" id = "projects_dsp"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section className = "print-btn-sc">
                <div className = "container">
                    <button type = "button" className = "print-btn btn btn-primary" onclick="printCV()">Print CV</button>
                </div>
            </section>
    
    
            
    
        
            <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
      
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.repeater/1.2.1/jquery.repeater.js" integrity="sha512-bZAXvpVfp1+9AUHQzekEZaXclsgSlAeEnMJ6LfFAvjqYUVZfcuVXeQoN5LhD7Uw0Jy4NCY9q3kbdEXbwhZUmUQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
           
            <script src = "assets/js/script.js"></script>
            
            <script src="assets/js/app.js"></script>
        </body>
    </div>
    )
}
}

export default Resume1