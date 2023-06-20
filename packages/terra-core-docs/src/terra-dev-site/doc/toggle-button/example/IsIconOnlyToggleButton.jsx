import React from 'react';
import ToggleButton from 'terra-toggle-button';

const IconOnly = () => {
  const [isButtonOn, setButtonOn] = React.useState(false);

  const handleButtonClick = () => {
    setButtonOn(!isButtonOn);
  };

  const handleBookAppointmentClick = () => {
    
    console.log('Booking an appointment...');
  };

  const handleContactClick = () => {
    
    console.log('Contacting us...');
  };

  return (
    <ToggleButton
      isIconOnly
      closedButtonText={isButtonOn ? 'Icon Only ToggleButton (ON)' : 'Icon Only ToggleButton (OFF)'}
      onToggle={handleButtonClick}
    >
      <h2>Welcome to Our Clinic!</h2>
      <p>
        At our clinic, we provide exceptional healthcare services for patients of all ages. Our team of experienced doctors and medical staff is dedicated to ensuring your well-being and delivering personalized care.
      </p>
      <p>
        We offer a wide range of medical specialties, including cardiology, pediatrics, dermatology, orthopedics, and more. Our state-of-the-art facilities are equipped with the latest medical technologies to provide accurate diagnoses and effective treatments.
      </p>
      <p>
        Whether you need a routine check-up, have a specific health concern, or require ongoing care, our compassionate healthcare professionals are here to support you every step of the way. We prioritize patient satisfaction and strive to create a comfortable and nurturing environment for everyone who walks through our doors.
      </p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleBookAppointmentClick} className="appointment-button">
          Book an Appointment
        </button>
        <button onClick={handleContactClick} className="contact-button">
          Contact Us
        </button>
      </div>
    </ToggleButton>
  );
};

export default IconOnly;
