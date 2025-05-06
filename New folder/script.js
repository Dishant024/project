// ========== 1. Simulate UPI Scan ==========
document.getElementById("scanBtn").addEventListener("click", () => {
  const riskScore = Math.floor(Math.random() * 100);
  const status = riskScore > 70 ? "⚠️ High Risk!" : "✅ Safe Transaction";
  alert(`UPI Scan Completed\nRisk Score: ${riskScore}\nStatus: ${status}`);
});

// ========== 2. Clickable Card Alert ==========
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Feature demo loading... Stay tuned for fraud prevention simulation!");
  });
});

// ========== 3. Login + MFA Modal Simulation ==========
function showLoginModal() {
  const email = prompt("Login to PayBindass\nEnter your email:");
  if (!email) return alert("Login cancelled.");
  
  const otp = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("userEmail", email);
  alert(`OTP Sent to ${email} (Simulated): ${otp}`);
  
  const userOTP = prompt("Enter the OTP:");
  if (parseInt(userOTP) === otp) {
    alert("✅ MFA Verified. Logged in successfully!");
    localStorage.setItem("isLoggedIn", "true");
  } else {
    alert("❌ Invalid OTP. Access Denied.");
  }
}

// Auto prompt login on first visit
if (!localStorage.getItem("isLoggedIn")) {
  showLoginModal();
}

// ========== 4. Real-time Fraud Detection Trigger ==========
function simulateFraudCheck(transactionAmount, locationTrusted) {
  const randomFactor = Math.random();
  let riskScore = transactionAmount * 0.2 + (locationTrusted ? 10 : 40) + randomFactor * 30;
  riskScore = Math.min(100, Math.floor(riskScore));
  return riskScore;
}

// Example usage
const mockTxnAmount = 5000; // ₹5000
const locationTrusted = false; // Assume GPS mismatch
const score = simulateFraudCheck(mockTxnAmount, locationTrusted);
console.log("Fraud Risk Score for ₹" + mockTxnAmount + ":", score);

// ========== 5. User Session Management ==========
function logout() {
  localStorage.clear();
  alert("You have been logged out.");
  location.reload();
}

// Optional logout button trigger
// document.getElementById("logoutBtn").addEventListener("click", logout);

// ========== 6. Firebase Integration Placeholder ==========
// (Optional – use if you want real-time DB or auth)
/*
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your_key",
  authDomain: "your_project.firebaseapp.com",
  projectId: "your_project_id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
*/
