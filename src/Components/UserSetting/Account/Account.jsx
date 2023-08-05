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
      <div className="reddit_clone-user_setting_content_language">
        <div>
          <h3>Content Language</h3>
          <p>
            Add languages you’d like to see posts, community recommendations,
            and other content in
          </p>
        </div>
        <div>
          <button>Change</button>
        </div>
      </div>
      <div className="reddit_clone-user_setting_location">
        <p>
          This is Your Primary Location <a href="#">Learn More</a>{" "}
        </p>
        <h3>India</h3>
      </div>
      <div className="reddit_clone-user_setting_connected_account">
        <div className="reddit_clone-user_setting_connect_to_twitter">
          <p>
            Connect a Twitter account to enable the choice to tweet your new
            posts and display a link on your profile. We will never post to
            Twitter without your permission.
          </p>
          <button>Connect to Twitter</button>
        </div>
        <div className="reddit_clone-user_setting_connect_to_apple">
          <p>Connect account to log in to Reddit with Apple</p>
          <button>Connect To Apple</button>
        </div>
        <div className="reddit_clone-user_setting_connect_to_google">
          <p>Connect account to log in to Reddit with Google</p>
          <button>Connect To Google</button>
        </div>
      </div>
      <div className="reddit_clone-user_setting_beta">
        <h4>BETA</h4>
        <div>
          <h3>Opt into beta tests</h3>
          <p>
            See the newest features from Reddit and join the r/beta community
          </p>
        </div>
        <div>
          <h3>Opt out of the redesign</h3>
          <p>Revert back to old Reddit for the time being</p>
        </div>
      </div>
      <div className="reddit_clone-user_setting_delete">
        <h4>DELETE</h4>
        <button>Delete Account</button>
      </div>
    </div>
  );
};

export default Account;
