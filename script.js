

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

// This is an array (list) of objects
       const navItems = [
    {
      id: 'home-button',
      icon: 'fas fa-home nav-icon',
      label: 'Home',
      href: '#',  // '#' it is used as placeholder to make a clickable link
    },
    {
      id: 'toggle-skills',  // toggle to get a drop down
      icon: 'fas fa-cogs nav-icon',
      label: 'Skills',
      href: '#',
    },
    {
      id: 'toggle-contact',
      icon: 'fas fa-address-book nav-icon',
      label: 'Contacts',
      href: '#',
    },
    {
      id: 'toggle-section',
      icon: 'fas fa-award nav-icon',
      label: 'Certificates&Awards',
      href: '#',
    },
    {
      id: 'projects-courses',
      icon: 'fas fa-project-diagram nav-icon',
      label: 'Projects&Courses',
      href: 'projects and courses.html',
    }
  ];

// Define a JavaScript object to hold video data
       const videoData = {
  source: '/images/videoo.mp4',  // Path to the video file
  type: 'video/mp4',              // Type of the video
  autoplay: true,                  // Autoplay setting
  muted: true,                     // Muted setting
  loop: true                       // Loop setting
   };


// This function is responsible for creating and adding the navigation links to the page
        function populateNav() {
        // Find the <nav> element in the HTML
     const navElement = document.querySelector('nav');
    
    // Loop through each item in the navItems list
    navItems.forEach(item => {
      // Create an <a> (anchor/link) element
      const aTag = document.createElement('a');
       // Set the ID and link (href) for the anchor
      aTag.setAttribute('id', item.id);
      aTag.setAttribute('href', item.href);
  
      // Create icon i element
      const iconTag = document.createElement('i');
      iconTag.className = item.icon;
  
       // Add the icon and label text to the anchor (the link)
      aTag.appendChild(iconTag);
      aTag.appendChild(document.createTextNode(' ' + item.label));
  
     // Add the finished anchor (link) to the <nav> element
      navElement.appendChild(aTag);
    });
 }


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





  // Call the function on page load
  window.onload = populateNav;
  populateVideo();
  populateMotto();
  populateProfile();
  
          