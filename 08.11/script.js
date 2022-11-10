const btn_danger = document.querySelector('#notification-danger-btn');
const btn_success = document.querySelector('#notification-success-btn');

const showNotification = (options) => {
    const div = document.createElement('div');
    div.innerHTML = '<div class="alert-success">hello world</div>';
    document.body.prepend(div);

    setTimeout(() => {
        div.remove();
    },1500)
}

btn_danger.addEventListener('click',showNotification);
btn_success.addEventListener('click', showNotification);