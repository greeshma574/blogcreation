document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    const imagePreview = document.getElementById('image-preview');
    const videoUrl = document.getElementById('video-url');
    const videoPreview = document.getElementById('video-preview');
    const publishButton = document.getElementById('publish-button');

    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        imagePreview.innerHTML = `<img src="${imageUrl}" alt="Image preview">`;
    });

    videoUrl.addEventListener('input', () => {
        const videoUrlValue = videoUrl.value;
        videoPreview.innerHTML = `<iframe width="560" height="315" src="${videoUrlValue}" frameborder="0" allowfullscreen></iframe>`;
    });

    publishButton.addEventListener('click', () => {
        const textContent = document.getElementById('text-content').value;
        // Process and publish the content as needed
    });
});