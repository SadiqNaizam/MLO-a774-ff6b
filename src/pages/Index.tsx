import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Login/LoginForm';

// Define the type for login credentials explicitly for clarity
// This mirrors the LoginFormValues type inferred from Zod schema in LoginForm.tsx
interface LoginCredentials {
  username: string;
  password: string;
}

const IndexPage: React.FC = () => {
  const handleLoginSuccess = (data: LoginCredentials) => {
    console.log('Login successful on IndexPage:', data);
    // In a real application, you might navigate to a dashboard, set auth tokens, etc.
    // For this example, we'll just show an alert.
    alert(`Login Successful!\nUsername: ${data.username}\nPassword: ${data.password.substring(0, 3)}... (masked for alert)`);
  };

  const handleSignUp = () => {
    console.log('Sign up clicked on IndexPage');
    // In a real application, you might navigate to a sign-up page or open a sign-up modal.
    // For this example, we'll just show an alert.
    alert('Sign up action triggered! Implement navigation or modal display here.');
  };

  return (
    <MainAppLayout>
      <LoginForm 
        onLoginSuccess={handleLoginSuccess} 
        onSignUp={handleSignUp} 
      />
    </MainAppLayout>
  );
};

export default IndexPage;
