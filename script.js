function handleFormSubmit(event) {
    event.preventDefault();
    var resumeData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        address: document.getElementById('address').value.trim(),
        skills: document.getElementById('skills').value.trim().split('\n'), // Changed to split by new line
        education: document.getElementById('education').value.trim(),
        experience: {
            company: document.getElementById('company-name').value.trim(),
            designation: document.getElementById('designation-name').value.trim(),
            details: document.getElementById('experience-details').value.trim(),
        },
        languages: document.getElementById('languages').value.trim().split('\n'), // Changed to split by new line
    };
    generateResumePreview(resumeData);
}
// Function to generate and display the editable resume preview
function generateResumePreview(data) {
    var previewElement = document.getElementById('resume-preview');
    if (!previewElement) {
        console.error('Could not find resume-preview element.');
        return;
    }
    previewElement.scrollIntoView({ behavior: 'smooth' });
    // Dynamically generate the editable resume content
    previewElement.innerHTML = "\n        <div>\n            <h2>Editable Resume by Aiysha Noor</h2>\n            <section class=\"sec1\">\n                <h2><input type=\"text\" id=\"edit-name\" value=\"".concat(data.name, "\" /></h2>\n                <p><strong>Email:</strong> <input type=\"email\" id=\"edit-email\" value=\"").concat(data.email, "\" /></p>\n                <p><strong>Phone:</strong> <input type=\"tel\" id=\"edit-phone\" value=\"").concat(data.phone, "\" /></p>\n                <p><strong>Address:</strong> <input type=\"text\" id=\"edit-address\" value=\"").concat(data.address, "\" /></p>\n            </section>\n            <section class=\"sec2\">\n                <h3>Education</h3>\n                <textarea id=\"edit-education\">").concat(data.education, "</textarea>\n                <h3>Experience</h3>\n                <p><strong>Company:</strong> <input type=\"text\" id=\"edit-company\" value=\"").concat(data.experience.company, "\" /></p>\n                <p><strong>Designation:</strong> <input type=\"text\" id=\"edit-designation\" value=\"").concat(data.experience.designation, "\" /></p>\n                <p><strong>Details:</strong> <textarea id=\"edit-details\">").concat(data.experience.details, "</textarea></p>\n                <h3>Skills</h3>\n                <textarea id=\"edit-skills\">").concat(data.skills.join('\n'), "</textarea> <!-- Changed to join by new line -->\n                <h3>Languages</h3>\n                <textarea id=\"edit-languages\">").concat(data.languages.join('\n'), "</textarea> <!-- Changed to join by new line -->\n            </section>\n            <button id=\"save-resume\">Save</button>\n        </div>\n    ");
    // Attach save event listener
    var saveButton = document.getElementById('save-resume');
    if (saveButton) {
        saveButton.addEventListener('click', saveResume);
    }
}
// Function to save the edited resume data
function saveResume() {
    var resumeData = {
        name: document.getElementById('edit-name').value.trim(),
        email: document.getElementById('edit-email').value.trim(),
        phone: document.getElementById('edit-phone').value.trim(),
        address: document.getElementById('edit-address').value.trim(),
        skills: document.getElementById('edit-skills').value.trim().split('\n'), // Changed to split by new line
        education: document.getElementById('edit-education').value.trim(),
        experience: {
            company: document.getElementById('edit-company').value.trim(),
            designation: document.getElementById('edit-designation').value.trim(),
            details: document.getElementById('edit-details').value.trim(),
        },
        languages: document.getElementById('edit-languages').value.trim().split('\n'), // Changed to split by new line
    };
    console.log('Updated Resume Data:', resumeData);
    // Optionally call generateResumePreview(resumeData) here to display the updated values
}
// Function to initialize form event listeners
function initializeForm() {
    var form = document.getElementById('resume-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    else {
        console.error('Could not find resume-form element.');
    }
}
// Initialize form when the document is fully loaded
window.addEventListener('DOMContentLoaded', initializeForm);
