document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".typing-area"),
        incoming_id = form.querySelector(".incoming_id").value,
        inputField = form.querySelector(".input-field"),
        sendBtn = form.querySelector("button"),
        chatBox = document.querySelector(".chat-box");

    form.onsubmit = (e) => {
        e.preventDefault();
    };

    inputField.focus();

    inputField.onkeyup = () => {
        if (inputField.value.trim() !== "") {
            sendBtn.classList.add("active");
        } else {
            sendBtn.classList.remove("active");
        }
    };

    sendBtn.onclick = () => {
        sendMessage();
    };

    chatBox.onmouseenter = () => {
        chatBox.classList.add("active");
    };

    chatBox.onmouseleave = () => {
        chatBox.classList.remove("active");
    };

    setInterval(() => {
        fetchMessages();
    }, 500);

    function sendMessage() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "php/insert-chat.php", true);
        xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                inputField.value = "";
                scrollToBottom();
            }
        };
        let formData = new FormData(form);
        xhr.send(formData);
    }

    function fetchMessages() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "php/get-chat.php", true);
        xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                let data = xhr.response;
                chatBox.innerHTML = data;
                if (!chatBox.classList.contains("active") && isChatBoxScrolledToBottom()) {
                    scrollToBottom();
                }
            }
        };
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("incoming_id=" + incoming_id);
    }

    function scrollToBottom() {
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function isChatBoxScrolledToBottom() {
        return chatBox.scrollHeight - chatBox.scrollTop - chatBox.clientHeight < 20;
    }
});
