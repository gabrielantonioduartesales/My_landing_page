(function () {
    emailjs.init("zeNV0VC3i-hpap2LC");
})();

function initEmailJS(formId, serviceID, templateID) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            alert('Por favor, confirme que você não é um robô.');
            return;
        }

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert("Email enviado com sucesso !");
                form.reset();
                grecaptcha.reset();
            }, (error) => {
                alert("Erro ao enviar e-mail, caso não consiga, entre em contato pelo link do whatsapp abaixo no botão: 'Vamos conversar'");
            });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initEmailJS('contactForm', 'service_v3igu5k', 'template_w54rwkm');
});
