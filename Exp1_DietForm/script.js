document.getElementById('dietForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const goal = document.querySelector('input[name="goal"]:checked').value;
    alert(`Thank you, ${name}! Your diet plan for weight ${goal} has been registered.`);
    this.reset();
});
