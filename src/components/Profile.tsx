import React from "react";
import "../assets/styles.css";
import "../assets/animation.css";
import "../assets/responsive-css.css";
import { useAuth } from "../context/AuthContext";
import { logOut, updatePassword } from "../services/auth";

function Profile() {
  const { currentUser } = useAuth();
  const [newPassword, setNewPassword] = React.useState('');
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (currentUser?.email && currentPassword && newPassword) {
        await updatePassword(currentPassword, newPassword);
        alert('Password updated successfully!');
      }
    } catch (error) {
      alert('Error updating password: ' + (error as Error).message);
    }
  };

//   const handleNewsletterToggle = async () => {
//     try {
//       if (currentUser?.uid) {
//         await updateSubscriptionStatus(currentUser.uid, !isSubscribed);
//         setIsSubscribed(!isSubscribed);
//         alert('Subscription updated successfully!');
//       }
//     } catch (error) {
//       alert('Error updating subscription: ' + (error as Error).message);
//     }
//   };

  return (
    <section id="profile">
      <div className="section-wrap">
        <h3 className="section-title"><span>My </span>Profile</h3>
        <div className="auth-form">
      <div className="profile-info">
        <p><strong>Email:</strong> {currentUser?.email}</p>
      </div>
      <br></br>
      <form onSubmit={handlePasswordUpdate} className="profile-form">
        <div className="form-group">
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="profile-cta-btn">
          Update Password
        </button>
      </form>
    <br></br>

      <button className="section-btn" onClick={logOut}>
        Log Out
      </button>
      <button
            type="button"
            className="section-btn"
            onClick={() => window.location.href = '/'}
          >
            Go to Home
          </button>
      </div>
      </div>
    </section>
  );
}

export default Profile;