<div class="user-update-profile">   
  <section id="personal-info-container">
    <?=form_open("users/edit_data","POST");?>
      <h1>PERSONAL INFORMATION</h1>
      <div class="field">    
        <div class="title"><label>First Name</label></div>
        <div class="value"><input type="text" name="firstname" placeholder="First name" value="<?=$info->firstname;?>"></div>
      </div>
      <div class="field">    
        <div class="title"><label>Last Name</label></div>
        <div class="value"><input type="text" name="lastname" placeholder="Last name" value="<?=$info->lastname;?>"></div>
      </div>      
      <div class="field">    
        <div class="title"><label>Address</label></div>
        <div class="value"><input type="text" name="address" placeholder="Address" value="<?=$info->address;?>"></div>
      </div>
      <div class="field">    
        <div class="title"><label>Birthday</label></div>
        <div class="value"><input type="date" name="birthday" value="<?=$info->birthday;?>"></div>
      </div>
      <div class="field">    
        <div class="title"><label>Age</label></div>
        <div class="value"><input type="number" name="age" min="0" max="100" placeholder="Age" value="<?=$info->age;?>"></div>
      </div>
      <div class="field">    
        <div class="title"><label>Student Number</label></div>
        <div class="value"><input type="text" name="student_number" placeholder="xxxx-xxxxx" value="<?=$info->studentnumber;?>"></div>

      </div>
      <div class="field">    
        <label>Course</label>        
        <select name="course" placeholder="Year">
          <option value="1">BS Computer Science</option>
          <option value="2">MS Computer Science</option>
        </select>
      </div>
      <div class="field">    
        <div class="title"><label>Year</label></div>
        <div class="value"><input type="text" name="year" min="1" max="6" placeholder="Year" value="<?=$info->yearlevel;?>"></div>
      </div><br/><br/>
      <h1>CONTACT DETAILS</h1>
      <div class="field">    
        <div class="title"><label>Email</label></div>
        <div class="value"><input type="email" name="email" placeholder="Email address" value="<?=$info->email;?>"></div>
      </div>
      <div class="field">    
        <div class="title"><label>Contact #</label></div>
        <div class="value"><input type="text" name="number" placeholder="Cellphone number" value="<?=$info->contact_number;?>"></div>
      </div>
      <div class="field">    
        <div class="title"><label>Facebook</label></div>
        <div class="value"><input type="text" name="facebook" placeholder="Link to your facebook page" value="<?=$info->facebook;?>"></div>
      </div>
      <div class="field">    
        <div class="title"><label>Twitter</label></div>
        <div class="value"><input type="text" name="twitter" placeholder="Link to your twitter page" value="<?=$info->twitter;?> "></div>

      </div><br/>
      <div class="field">            
        <input type="submit" value="UPDATE" class="button green">
      </div>      
    <?= form_close(); ?>
  </section>
  <aside>
    <section id="profile-picture-container">  
      <div id="profile-picture" style="background: #222222 url('<?=base_url()?>assets/images/up-logo.png') center center no-repeat; background-size:cover;"></div>
        <?=form_open_multipart("#","POST");?>
          <input type="file" name="profile-picture">
          <button id="new-profile-picture" class="button green">CHANGE</button>
          <div id="new-profpic-button-container">
            <input type="submit" value="SAVE" class="button green">
            <button id="cancel-profile-pic" class="button maroon">CANCEL</button>
          </div>
        <?=form_close();?>
    </section>    
  </aside>
</div>