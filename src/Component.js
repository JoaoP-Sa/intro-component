import React from 'react';

function Component(props){
    return(
        <section className="form-section">
            <aside>
                <h1>Learn to code by watching others</h1>
                <br />
                <p>See how experienced developers solve problems in real time. Watching scripted tutorials is great,
                   but understanding how developers think is invaluable.
                </p>
            </aside>

            <div className="form-container">
                <div className="form-box-header">
                    <p><strong>Try it free 7 days</strong> when $20/mo. thereafter</p>
                </div>

                <div className="form-box">
                    <form>
                        <input type="text" id="fname" name="fname" placeholder="First Name" required />
                        <span id="fnameAlert" className="alert">!</span>
                        <p id="fnameEmpty" className="empty-msg">First Name cannot be empty</p>

                        <input type="text" id="lname" name="lname" placeholder="Last Name" required />
                        <span id="lnameAlert" className="alert">!</span>
                        <p id="lnameEmpty" className="empty-msg">Last Name cannot be empty</p>

                        <input type="email" id="email" name="email" placeholder="Email Adress" required />
                        <span id="emailAlert" className="alert">!</span>
                        <p id="emailEmpty" className="empty-msg">Looks like this is not a email</p>

                        <input type="password" id="password" name="adress" placeholder="Password" required />
                        <span id="passwordAlert" className="alert">!</span>
                        <p id="passwordEmpty" className="empty-msg">Password cannot be empty</p>

                        <input type="submit" onClick={props.valid} id="formBtn" name="fbutton" value="CLAIM YOUR FREE TRIAL" />
                        <p>By clicking the button, you are agreeing to our <strong>Terms and Services</strong></p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Component;