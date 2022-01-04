function copy() {
    var copyRecipe = document.getElementById("copy-test");

    copyRecipe.select();
    copyRecipe.selectionRange(0, 99999);

    navigator.clipboard.writeText(copyRecipe.value);

    alert("Copied the recipe's ingredients!")
}