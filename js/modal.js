/* ======================== ADD HOLDER ACCOUNT ======================== */
document.getElementById('btn-modalAdd').addEventListener('click', function () {
    document.getElementById('overlayAdd').classList.add('is-visible');
    document.getElementById('modalAdd').classList.add('is-visible');
});

document.getElementById('close-btnAdd').addEventListener('click', function () {
    document.getElementById('overlayAdd').classList.remove('is-visible');
    document.getElementById('modalAdd').classList.remove('is-visible');
});

document.getElementById('btnAddHotelFunction').addEventListener('click', function () {
    document.getElementById('overlayAdd').classList.remove('is-visible');
    document.getElementById('modalAdd').classList.remove('is-visible');
});

document.getElementById('overlayAdd').addEventListener('click', function () {
    document.getElementById('overlayAdd').classList.remove('is-visible');
    document.getElementById('modalAdd').classList.remove('is-visible');
});

/* ======================== CREATE ACCOUNT ======================== */

document.getElementById('btn-modalMod').addEventListener('click', function () {
    document.getElementById('overlayMod').classList.add('is-visible');
    document.getElementById('modalMod').classList.add('is-visible');

});

document.getElementById('close-btnMod').addEventListener('click', function () {
    document.getElementById('overlayMod').classList.remove('is-visible');
    document.getElementById('modalMod').classList.remove('is-visible');
});

document.getElementById('btnModHotelFunction').addEventListener('click', function () {
    document.getElementById('overlayMod').classList.remove('is-visible');
    document.getElementById('modalMod').classList.remove('is-visible');
});

document.getElementById('overlayMod').addEventListener('click', function () {
    document.getElementById('overlayMod').classList.remove('is-visible');
    document.getElementById('modalMod').classList.remove('is-visible');
});

/* ======================== DEPOSIT & TAKE OUT MONEY ======================== */

document.getElementById('btn-modalSee').addEventListener('click', function () {
    document.getElementById('overlaySee').classList.add('is-visible');
    document.getElementById('modalSee').classList.add('is-visible');
});

document.getElementById('close-btnSee').addEventListener('click', function () {
    document.getElementById('overlaySee').classList.remove('is-visible');
    document.getElementById('modalSee').classList.remove('is-visible');
});

document.getElementById('btnDepositFunction').addEventListener('click', function () {
    document.getElementById('overlaySee').classList.remove('is-visible');
    document.getElementById('modalSee').classList.remove('is-visible');
});

document.getElementById('btnTakeOutFunction').addEventListener('click', function () {
    document.getElementById('overlaySee').classList.remove('is-visible');
    document.getElementById('modalSee').classList.remove('is-visible');
});

document.getElementById('overlaySee').addEventListener('click', function () {
    document.getElementById('overlaySee').classList.remove('is-visible');
    document.getElementById('modalSee').classList.remove('is-visible');
});


/* ======================== CHEK BALANCE ======================== */

document.getElementById('btn-modalDelete').addEventListener('click', function () {
    document.getElementById('overlayDelete').classList.add('is-visible');
    document.getElementById('modalDelete').classList.add('is-visible');
});

document.getElementById('close-btnDelete').addEventListener('click', function () {
    document.getElementById('overlayDelete').classList.remove('is-visible');
    document.getElementById('modalDelete').classList.remove('is-visible');
});

document.getElementById('btnBalanceCheck').addEventListener('click', function () {
    document.getElementById('overlayDelete').classList.remove('is-visible');
    document.getElementById('modalDelete').classList.remove('is-visible');
});

document.getElementById('overlayDelete').addEventListener('click', function () {
    document.getElementById('overlayDelete').classList.remove('is-visible');
    document.getElementById('modalDelete').classList.remove('is-visible');
});

