const { regForm } = document.forms;

regForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));
  formData.roleId = 2;
  const res = await fetch('/users/register', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData)
  });

  if (res.ok) {
    window.location.assign('/users')
  } else {
    alert('Error')
  }
});
