const { adminForm } = document.forms;

console.log(adminForm);

adminForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(adminForm));
  console.log(formData);
  const res = await fetch('/admin', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    alert('Заказ отправлен');
  }
});
