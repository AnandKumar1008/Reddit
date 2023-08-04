import React from "react";

const Account = () => {
  return (
    <div className="reddit_clone-user_setting_account">
      <h3>Account settings</h3>
      <h6>ACCOUNT PREFERENCES</h6>
      <div className="reddit_clone-user_setting_account_email">
        <h4>Email address</h4>
        <p>{"Email Address"}</p>
      </div>
      <div className="reddit_clone-user_setting_account_gender">
        <div>
          <h4>Gender</h4>
          <p>
            This information may be used to improve your recommendations and
            ads.
          </p>
        </div>
        <div>
          <select name="" id="">
            <option value="male">Man</option>
            <option value="male">Woman</option>
            <option value="male">Non-BInary</option>
          </select>
        </div>
      </div>
      <div className="reddit_clone-user_setting_account_language">
        <h4>Display language(beta)</h4>
        <p>
          Select the language you'd like to experience the Reddit interface in.
          Note that this won't change the language of user-generated content and
          that this feature is still in development so translations and UI are
          still under review
        </p>
        <select name="" id="">
          <option value="">English</option>
          <option value="">Dutch</option>
          <option value="">Portugues</option>
          <option value="">Francios</option>
          <option value="">Krishna</option>
          <option value="">Bhagwat geeta</option>
          <option value="">Bhagwatam</option>
          <option value="">Ramacharit</option>
          <option value="">sanskrit</option>
        </select>
      </div>
    </div>
  );
};

export default Account;
