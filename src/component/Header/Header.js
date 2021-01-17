import React from 'react';
import Navigator from './Navigator';
import Alert from 'react-bootstrap/Alert';




const Header = () => {
  return (
    <>
      <div className="HeaderWrapper">
        <div className="Subhead">
          <Navigator />
        </div>
        <div className="Mainhead">
          <Alert variant="success">
            <Alert.Heading>Covid-19 Alert!!!!</Alert.Heading>
            <p>  Maintain safe social distancing. Maintain good hand hygiene. Reach our Helpline +358 111222333</p>
          </Alert>
        </div>
      </div>
    </>
  )
}

export default Header
