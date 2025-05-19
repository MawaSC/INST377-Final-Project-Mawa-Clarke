/*document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const language = document.getElementById('language').value.trim();
    const message = document.getElementById('message').value.trim();

    const response = await fetch('/user', {
    //const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, language, message})
    });

    const result = await response.json();

    if (result.success) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    } else {
        alert('There was an error submitting the form.');
    }
});*/

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const language = document.getElementById('language').value.trim();
        const message = document.getElementById('message').value.trim();

        try {
            const response = await fetch('/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, language, message })
            });

            const result = await response.json();

            if (result.success) {
                alert('Form submitted successfully!');
                document.getElementById('contactForm').reset();
            } else {
                alert('There was an error submitting the form.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Network or server error.');
        }
    });
});
