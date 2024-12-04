type cStatus = {
  message: string;
  confirmed: boolean;
};

export function validatePassword(password: string): cStatus {
  let status: cStatus = {confirmed: false, message: ""};

  if (password.length < 8) {
    status.message ='Password must be at least 8 characters long.'
    return status;
  }
  if (!/[A-Z]/.test(password)) {
      status.message = 'Password must include at least one uppercase letter.';
      return status
  }
  if (!/[a-z]/.test(password)) {
      status.message = 'Password must include at least one lowercase letter.';
      return status
  }
  if (!/\d/.test(password)) {
      status.message = 'Password must include at least one number.';
      return status
  }
  if (!/[!@#$%^&*]/.test(password)) {
      status.message = 'Password must include at least one special character (!@#$%^&*).';
  }
  status = {confirmed: true, message: 'Password is valid.' };
  return status
}

export function confirmPassword(password: string, confirmPassword: string): cStatus {
  const status: cStatus = {confirmed: false, message: ""};

  if (!confirmPassword) {
    status.message = 'Please confirm your password.';
  } else if (password !== confirmPassword) {
    status.message = 'Passwords do not match.';
  } else {
    status.confirmed = true
  }

  return status;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}