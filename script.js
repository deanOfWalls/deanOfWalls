// Initialize markdown-it
const md = window.markdownit();

// Fetch and render markdown content
fetch('resume.md')
    .then(response => response.text())
    .then(text => {
        const result = md.render(text);
        document.getElementById('markdown-content').innerHTML = result;
    });

// Function to trigger PDF download
function downloadAsPDF() {
    const element = document.getElementById('markdown-content');
    const opt = {
        margin:       [10, 10, 10, 10],
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate the PDF
    html2pdf().from(element).set(opt).save();
}
