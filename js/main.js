function copy_function() {
    var copyRecipe = document.getElementById("copy-test");

    navigator.clipboard.writeText(copyRecipe.value);

    alert("Copied the recipe's ingredients!")
}

function icon1() {
    let icon = document.getElementById('icon1');
    let step = document.getElementById('step1');
    toggled = false;
    icon.addEventListener('click', () => {
        if (!toggled) {
            icon.classList.add('fas');
            icon.classList.remove('far');
            step.style.opacity = '50%';
            toggled = true;
        } else {
            icon.classList.add('far');
            icon.classList.remove('fas');
            step.style.opacity = '100%';
            toggled = false;
        }
    });
}

function icon2() {
    let icon = document.getElementById('icon2');
    let step = document.getElementById('step2');
    toggled = false;
    icon.addEventListener('click', () => {
        if (!toggled) {
            icon.classList.add('fas');
            icon.classList.remove('far');
            step.style.opacity = '50%';
            toggled = true;
        } else {
            icon.classList.add('far');
            icon.classList.remove('fas');
            step.style.opacity = '100%';
            toggled = false;
        }
    });
}

function icon3() {
    let icon = document.getElementById('icon3');
    let step = document.getElementById('step3');
    toggled = false;
    icon.addEventListener('click', () => {
        if (!toggled) {
            icon.classList.add('fas');
            icon.classList.remove('far');
            step.style.opacity = '50%';
            toggled = true;
        } else {
            icon.classList.add('far');
            icon.classList.remove('fas');
            step.style.opacity = '100%';
            toggled = false;
        }
    });
}

function icon4() {
    let icon = document.getElementById('icon4');
    let step = document.getElementById('step4');
    toggled = false;
    icon.addEventListener('click', () => {
        if (!toggled) {
            icon.classList.add('fas');
            icon.classList.remove('far');
            step.style.opacity = '50%';
            toggled = true;
        } else {
            icon.classList.add('far');
            icon.classList.remove('fas');
            step.style.opacity = '100%';
            toggled = false;
        }
    });
}

function icon5() {
    let icon = document.getElementById('icon5');
    let step = document.getElementById('step5');
    toggled = false;
    icon.addEventListener('click', () => {
        if (!toggled) {
            icon.classList.add('fas');
            icon.classList.remove('far');
            step.style.opacity = '50%';
            toggled = true;
        } else {
            icon.classList.add('far');
            icon.classList.remove('fas');
            step.style.opacity = '100%';
            toggled = false;
        }
    });
}

function icon6() {
    let icon = document.getElementById('icon6');
    let step = document.getElementById('step6');
    toggled = false;
    icon.addEventListener('click', () => {
        if (!toggled) {
            icon.classList.add('fas');
            icon.classList.remove('far');
            step.style.opacity = '50%';
            toggled = true;
        } else {
            icon.classList.add('far');
            icon.classList.remove('fas');
            step.style.opacity = '100%';
            toggled = false;
        }
    });
}