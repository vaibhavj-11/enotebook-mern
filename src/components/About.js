import React from "react";

export default function About(props) {
    
    // const [myStyle, setMyStyle] = React.useState({
        
        
    //     color : 'black',
    //     backgroundColor : 'white'
    // })
    // const [btnText, setBtnText] = React.useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    return (
    <div className="container" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            >
              eNotebook
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            eNotebook is a free online tool that allows you to store your notes online. You can sign up for free and get your own personal account. Once you have signed up, you can log in to your account and start using eNotebook. You can add, edit and delete notes after logging in.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            >
              Sign up
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
              To get started, you need to sign up for an account. You can sign up for free and get your own personal account.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            >
              Log in
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
              Once you have signed up, you can log in to your account and start using eNotebook. You can add, edit and delete notes after logging in.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div> */}
      
    </div>
  );
}
