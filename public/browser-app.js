document.addEventListener('DOMContentLoaded', function () {
  const translateForm = document.getElementById('translate-form');
  const translateInput = document.getElementById('translate-input');
  const languageFrom = document.getElementById('language-from');
  const languageTo = document.getElementById('language-to');
  const translateResult = document.getElementById('translate-result');
  const outputForm = document.getElementById('output-form');
  const errorForm = document.getElementById('error-form');
  const errorMessage = document.getElementById('error-message');

  translateForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    translateResult.innerHTML = '';
    translateInput.disabled = true;
    languageFrom.textContent = '';
    languageTo.textContent = '';
    translateResult.textContent = '';
    outputForm.classList.add('hidden');
    errorForm.classList.add('hidden');

    try {
      const response = await fetch(
        'http://localhost:3000/api/v1/translate/english-alien',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: e.target.message.value,
          }),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        translateResult.textContent = data.result;
        languageFrom.textContent = data.from;
        languageTo.textContent = data.to;
        outputForm.classList.remove('hidden');
      } else {
        errorForm.classList.remove('hidden');
        errorMessage.textContent = data.message;
      }
    } catch (error) {
      errorForm.classList.remove('hidden');
      errorMessage.textContent =
        'Something went wrong, please try again | UBCO Tooneevjiiph xeepv xsooph, qmeeaatee vsz aahaaii6';
    }
    translateInput.disabled = false;
  });
});
