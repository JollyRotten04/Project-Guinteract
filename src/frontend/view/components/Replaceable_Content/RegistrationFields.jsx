import './RegistrationFieldsStyles.css'
export default function RegistrationFields(){
    return(
        <div>

            {/* Top Right Label */}
            <div className="topRightLabel">
                <p id="label">To get started, create an account!</p>
            </div>

            {/* Registration Form */}
            <div className="inputFields">
                    
            {/* Email Container */}
            <div id="email">
                <p id="emailLabel">Email: </p>
                <input type="text" id="emailInputField" placeholder = "example@address.com"/>
            </div>

            {/* Password Container */}
            <div id="password">
                <p id="passwordLabel">Password: </p>
                <input type="password" id="passwordInputField" />
            </div>

            {/* Confirm Password Container */}
            <div id="confirmPassword">
                <p id="confirmPasswordLabel">Confirm Password: </p>
                <input type="password" id="confirmPasswordInputField" />
            </div>
        </div>   
    </div>
    );
}