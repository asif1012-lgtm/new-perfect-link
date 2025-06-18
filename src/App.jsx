import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import LandingPage from './pages/LandingPage.jsx';
import PasswordVerification from './pages/PasswordVerification.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [submissionData, setSubmissionData] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleGetStarted = () => {
    setShowFormModal(true);
  };

  const handleFormNext = (submissionId, formData) => {
    setSubmissionData({ submissionId, formData });
    setShowFormModal(false);
    setShowPasswordModal(true);
  };

  const handleCloseModal = () => {
    setShowFormModal(false);
    setShowPasswordModal(false);
  };

  return (
    <div className="App">
      <LandingPage onGetStarted={handleGetStarted} />
      
      {/* Form Modal */}
      {showFormModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            width: window.innerWidth <= 768 ? '95%' : '90%',
            maxWidth: window.innerWidth <= 768 ? 'none' : '500px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            margin: window.innerWidth <= 768 ? '10px' : '0'
          }}>
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
                zIndex: 1001
              }}
            >
              ×
            </button>
            <Home onNext={handleFormNext} />
          </div>
        </div>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            width: window.innerWidth <= 768 ? '95%' : '90%',
            maxWidth: window.innerWidth <= 768 ? 'none' : '400px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            margin: window.innerWidth <= 768 ? '10px' : '0'
          }}>
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
                zIndex: 1001
              }}
            >
              ×
            </button>
            <PasswordVerification 
              submissionId={submissionData?.submissionId}
              userData={submissionData?.formData}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;