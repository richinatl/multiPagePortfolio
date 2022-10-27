const formSubmit = document.querySelector("#formSubmit");

formSubmit.addEventListener("click", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  alert(
    "Back end still needs to be built, please contact me directly by any of the links at the bottom of the page"
  );
}

handleSubmit();
