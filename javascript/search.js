document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.users .search button');
    const searchInput = document.querySelector('.users .search input');
    const usersList = document.querySelector('.users-list');

    searchIcon.onclick = () => {
        searchInput.classList.toggle('active');
        searchIcon.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        } else {
            searchInput.blur();
        }
    };

    searchInput.addEventListener('input', function () {
        let searchTerm = searchInput.value;

        if (searchTerm !== "") {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "php/search.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onload = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        let data = xhr.response;
                        usersList.innerHTML = data;
                    }
                }
            }
            xhr.send("searchTerm=" + searchTerm);
        } else {
            // Reset or clear the user list if the search input is empty
            usersList.innerHTML = '';
        }
    });
});
