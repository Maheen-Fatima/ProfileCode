
// JavaScript Object holding skills data
        const skillsData = {
    title: "My Skills",
    items: [
        "C++",
        "C#",
        "Java",
        "Web Development",
        "Communication skills",
        "Microsoft Office",
        "Team work"
    ]
};

// JavaScript Object holding certificates and achievements data
       const certificatesAchievements = {
  title: "Certificates & Achievements",
  items: [
      "Participation in IKLC",
      "MUN participation at school level",
      "Kinnaird festival of Statistics and Data Science",
      "Kinnaird Festival of Statistics and Data Science Poster Competition - 1st position",
      "Scored 2nd Position in IKLC at school level"
  ]
};

// JavaScript Object holding profile data
       const profile = {
  name: "Maheen Fatima",
  profilePic: "/images/pic1.jpeg",
  contact: {
      phone: "03234666447",
      email: "bscs22093@itu.edu.pk"
  },
  education: [
      {
          degree: "Bachelor's",
          field: "BS Computer Science",
          institution: "Information Technology University",
          date: "Aug 2022 - Aug 2026"
      },
      {
          degree: "Intermediate",
          field: "Intermediate in Computer Science",
          institution: "Kinnaird College for Women",
          date: "Sept 2020 - Sept 2022"
      },
      {
          degree: "School",
          institution: "Lahore Grammar School"
      }
  ]
};


// JavaScript Object holding motto data
       const motto = {
  urdu: {
      text: "انسان کے لئے وہی کچھ ہے جس کے لئے وہ کوشش کرے",
      direction: "rtl"
  },
  arabic: {
      text: "الإنسان فقط يحصل على ما يسعى إليه",
      direction: "rtl"
  }
};


// Define a JavaScript object to hold video data
       const videoData = {
  source: '/images/videoo.mp4',  // Path to the video file
  type: 'video/mp4',              // Type of the video
  autoplay: true,                  // Autoplay setting
  muted: true,                     // Muted setting
  loop: true                       // Loop setting
   };

// Function to populate the video element based on videoData
       function populateVideo() {
     // Select the video frame element
    const videoFrame = document.querySelector('.video-frame');

    // Create video element
    const videoElement = document.createElement('video');

    // Set video attributes from the object
    videoElement.autoplay = videoData.autoplay;  // Set autoplay
    videoElement.muted = videoData.muted;        // Set muted
    videoElement.loop = videoData.loop;          // Set loop
    videoElement.className = 'bg-video';         // Set class name

    // Create source element
    const sourceElement = document.createElement('source');
    sourceElement.src = videoData.source;        // Set source path
    sourceElement.type = videoData.type;         // Set source type

    // Append source to video element
    videoElement.appendChild(sourceElement);

    // Append video element to video frame
    videoFrame.appendChild(videoElement);
}


       function populateMotto() {
  const mottoDiv = document.querySelector('.motto');
  
  // Create Urdu motto element
  const urduMottoDiv = document.createElement('div');
  urduMottoDiv.classList.add('motto-urdu');
  urduMottoDiv.setAttribute('dir', motto.urdu.direction);
  urduMottoDiv.textContent = motto.urdu.text;
  
  // Create Arabic motto element
  const arabicMottoDiv = document.createElement('div');
  arabicMottoDiv.classList.add('motto-arabic');
  arabicMottoDiv.setAttribute('dir', motto.arabic.direction);
  arabicMottoDiv.textContent = motto.arabic.text;
  
  // Append the elements to the main motto div
  mottoDiv.appendChild(urduMottoDiv);
  mottoDiv.appendChild(arabicMottoDiv);
}

// Function to populate the profile in HTML 
       function populateProfile() {
  const profileSection = document.querySelector('.profile-section');

  // Set profile picture and name
  const profilePic = profileSection.querySelector('.profile-pic');
  profilePic.src = profile.profilePic;

  const profileName = profileSection.querySelector('.profile-name');
  profileName.textContent = profile.name;

  // Set contact information
  const contactInfo = profileSection.querySelector('.contact-info');
  contactInfo.innerHTML = `
      <p><span class="icon">📞</span>${profile.contact.phone}</p>
      <p><span class="icon">📧</span>${profile.contact.email}</p>
  `;

  // Set education list
  const educationList = profileSection.querySelector('.education-list ul');
  profile.education.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <strong>${item.degree}:</strong> ${item.field || ''} ${item.institution}
          <br><span class="date">${item.date || ''}</span>
      `;
      educationList.appendChild(listItem);
  });
}
// Function to populate the certificates and achievements in HTML dynamically
       function populateCertificatesAchievements() {
      const section = document.getElementById('certificates-achievements-courses');
       const title = section.querySelector('h2');
      const list = section.querySelector('ul');

    // Set the title
     title.textContent = certificatesAchievements.title;

      // Populate the list with items
      certificatesAchievements.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
  });
}


       function hideAllSections() {
    document.getElementById('skills').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('certificates-achievements-courses').style.display = 'none';
}

       document.getElementById('toggle-skills').addEventListener('click', function() {
    hideAllSections(); // Hide all sections first
    document.getElementById('skills').style.display = 'block'; // Show only the skills section
});

        document.getElementById('toggle-contact').addEventListener('click', function() {
    hideAllSections(); // Hide all sections first
    document.getElementById('contact').style.display = 'block'; // Show only the contact section
});

        document.getElementById('toggle-section').addEventListener('click', function() {
    hideAllSections(); // Hide all sections first
    document.getElementById('certificates-achievements-courses').style.display = 'block'; // Show only the certificates section
});
     // Event listener for the "Home" button to hide all sections and reset the view
        document.getElementById('home-button').addEventListener('click', function() {
    hideAllSections(); // Hide all sections when "Home" is clicked
});

     // Function to populate the skills in HTML dynamically
        function populateSkills() {
    const skillsSection = document.getElementById('skills');
    const title = skillsSection.querySelector('h2');
    const list = skillsSection.querySelector('ul');

    // Set the title
    title.textContent = skillsData.title;

    // Populate the list with items
    skillsData.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}






  // Call the function on page load
  populateVideo();
  populateMotto();
  populateProfile();
  populateCertificatesAchievements();
  populateSkills();
   
          