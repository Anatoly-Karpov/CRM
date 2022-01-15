const { loginForm } = document.forms;
console.log(loginForm);

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(loginForm));
  console.log(formData);

  const res = await fetch('/users/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (res.status === 200) {
    window.location.assign('/admin');
  } else if (res.status === 201) {
    window.location.assign('/users');
  } else { alert('wrong'); }
});
