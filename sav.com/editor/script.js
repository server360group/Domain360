const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const iframe = document.getElementById('editorFrame');

const injectCode = `
<div id="savedit-implement">
    <link rel="stylesheet" href="https://savgroup.pages.dev/sav-editor/editor.css">
    <script src="https://savgroup.pages.dev/sav-editor/editor.js"><\/script>
    <script>
        window.addEventListener('DOMContentLoaded', function () {
            var editor = new savoirEditor();
            editor.start();
        });
    <\/script>
</div>`;

uploadBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        let content = e.target.result;
        content += '\n' + injectCode;

        const blob = new Blob([content], { type: 'text/html' });
        const blobURL = URL.createObjectURL(blob);
        iframe.src = blobURL;
    };
    reader.readAsText(file);
});
