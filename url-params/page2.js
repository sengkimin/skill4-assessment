window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const fullname = params.get('fullname');
    const age = params.get('age');

    if (fullname && age) {
        document.getElementById('to').innerText = `fullname: ${fullname}, age: ${age}`;
    }
};