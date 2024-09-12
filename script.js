const otpLengthInput = document.getElementById('otp-length');
const generateBtn = document.getElementById('generate-btn');
const otpContainer = document.getElementById('otp-container');
const otpElement = document.getElementById('otp');

generateBtn.addEventListener('click', generateOTP);

function generateOTP() {
    const length = otpLengthInput.value;
    const digits = '0123456789';
    let otp = '';

    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * digits.length)];
    }

    otpElement.textContent = `Your OTP is: ${otp}`;
    otpContainer.style.display = 'block';
}