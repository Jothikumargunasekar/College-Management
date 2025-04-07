// utils/captcha.js
const generateCaptchaText = (length = 6) => {
    return Math.random().toString(36).substring(2, 2 + length);
  };
  
  export default generateCaptchaText;
  