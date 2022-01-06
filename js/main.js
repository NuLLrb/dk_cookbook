function copy_function() {
    var copyRecipe = document.getElementById("copy-test");

    navigator.clipboard.writeText(copyRecipe.value);

    alert("Copied the recipe's ingredients!")
}