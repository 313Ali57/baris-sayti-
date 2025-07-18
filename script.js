const correctCode = "06.07.2025";
const loginDiv = document.getElementById('login');
const contentDiv = document.getElementById('content');
document.getElementById('submitBtn').addEventListener('click', function() {
  if (document.getElementById('codeInput').value === correctCode) {
    loginDiv.style.display = 'none';
    contentDiv.style.display = 'block';
  } else {
    alert('Yanlış kod, yenidən cəhd et.');
  }
});
