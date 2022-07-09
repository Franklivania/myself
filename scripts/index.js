const menuBtn = document.querySelector('.topbar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


    const form = document.querySelector('.contact-form');

    function sendMsg(e){
            e.preventDefault();
        
        const name = document.querySelector('.name'),
            email = document.querySelector('.email'),
            msg = document.querySelector('.msg');
        
        
        Email.send({
            SecureToken : "32464102-5461-47e8-88e1-b8d5e1fa4442",
            To : "cfaodigbo@gmail.com",
            From : "email.value",
            Subject : "Send a message...",
            Body : msg.value
            }).then(
        message => alert(message)
        );
    }

    form.addEventListener('submit', sendMsg);