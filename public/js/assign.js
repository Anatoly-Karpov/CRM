
const { assignForm } = document.forms;

console.log(assignForm);
assignForm.addEventListener('click', async (e) => {
  // e.preventDefault();
  // const formData = Object.fromEntries(new FormData(assignForm));
  // console.log(e.target.dataset.id);

  if (e.target.dataset.id) {
    // console.log(e.target.id);
    // let id = e.target.dataset.id
    const input = document.getElementById(e.target.dataset.id);
    console.log(input);

    const res = await fetch('/admin/assign', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ wgNum: input.value, id: input.id }),

    });
    if (res.ok) {
      alert('Бригада назначена');
    }
    // console.log(input.value);
  }
});
