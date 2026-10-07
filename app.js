document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        log(`Loaded file: ${file.name} (${file.size} bytes)`);
        document.getElementById('extractBtn').disabled = false;
        document.getElementById('convertBtn').disabled = false;
    }
});

function log(message) {
    const output = document.getElementById('logOutput');
    output.textContent += `\n[${new Date().toLocaleTimeString()}] ${message}`;
}