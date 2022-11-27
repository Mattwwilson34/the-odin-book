import './PofileBody.css';
import React from 'react';

const PofileBody = () => (
  <div className='Profile_Body'>
    <div className='Profile_Body_Left_Column'>
      <div className='Profile_Body_Bio'>
        <button type='button' className='Profile_Body_Bio_Btn'>
          Add Bio
        </button>
        <button type='button' className='Profile_Body_Bio_Btn'>
          Edit Details
        </button>
        <button type='button' className='Profile_Body_Bio_Btn'>
          Add Hobbies
        </button>
        <button type='button' className='Profile_Body_Bio_Btn'>
          AddFeatured
        </button>
      </div>
      <div className='Profile_Body_Photos'>
        <span className='Profile_Body_Photo_Header'>Photos</span>
        <div className='Profile_Body_Photos_Container'>
          <div className='photo'>photo</div>
          <div className='photo'>photo</div>
          <div className='photo'>photo</div>
          <div className='photo'>photo</div>
          <div className='photo'>photo</div>
          <div className='photo'>photo</div>
          <div className='photo'>photo</div>
          <div className='photo'>photo</div>
          <div className='photo'>photo</div>
        </div>
      </div>
      <div className='Profile_Body_Friends'>
        <span className='Profile_Body_Friends_Header'>Friends</span>
        <div className='Profile_Body_Friends_Container'>
          <div className='friend'>firend</div>
          <div className='friend'>firend</div>
          <div className='friend'>firend</div>
          <div className='friend'>firend</div>
          <div className='friend'>firend</div>
          <div className='friend'>firend</div>
          <div className='friend'>firend</div>
          <div className='friend'>firend</div>
          <div className='friend'>firend</div>
        </div>
      </div>
    </div>
    <div className='Profile_Body_Right_Column'>
      <div className='Profile_Body_Timeline'>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
        <div className='Bio_Box'>post</div>
      </div>
    </div>
  </div>
);

export default PofileBody;
