function generateQRCode() {
  const url = document.getElementById('urlInput').value;
  if (url) {
      const qrcodeContainer = document.getElementById('qrcode');
      qrcodeContainer.innerHTML = ''; // Clear previous QR code
      new QRCode(qrcodeContainer, {
          text: url,
          width: 128,
          height: 128
      });
  } else {
      alert('Please enter a valid URL');
  }
}
